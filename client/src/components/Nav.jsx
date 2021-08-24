import { Link } from 'react-router-dom'

function Nav() {

  return (
    <>
      <Link to='/'><h1>Places to go</h1></Link>
      <Link to='/'>Home</Link>
      <Link to='/new'>Add</Link>
    </>
  )
}

export default Nav