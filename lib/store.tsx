"use client";

import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode
} from "react";
import type {
  AnswerRecord,
  AppState,
  LicenseCategory,
  Settings,
  TestResult,
  User
} from "@/lib/types";

const STORAGE_KEY = "kokgreece-state-v1";

const defaultSettings: Settings = {
  locale: "el",
  category: "car",
  hideAnswers: false,
  autoHelp: false
};

const defaultState: AppState = {
  users: [],
  currentUserId: null,
  settings: defaultSettings,
  history: [],
  results: []
};

function loadState(): AppState {
  if (typeof window === "undefined") return defaultState;
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return defaultState;
    return { ...defaultState, ...JSON.parse(raw) };
  } catch {
    return defaultState;
  }
}

type Store = AppState & {
  ready: boolean;
  currentUser: User | null;
  setLocale: (locale: Settings["locale"]) => void;
  setCategory: (category: LicenseCategory) => void;
  updateSettings: (patch: Partial<Settings>) => void;
  register: (user: Omit<User, "id" | "createdAt">) => { ok: boolean; error?: string };
  login: (username: string, password: string) => boolean;
  logout: () => void;
  recordAnswers: (records: AnswerRecord[], result: TestResult) => void;
};

const StoreContext = createContext<Store | null>(null);

export function StoreProvider({ children }: { children: ReactNode }) {
  const [state, setState] = useState<AppState>(defaultState);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    setState(loadState());
    setReady(true);
  }, []);

  useEffect(() => {
    if (!ready) return;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  }, [state, ready]);

  const value = useMemo<Store>(() => {
    const currentUser = state.users.find((u) => u.id === state.currentUserId) ?? null;
    return {
      ...state,
      ready,
      currentUser,
      setLocale: (locale) =>
        setState((prev) => ({ ...prev, settings: { ...prev.settings, locale } })),
      setCategory: (category) =>
        setState((prev) => ({ ...prev, settings: { ...prev.settings, category } })),
      updateSettings: (patch) =>
        setState((prev) => ({ ...prev, settings: { ...prev.settings, ...patch } })),
      register: (user) => {
        const exists = state.users.some(
          (item) =>
            item.email.toLowerCase() === user.email.toLowerCase() ||
            item.username.toLowerCase() === user.username.toLowerCase()
        );
        if (exists) return { ok: false, error: "exists" };
        const created: User = {
          ...user,
          id: crypto.randomUUID(),
          createdAt: new Date().toISOString()
        };
        setState((prev) => ({
          ...prev,
          users: [...prev.users, created],
          currentUserId: created.id,
          settings: { ...prev.settings, category: created.category }
        }));
        return { ok: true };
      },
      login: (username, password) => {
        const found = state.users.find(
          (item) =>
            (item.username.toLowerCase() === username.toLowerCase() ||
              item.email.toLowerCase() === username.toLowerCase()) &&
            item.password === password
        );
        if (!found) return false;
        setState((prev) => ({
          ...prev,
          currentUserId: found.id,
          settings: { ...prev.settings, category: found.category }
        }));
        return true;
      },
      logout: () => setState((prev) => ({ ...prev, currentUserId: null })),
      recordAnswers: (records, result) =>
        setState((prev) => ({
          ...prev,
          history: [...prev.history, ...records],
          results: [result, ...prev.results].slice(0, 50)
        }))
    };
  }, [state, ready]);

  return <StoreContext.Provider value={value}>{children}</StoreContext.Provider>;
}

export function useStore() {
  const ctx = useContext(StoreContext);
  if (!ctx) throw new Error("StoreProvider missing");
  return ctx;
}
