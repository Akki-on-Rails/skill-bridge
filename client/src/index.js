import React from "react"
import ReactDOM from "react-dom/client"
import "./styles/index.scss"
import App from "./App"
import { AuthContextProvider } from './context/AuthContext'; // then we wrap it around the App component

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
  <React.StrictMode>
    <AuthContextProvider>
      <App />
    </AuthContextProvider>
  </React.StrictMode>
)
