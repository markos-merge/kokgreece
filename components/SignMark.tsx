type SignMarkProps = {
  id: string;
  className?: string;
};

function Frame({
  children,
  className,
  bg = "#fff"
}: {
  children: React.ReactNode;
  className?: string;
  bg?: string;
}) {
  return (
    <svg viewBox="0 0 120 120" className={className} role="img">
      <rect x="4" y="4" width="112" height="112" rx="10" fill="#1a1713" />
      <rect x="10" y="10" width="100" height="100" rx="8" fill={bg} />
      {children}
    </svg>
  );
}

export function SignMark({ id, className = "h-28 w-28" }: SignMarkProps) {
  switch (id) {
    case "stop":
      return (
        <svg viewBox="0 0 120 120" className={className} role="img">
          <polygon
            points="60,8 104,30 104,90 60,112 16,90 16,30"
            fill="#c8102e"
            stroke="#fff"
            strokeWidth="6"
          />
          <text x="60" y="70" textAnchor="middle" fill="#fff" fontSize="22" fontWeight="800">
            STOP
          </text>
        </svg>
      );
    case "yield":
      return (
        <svg viewBox="0 0 120 120" className={className} role="img">
          <polygon points="60,110 10,18 110,18" fill="#c8102e" />
          <polygon points="60,92 28,32 92,32" fill="#fff" />
        </svg>
      );
    case "no-entry":
      return (
        <svg viewBox="0 0 120 120" className={className} role="img">
          <circle cx="60" cy="60" r="46" fill="#c8102e" />
          <rect x="28" y="52" width="64" height="16" fill="#fff" />
        </svg>
      );
    case "speed-50":
    case "speed-80":
    case "speed-120":
    case "min-speed": {
      const value = id === "min-speed" ? "30" : id.split("-")[1];
      const blue = id === "min-speed";
      return (
        <svg viewBox="0 0 120 120" className={className} role="img">
          <circle cx="60" cy="60" r="46" fill={blue ? "#1d4ed8" : "#fff"} stroke={blue ? "none" : "#c8102e"} strokeWidth="10" />
          <text
            x="60"
            y="70"
            textAnchor="middle"
            fill={blue ? "#fff" : "#111"}
            fontSize={value.length > 2 ? "28" : "34"}
            fontWeight="800"
          >
            {value}
          </text>
        </svg>
      );
    }
    case "no-overtaking":
      return (
        <svg viewBox="0 0 120 120" className={className} role="img">
          <circle cx="60" cy="60" r="46" fill="#fff" stroke="#c8102e" strokeWidth="10" />
          <rect x="28" y="48" width="28" height="18" rx="3" fill="#111" />
          <rect x="62" y="48" width="28" height="18" rx="3" fill="#c8102e" />
        </svg>
      );
    case "end-restrictions":
      return (
        <svg viewBox="0 0 120 120" className={className} role="img">
          <circle cx="60" cy="60" r="46" fill="#fff" stroke="#111" strokeWidth="6" />
          <line x1="28" y1="92" x2="92" y2="28" stroke="#111" strokeWidth="8" />
        </svg>
      );
    case "no-u-turn":
      return (
        <svg viewBox="0 0 120 120" className={className} role="img">
          <circle cx="60" cy="60" r="46" fill="#fff" stroke="#c8102e" strokeWidth="10" />
          <path d="M40 78 V48 a16 16 0 0 1 32 0 V70" fill="none" stroke="#111" strokeWidth="7" />
          <polygon points="72,70 80,54 64,54" fill="#111" />
          <line x1="34" y1="86" x2="86" y2="34" stroke="#c8102e" strokeWidth="8" />
        </svg>
      );
    case "mandatory-right":
    case "mandatory-left":
    case "one-way":
      return (
        <svg viewBox="0 0 120 120" className={className} role="img">
          <circle cx="60" cy="60" r="46" fill="#1d4ed8" />
          {id === "one-way" ? (
            <polygon points="60,24 84,70 36,70" fill="#fff" />
          ) : (
            <polygon
              points={id === "mandatory-right" ? "88,60 48,32 48,88" : "32,60 72,32 72,88"}
              fill="#fff"
            />
          )}
        </svg>
      );
    case "priority-road":
      return (
        <svg viewBox="0 0 120 120" className={className} role="img">
          <rect x="22" y="22" width="76" height="76" rx="4" transform="rotate(45 60 60)" fill="#111" />
          <rect x="30" y="30" width="60" height="60" transform="rotate(45 60 60)" fill="#f5c518" />
        </svg>
      );
    case "end-priority":
      return (
        <svg viewBox="0 0 120 120" className={className} role="img">
          <rect x="30" y="30" width="60" height="60" transform="rotate(45 60 60)" fill="#fff" stroke="#111" strokeWidth="4" />
          <line x1="34" y1="86" x2="86" y2="34" stroke="#111" strokeWidth="8" />
        </svg>
      );
    case "hospital":
      return (
        <Frame className={className} bg="#1d4ed8">
          <text x="60" y="76" textAnchor="middle" fill="#fff" fontSize="48" fontWeight="800">
            H
          </text>
        </Frame>
      );
    case "highway":
      return (
        <Frame className={className} bg="#1d4ed8">
          <rect x="40" y="28" width="12" height="64" fill="#fff" />
          <rect x="68" y="28" width="12" height="64" fill="#fff" />
        </Frame>
      );
    case "curve-right":
    case "curve-left":
      return (
        <svg viewBox="0 0 120 120" className={className} role="img">
          <polygon points="60,10 112,108 8,108" fill="#f5c518" stroke="#111" strokeWidth="4" />
          <path
            d={id === "curve-right" ? "M44 82 Q44 48 78 40" : "M76 82 Q76 48 42 40"}
            fill="none"
            stroke="#111"
            strokeWidth="8"
            strokeLinecap="round"
          />
        </svg>
      );
    case "slippery":
      return (
        <svg viewBox="0 0 120 120" className={className} role="img">
          <polygon points="60,10 112,108 8,108" fill="#f5c518" stroke="#111" strokeWidth="4" />
          <path d="M40 86 Q52 70 44 58 Q60 64 70 50 Q78 68 86 80" fill="none" stroke="#111" strokeWidth="6" />
        </svg>
      );
    case "children":
      return (
        <svg viewBox="0 0 120 120" className={className} role="img">
          <polygon points="60,10 112,108 8,108" fill="#f5c518" stroke="#111" strokeWidth="4" />
          <circle cx="48" cy="58" r="6" fill="#111" />
          <circle cx="70" cy="54" r="6" fill="#111" />
          <path d="M48 66 L48 86 M48 70 L38 80 M48 70 L58 80" stroke="#111" strokeWidth="4" />
          <path d="M70 62 L70 86 M70 66 L62 78 M70 66 L80 76" stroke="#111" strokeWidth="4" />
        </svg>
      );
    case "works":
      return (
        <svg viewBox="0 0 120 120" className={className} role="img">
          <polygon points="60,10 112,108 8,108" fill="#f5c518" stroke="#111" strokeWidth="4" />
          <rect x="40" y="62" width="40" height="22" fill="#111" />
          <rect x="52" y="50" width="16" height="14" fill="#111" />
        </svg>
      );
    case "falling-rocks":
      return (
        <svg viewBox="0 0 120 120" className={className} role="img">
          <polygon points="60,10 112,108 8,108" fill="#f5c518" stroke="#111" strokeWidth="4" />
          <polygon points="40,50 58,50 50,68" fill="#111" />
          <polygon points="62,58 80,58 72,78" fill="#111" />
          <path d="M30 88 H90" stroke="#111" strokeWidth="5" />
        </svg>
      );
    case "traffic-lights":
      return (
        <svg viewBox="0 0 120 120" className={className} role="img">
          <polygon points="60,10 112,108 8,108" fill="#f5c518" stroke="#111" strokeWidth="4" />
          <rect x="50" y="42" width="20" height="48" rx="4" fill="#111" />
          <circle cx="60" cy="52" r="4" fill="#c8102e" />
          <circle cx="60" cy="66" r="4" fill="#f5c518" />
          <circle cx="60" cy="80" r="4" fill="#16a34a" />
        </svg>
      );
    case "animals":
      return (
        <svg viewBox="0 0 120 120" className={className} role="img">
          <polygon points="60,10 112,108 8,108" fill="#f5c518" stroke="#111" strokeWidth="4" />
          <ellipse cx="62" cy="74" rx="18" ry="10" fill="#111" />
          <circle cx="78" cy="62" r="7" fill="#111" />
        </svg>
      );
    case "pedestrian":
      return (
        <svg viewBox="0 0 120 120" className={className} role="img">
          <polygon points="60,10 112,108 8,108" fill="#f5c518" stroke="#111" strokeWidth="4" />
          <circle cx="60" cy="48" r="7" fill="#111" />
          <path d="M60 56 V78 M60 64 L46 72 M60 64 L74 58 M60 78 L50 94 M60 78 L72 94" stroke="#111" strokeWidth="5" />
        </svg>
      );
    case "roundabout":
      return (
        <svg viewBox="0 0 120 120" className={className} role="img">
          <circle cx="60" cy="60" r="46" fill="#1d4ed8" />
          <circle cx="60" cy="60" r="14" fill="none" stroke="#fff" strokeWidth="6" />
          <polygon points="60,18 70,36 50,36" fill="#fff" />
        </svg>
      );
    case "no-parking":
      return (
        <svg viewBox="0 0 120 120" className={className} role="img">
          <circle cx="60" cy="60" r="46" fill="#1d4ed8" />
          <circle cx="60" cy="60" r="38" fill="none" stroke="#c8102e" strokeWidth="8" />
          <line x1="32" y1="32" x2="88" y2="88" stroke="#c8102e" strokeWidth="8" />
          <line x1="88" y1="32" x2="32" y2="88" stroke="#c8102e" strokeWidth="8" />
        </svg>
      );
    case "no-stopping":
      return (
        <svg viewBox="0 0 120 120" className={className} role="img">
          <circle cx="60" cy="60" r="46" fill="#1d4ed8" />
          <circle cx="60" cy="60" r="38" fill="none" stroke="#c8102e" strokeWidth="8" />
          <line x1="32" y1="32" x2="88" y2="88" stroke="#c8102e" strokeWidth="8" />
        </svg>
      );
    case "give-way-opposite":
      return (
        <svg viewBox="0 0 120 120" className={className} role="img">
          <rect x="12" y="12" width="96" height="96" rx="8" fill="#fff" stroke="#111" strokeWidth="4" />
          <polygon points="40,80 40,40 28,40" fill="#c8102e" />
          <polygon points="80,40 80,80 92,80" fill="#111" />
        </svg>
      );
    case "pedestrian-zone":
      return (
        <Frame className={className} bg="#1d4ed8">
          <circle cx="60" cy="42" r="8" fill="#fff" />
          <path d="M60 52 V78 M60 60 L46 70 M60 60 L74 70 M60 78 L50 96 M60 78 L72 96" stroke="#fff" strokeWidth="5" />
        </Frame>
      );
    default:
      return (
        <Frame className={className}>
          <text x="60" y="68" textAnchor="middle" fill="#111" fontSize="14">
            ΚΟΚ
          </text>
        </Frame>
      );
  }
}

export const SIGN_CATALOG = [
  { id: "stop", chapter: "regulatory-signs" as const },
  { id: "yield", chapter: "regulatory-signs" as const },
  { id: "no-entry", chapter: "regulatory-signs" as const },
  { id: "speed-50", chapter: "regulatory-signs" as const },
  { id: "speed-80", chapter: "regulatory-signs" as const },
  { id: "speed-120", chapter: "regulatory-signs" as const },
  { id: "min-speed", chapter: "regulatory-signs" as const },
  { id: "no-overtaking", chapter: "regulatory-signs" as const },
  { id: "end-restrictions", chapter: "regulatory-signs" as const },
  { id: "no-u-turn", chapter: "regulatory-signs" as const },
  { id: "mandatory-right", chapter: "regulatory-signs" as const },
  { id: "one-way", chapter: "info-signs" as const },
  { id: "priority-road", chapter: "info-signs" as const },
  { id: "end-priority", chapter: "info-signs" as const },
  { id: "hospital", chapter: "info-signs" as const },
  { id: "highway", chapter: "info-signs" as const },
  { id: "pedestrian-zone", chapter: "info-signs" as const },
  { id: "curve-right", chapter: "danger-signs" as const },
  { id: "slippery", chapter: "danger-signs" as const },
  { id: "children", chapter: "danger-signs" as const },
  { id: "works", chapter: "danger-signs" as const },
  { id: "falling-rocks", chapter: "danger-signs" as const },
  { id: "traffic-lights", chapter: "danger-signs" as const },
  { id: "animals", chapter: "danger-signs" as const },
  { id: "pedestrian", chapter: "danger-signs" as const },
  { id: "roundabout", chapter: "priority" as const },
  { id: "give-way-opposite", chapter: "priority" as const },
  { id: "no-parking", chapter: "parking" as const },
  { id: "no-stopping", chapter: "parking" as const }
];
