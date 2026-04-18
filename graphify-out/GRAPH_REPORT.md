# Graph Report - .  (2026-04-18)

## Corpus Check
- Corpus is ~10,378 words - fits in a single context window. You may not need a graph.

## Summary
- 78 nodes · 62 edges · 21 communities detected
- Extraction: 87% EXTRACTED · 13% INFERRED · 0% AMBIGUOUS · INFERRED: 8 edges (avg confidence: 0.81)
- Token cost: 0 input · 0 output

## Community Hubs (Navigation)
- [[_COMMUNITY_App Shell & Auth Routing|App Shell & Auth Routing]]
- [[_COMMUNITY_UI Primitives|UI Primitives]]
- [[_COMMUNITY_Server Backend|Server Backend]]
- [[_COMMUNITY_Text-to-Speech Pipeline|Text-to-Speech Pipeline]]
- [[_COMMUNITY_Deployment & Project Meta|Deployment & Project Meta]]
- [[_COMMUNITY_Realtime Socket Pages|Realtime Socket Pages]]
- [[_COMMUNITY_HTML Entry & Assets|HTML Entry & Assets]]
- [[_COMMUNITY_Translation Service|Translation Service]]
- [[_COMMUNITY_WebRTC TURN Config|WebRTC TURN Config]]
- [[_COMMUNITY_LinkedIn Badge|LinkedIn Badge]]
- [[_COMMUNITY_Language Selector|Language Selector]]
- [[_COMMUNITY_Transcript Panel|Transcript Panel]]
- [[_COMMUNITY_Loading Page|Loading Page]]
- [[_COMMUNITY_Join Page|Join Page]]
- [[_COMMUNITY_Host Setup|Host Setup]]
- [[_COMMUNITY_Tailwind Config|Tailwind Config]]
- [[_COMMUNITY_Vite Config|Vite Config]]
- [[_COMMUNITY_PostCSS Config|PostCSS Config]]
- [[_COMMUNITY_Main Entry|Main Entry]]
- [[_COMMUNITY_Languages Config|Languages Config]]
- [[_COMMUNITY_API Config|API Config]]

## God Nodes (most connected - your core abstractions)
1. `SpeakApp` - 7 edges
2. `useAuth()` - 6 edges
3. `index.html entry` - 5 edges
4. `getSocket()` - 3 edges
5. `makeUtterance()` - 3 edges
6. `speakText()` - 3 edges
7. `Routes()` - 2 edges
8. `Landing()` - 2 edges
9. `Admin()` - 2 edges
10. `HostDash()` - 2 edges

## Surprising Connections (you probably didn't know these)
- `index.html entry` --client_entry_for--> `SpeakApp`  [INFERRED]
  client/index.html → README.md
- `Routes()` --calls--> `useAuth()`  [INFERRED]
  client/src/App.jsx → client/src/context/AuthContext.jsx
- `Landing()` --calls--> `useAuth()`  [INFERRED]
  client/src/pages/Landing.jsx → client/src/context/AuthContext.jsx
- `Admin()` --calls--> `useAuth()`  [INFERRED]
  client/src/pages/Admin.jsx → client/src/context/AuthContext.jsx
- `Login()` --calls--> `useAuth()`  [INFERRED]
  client/src/pages/Login.jsx → client/src/context/AuthContext.jsx

## Communities

### Community 0 - "App Shell & Auth Routing"
Cohesion: 0.14
Nodes (6): Admin(), Routes(), useAuth(), Landing(), Login(), Register()

### Community 1 - "UI Primitives"
Cohesion: 0.22
Nodes (0): 

### Community 2 - "Server Backend"
Cohesion: 0.29
Nodes (0): 

### Community 3 - "Text-to-Speech Pipeline"
Cohesion: 0.43
Nodes (4): findVoice(), makeUtterance(), processNextTTS(), speakText()

### Community 4 - "Deployment & Project Meta"
Cohesion: 0.33
Nodes (7): Default admin credentials, GitHub, Local dev port 3001, QR code join flow, Render (hosting), SpeakApp, WebRTC audio streaming

### Community 5 - "Realtime Socket Pages"
Cohesion: 0.33
Nodes (3): Attendee(), HostDash(), getSocket()

### Community 6 - "HTML Entry & Assets"
Cohesion: 0.4
Nodes (5): Inline SVG favicon, Google Fonts (DM Sans, Plus Jakarta Sans), index.html entry, /src/main.jsx module entry, Theme color #0a0a0a

### Community 7 - "Translation Service"
Cohesion: 0.67
Nodes (0): 

### Community 8 - "WebRTC TURN Config"
Cohesion: 1.0
Nodes (0): 

### Community 9 - "LinkedIn Badge"
Cohesion: 1.0
Nodes (0): 

### Community 10 - "Language Selector"
Cohesion: 1.0
Nodes (0): 

### Community 11 - "Transcript Panel"
Cohesion: 1.0
Nodes (0): 

### Community 12 - "Loading Page"
Cohesion: 1.0
Nodes (0): 

### Community 13 - "Join Page"
Cohesion: 1.0
Nodes (0): 

### Community 14 - "Host Setup"
Cohesion: 1.0
Nodes (0): 

### Community 15 - "Tailwind Config"
Cohesion: 1.0
Nodes (0): 

### Community 16 - "Vite Config"
Cohesion: 1.0
Nodes (0): 

### Community 17 - "PostCSS Config"
Cohesion: 1.0
Nodes (0): 

### Community 18 - "Main Entry"
Cohesion: 1.0
Nodes (0): 

### Community 19 - "Languages Config"
Cohesion: 1.0
Nodes (0): 

### Community 20 - "API Config"
Cohesion: 1.0
Nodes (0): 

## Knowledge Gaps
- **8 isolated node(s):** `Render (hosting)`, `GitHub`, `Default admin credentials`, `Local dev port 3001`, `/src/main.jsx module entry` (+3 more)
  These have ≤1 connection - possible missing edges or undocumented components.
- **Thin community `WebRTC TURN Config`** (2 nodes): `webrtc.js`, `refreshTurnCredentials()`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `LinkedIn Badge`** (2 nodes): `LinkedInBadge.jsx`, `LinkedInBadge()`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Language Selector`** (2 nodes): `LangSelect.jsx`, `LangSelect()`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Transcript Panel`** (2 nodes): `TranscriptPanel.jsx`, `TranscriptPanel()`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Loading Page`** (2 nodes): `LoadingPage.jsx`, `LoadingPage()`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Join Page`** (2 nodes): `JoinPage.jsx`, `JoinPage()`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Host Setup`** (2 nodes): `HostSetup.jsx`, `HostSetup()`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Tailwind Config`** (1 nodes): `tailwind.config.js`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Vite Config`** (1 nodes): `vite.config.js`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `PostCSS Config`** (1 nodes): `postcss.config.js`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Main Entry`** (1 nodes): `main.jsx`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Languages Config`** (1 nodes): `languages.js`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `API Config`** (1 nodes): `api.js`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `SpeakApp` connect `Deployment & Project Meta` to `HTML Entry & Assets`?**
  _High betweenness centrality (0.015) - this node is a cross-community bridge._
- **Why does `index.html entry` connect `HTML Entry & Assets` to `Deployment & Project Meta`?**
  _High betweenness centrality (0.012) - this node is a cross-community bridge._
- **Are the 5 inferred relationships involving `useAuth()` (e.g. with `Routes()` and `Landing()`) actually correct?**
  _`useAuth()` has 5 INFERRED edges - model-reasoned connections that need verification._
- **Are the 2 inferred relationships involving `getSocket()` (e.g. with `HostDash()` and `Attendee()`) actually correct?**
  _`getSocket()` has 2 INFERRED edges - model-reasoned connections that need verification._
- **What connects `Render (hosting)`, `GitHub`, `Default admin credentials` to the rest of the system?**
  _8 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `App Shell & Auth Routing` be split into smaller, more focused modules?**
  _Cohesion score 0.14 - nodes in this community are weakly interconnected._