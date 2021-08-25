import { Link } from "react-router-dom"

function Nav() {

  return (
    <>
      <Link to="/"><h1 id="top">Places to go</h1></Link>
      <nav>
        <Link to="/"><img src="https://i.imgur.com/yypAWmK.png" alt="Home"/></Link>
        <Link to="/new"><img src="https://i.imgur.com/uKjzGW7.png" alt="Add"/></Link>
      </nav>
    </>
  )
}

export default Nav