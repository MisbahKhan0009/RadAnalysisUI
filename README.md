# RadAnalysis UI – Setup and Run Guide (Windows)

This project is a React + Vite application with a desktop build using Tauri.

## 1) Prerequisites

Install these once on your PC:

- Node.js 18+ (includes npm): <https://nodejs.org/>
- Git (optional but recommended): <https://git-scm.com/>

For the desktop app (Tauri builds):

- Rust toolchain (stable): <https://www.rust-lang.org/tools/install>
- Visual Studio Build Tools with “Desktop development with C++” workload
	- Download: <https://visualstudio.microsoft.com/downloads/>
	- Open “Installers” > Modify > check “Desktop development with C++” > Install
- WebView2 Runtime (usually preinstalled on Windows 11):
	- <https://developer.microsoft.com/microsoft-edge/webview2/>

## 2)Clone the repo

1. Open PowerShell.
2. Run: `git clone [<repo-url>](https://github.com/MisbahKhan0009/RadAnalysisUI.git)`
3. `cd RadAnalysisUI`

## 3) Install dependencies

Open PowerShell in the project folder and run:

```powershell
npm install
```

## 4) Run the web app (browser)

```powershell
npm run dev
```

- Then open the printed local URL (typically <http://localhost:5173>) in your browser.

## 5) Run the desktop app (Tauri – dev)

Runs a native window that hosts the same app with hot reload.

```powershell
npm run tauri:dev
```

Notes:

- The first run will compile Rust code; this can take a few minutes.
- The Tauri window will open automatically. If it’s blank, ensure the dev server (Vite) is running; the script starts it for you.

## 6) Build production artifacts

Web build (outputs to `dist/`):

```powershell
npm run build
```

Preview the production build locally:

```powershell
npm run preview
```

Desktop installers (Tauri bundles):

```powershell
npm run tauri:build
```

Outputs are placed under `src-tauri/target/` (e.g., an `.msi` or `.exe` for Windows).

## 7) Common issues (Windows)

- Rust/Build tools missing
	- Error mentions `link.exe`/MSVC: install “Desktop development with C++” via Visual Studio Build Tools.
	- Error about Rust: install Rust from <https://www.rust-lang.org/> and then restart PowerShell.

- WebView2 missing
	- Install from <https://developer.microsoft.com/microsoft-edge/webview2/>

- Port 5173 already in use
	- Close other dev servers or change the port in `vite.config.js` and re-run.

- Clean rebuild
	- Delete `node_modules` and run `npm install` again.
	- For Tauri, you can also remove `src-tauri/target` to force a clean Rust build.

## 8) Scripts reference

- `npm run dev` – Start web dev server (Vite)
- `npm run build` – Build web assets into `dist/`
- `npm run preview` – Preview the built web assets locally
- `npm run tauri:dev` – Start desktop app (Tauri) in dev mode
- `npm run tauri:build` – Build desktop installers/bundles (Tauri)

## 9) Project structure (high level)

- `src/` – React application source code
- `src-tauri/` – Tauri (desktop) project: Rust sources and config
- `vite.config.js` – Vite configuration
- `package.json` – Scripts and dependencies
- `dist/` – Web production build output (after `npm run build`)

If you need us to customize the app identifier, window title/size, or installer metadata, we can update `src-tauri/tauri.conf.json` for you.
