import Cart from "./screens/Cart"
import Home from "./screens/Home"

const App =() => {
  
  if (window.location.pathname === "/"){
    return <Home />
  }
  else if (window.location.pathname === "/cart"){
    return <Cart />
  }
}

export default App