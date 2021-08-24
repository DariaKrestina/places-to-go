import { Link } from 'react-router-dom'

function Nav() {

  return (
    <>
      <h1>Places to go</h1>
      <Link to='/'>Home</Link>
      <Link to='/new'>Add</Link>
    </>
  )
}

export default Nav