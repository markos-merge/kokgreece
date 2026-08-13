# ΚΟΚ Ελλάς

Independent practice app for the Greek driving-theory exam (ΚΟΚ). It covers the same study path as sites like testkok.gr: easy tests, chapter drills, prepared sets, and a ministry-style exam.

This project is not affiliated with the Ministry of Infrastructure and Transport or with TestKOK.

## Use it from a tablet (no computer)

You cannot run `npm` on a normal tablet. Publish the site once from the tablet browser, then open the link like any website — and pin it to the home screen.

### 1. Merge the code on GitHub

1. On the tablet, open [pull request #1](https://github.com/markos-merge/kokgreece/pull/1).
2. Tap **Merge pull request**, then **Confirm merge**.

### 2. Publish a website with Vercel (free)

1. Open [https://vercel.com/signup](https://vercel.com/signup) in Safari or Chrome.
2. Choose **Continue with GitHub** and allow access to the `kokgreece` repo.
3. Tap **Add New… → Project**.
4. Select **kokgreece** and tap **Deploy**.
5. Wait about a minute. Vercel gives you a link such as `https://kokgreece.vercel.app`.
6. Open that link on the tablet. That is the app.

### 3. Put it on the home screen

**iPad (Safari)**  
Share → **Add to Home Screen** → Add.

**Android tablet (Chrome)**  
Menu (⋮) → **Add to Home screen** or **Install app**.

Progress is stored on that tablet (local accounts and stats). It does not need a personal computer after this.

If Vercel asks which branch to deploy, use `main` after you merge the pull request.

## Features

- Easy test (two answers), chapter tests, prepared sets, progress and errors review
- Ministry / Test Drive simulation: 30 questions, timer, one allowed error
- Categories: car, motorcycle, truck, bus
- Theory notes and a traffic-sign atlas
- Greek / English, guest mode or local accounts, stats on this device

## Develop (computer only)

Node 20, 22, 24, and 26 all work. Native Next.js SWC often crashes (`bus error`) on newer Node/glibc, so this repo uses the WASM compiler.

```bash
git pull
rm -rf node_modules .next
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

If Vercel asks which branch to deploy, use `main` after you merge the pull request.
