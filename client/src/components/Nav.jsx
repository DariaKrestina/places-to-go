import { Link } from "react-router-dom"

function Nav() {

  return (
    <>
      <Link to="/"><h1 id="top">Places to go</h1></Link>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/new">Add</Link>
      </nav>
    </>
  )
}

export default Nav