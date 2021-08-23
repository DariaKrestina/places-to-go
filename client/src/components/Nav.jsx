import { Link } from 'react-router-dom'

function Nav() {

  return (
    <>
      <h1>Places to go</h1>
      <Link to='/'>Home - find a logo for mobile version</Link>
      <Link to='/new'>Add - find a logo for mobile version</Link>
    </>
  )
}

export default Nav