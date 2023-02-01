import LoginCard from "./components/login-card"
import Footer from "./components/footer"
import Header from "./components/header"

function App() {
  return (
    <div className="App">
      <body>
        <div className={"body_wrapper"}>
          <Header />
          <LoginCard />
          <Footer />
        </div>
      </body>
    </div>
  )
}

export default App
