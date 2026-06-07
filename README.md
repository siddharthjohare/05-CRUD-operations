# 💻 CRUD Operations Dashboard

A production-ready data management panel engineered with React.js and Vite. This application executes complete Create, Read, Update, and Delete operations synced securely with a remote REST API. It showcases a modern declarative UI layout styled via Bootstrap 5, complete multi-view client-side routing, and a dynamic dark mode state configuration.

---

### 🚀 Live Deployment
👉 **[Click Here to View Live CRUD Dashboard](https://05-crud-operations.vercel.app/)**

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
