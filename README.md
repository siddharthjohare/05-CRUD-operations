# 💻 CRUD Operations Dashboard

A production-ready data management panel engineered with React.js and Vite. This application executes complete Create, Read, Update, and Delete operations synced securely with a remote REST API. It showcases a modern declarative UI layout styled via Bootstrap 5, complete multi-view client-side routing, and a dynamic dark mode state configuration.

---

### 🚀 Live Deployment
👉 **[Click Here to View Live CRUD Dashboard](https://05-crud-operations.vercel.app/)**

---

**🛠️ Technical Implementation & Core Concepts**
This repository serves as a practical assessment of managing end-to-end relational data matrices inside an isolated frontend engine:

Asynchronous REST API Integration: Implemented HTTP network protocols utilizing the Axios wrapper instance to issue discrete async requests (POST, GET, PUT, DELETE) hitting a remote MockAPI backend infrastructure.

Declarative Client-Side Routing: Configured React Router DOM modules (BrowserRouter, Routes, Route) to instantiate absolute path tracking parameters (/, /read, /update) seamlessly alongside programmatically enforced browser stack history redirects via useNavigate().

State-Driven Cross-Component Persistence: Integrated local browser state caching mechanisms via localStorage.setItem and getItem to map structural entity strings (id, name, email) across decoupled layout routes during execution updates.

Dynamic Event Binding: Leveraged a combination of form submissions (onSubmit), item selection arrays (data.map), deletion mutations (onClick), and data state preservation keys (onMouseDown) to handle multiple operation streams without UI tearing.

Global Theme Configuration: Managed a centralized operational boolean switch state (theme) within the primary entry container, passing runtime execution parameters downstream to map custom dark mode elements (.theme-dark) dynamically.

Polished Enterprise UI Styling: Bundled Bootstrap 5 core UI components along with modern CSS3 transition wrappers (transform: translateY(-2px)) to provide accessible form elements, responsive table layout configurations, and intuitive input feedback alerts.

**📦 Tech Stack Used**
Core Engine: React.js (Functional Hooks Architecture)

Build Bundler: Vite

Routing Architecture: React Router DOM (v6 Matrix)

API Wrapper: Axios HTTP Clients

Cloud Database Endpoint: MockAPI REST Cloud Servers

Style Library: Bootstrap 5 (Responsive Layout Matrices) & Custom CSS3 Variables

Caching Layer: Native Web Storage LocalStorage API

**📂 Modular Codebase Folder Layout**
src/App.jsx - Root shell initializing declarative routes, global structural states, and the centralized Bootstrap Dark Mode toggle configuration.

src/components/Create.jsx - Form capturing user string payloads, firing asynchronous POST requests, and performing validation navigation steps.

src/components/Read.jsx - Renders current cloud database state arrays via optimized .map() matrices, exposes explicit hooks to purge data nodes, and caches index values for adjustments.

src/components/Update.jsx - Consumes client cache fragments inside a secondary mount context (useEffect) to execute specific PUT operations back to active MockAPI parameters.

src/App.css - Custom styling rules enforcing responsive container structures, micro-interactions, and uniform theme overrides.

  ---

### 🎮 Application Architecture & Routing

The system manages view shifting and data flow systematically without client-side page updates:
```text
      [index.html (Bootstrap CDN Init)]
                     ↓
       [App.jsx (Global Theme State)]
                     ↓
         <BrowserRouter> Layout
                     ↓
   -------------------------------------
  ↓                  ↓                  ↓
  / (Create)    /read (Read)     /update (Update)
  [POST API]     [GET/DELETE]      [PUT Request]
