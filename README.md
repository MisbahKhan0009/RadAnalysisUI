🧪 RadAnalysis UI • Windows Guide
=================================

Modern React + Vite app with a lightweight desktop build powered by Tauri.


Table of Contents
-----------------

- 🚀 Quick Start
- 🧰 Prerequisites
- 📥 Clone the Repo
- 📦 Install Dependencies
- 🌐 Run the Web App
- 🖥️ Run the Desktop App (Tauri)
- 🏗️ Build Artifacts
- 🛠️ Troubleshooting (Windows)
- 🧪 Scripts Reference
- 🗂️ Project Structure
- ⚙️ Customize Tauri


🚀 Quick Start
--------------

1) Install prerequisites (below)  2) Clone  3) Install  4) Run

```powershell
# 1) Clone
git clone https://github.com/MisbahKhan0009/RadAnalysisUI.git
cd RadAnalysisUI

# 2) Install deps
npm install

# 3) Web dev
npm run dev

# 4) Desktop dev (Tauri)
npm run tauri:dev
```


🧰 Prerequisites
----------------

Install these once on your Windows PC:

- 🟢 Node.js 18+ (includes npm): <https://nodejs.org/>
- 🧷 Git (optional but recommended): <https://git-scm.com/>

For the desktop app (Tauri builds):

- 🦀 Rust toolchain (stable): <https://www.rust-lang.org/tools/install>
- 🛠️ Visual Studio Build Tools with “Desktop development with C++”
	- Download: <https://visualstudio.microsoft.com/downloads/>
	- Visual Studio Installer → Modify → check “Desktop development with C++” → Install
- 🌐 WebView2 Runtime: <https://developer.microsoft.com/microsoft-edge/webview2/>


📥 Clone the Repo
-----------------

Open Windows PowerShell and run:

```powershell
git clone https://github.com/MisbahKhan0009/RadAnalysisUI.git
cd RadAnalysisUI
```


📦 Install Dependencies
-----------------------

```powershell
npm install
```


🌐 Run the Web App
------------------

```powershell
npm run dev
```

- Then open the printed local URL (typically <http://localhost:5173>) in your browser.


🖥️ Run the Desktop App (Tauri – dev)
------------------------------------

Runs a native window that hosts the same app with hot reload.

```powershell
npm run tauri:dev
```

Notes:

- ⏱️ First run compiles Rust; it can take a few minutes.
- 🪟 The Tauri window opens automatically. If it’s blank, ensure the Vite dev server is running (this script starts it for you).


🏗️ Build Production Artifacts
-----------------------------

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

Outputs are placed under `src-tauri/target/` (e.g., `.msi` or `.exe` on Windows).


🛠️ Troubleshooting (Windows)
----------------------------

- 🧩 Rust/MSVC missing
	- Errors mentioning `link.exe`/MSVC → install “Desktop development with C++” via Visual Studio Build Tools.
	- No Rust detected → install from <https://www.rust-lang.org/> and restart PowerShell.

- 🌐 WebView2 missing
	- Install from <https://developer.microsoft.com/microsoft-edge/webview2/>

- 🔌 Port 5173 already in use
	- Close other dev servers, or change the port in `vite.config.js` and re-run.

- 🧹 Clean rebuild
	- Delete `node_modules` → run `npm install` again.
	- For Tauri, remove `src-tauri/target` to force a clean Rust build.


🧪 Scripts Reference
--------------------

- `npm run dev` – Start web dev server (Vite)
- `npm run build` – Build web assets into `dist/`
- `npm run preview` – Preview the built web assets locally
- `npm run tauri:dev` – Start desktop app (Tauri) in dev mode
- `npm run tauri:build` – Build desktop installers/bundles (Tauri)


🗂️ Project Structure
--------------------

- `src/` – React application source code
- `src-tauri/` – Tauri (desktop) project: Rust sources and config
- `vite.config.js` – Vite configuration
- `package.json` – Scripts and dependencies
- `dist/` – Web production build output (after `npm run build`)


⚙️ Customize Tauri
------------------

Want a custom app identifier, window title/size, or installer metadata? Update `src-tauri/tauri.conf.json` and rebuild.
