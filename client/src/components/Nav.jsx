import { Link } from "react-router-dom"
import "./Nav.css"

function Nav() {
  const desktop = window.screen.width >= 1024 && window.screen.height >= 768

  return !desktop ? (
      <nav>
        <Link to="/"><h1>Places to go</h1></Link>
        <div className="nav-images">
        <Link to="/"><img src="https://i.imgur.com/yypAWmK.png" alt="Home" width="48px"/></Link>
        <Link to="/new"><img src="https://i.imgur.com/uKjzGW7.png" alt="Add" width="48px"/></Link>
        </div>
      </nav>
  ) : (
      <nav>
        <Link to="/"><h1>Places to go</h1></Link>
        <div className="nav-images">
        <Link to="/"><h2>Home</h2></Link>
        <Link to="/new"><h2>Add</h2></Link>
        </div>
      </nav>
  )
}

export default Nav