import { Link } from "react-router-dom"
import "./Nav.css"

function Nav() {

  return (
    <>
      <nav>
        <Link to="/"><h1 id="top">Places to go</h1></Link>
        <Link to="/"><img src="https://i.imgur.com/yypAWmK.png" alt="Home"/></Link>
        <Link to="/new"><img src="https://i.imgur.com/uKjzGW7.png" alt="Add"/></Link>
      </nav>
    </>
  )
}

export default Nav