import {Link} from "react-router-dom"
const Navbar = () => {
  return (
    <nav className="navbar--container">
     <div className="navbar--container--logo">
        <div className="navbar--container--logo--img">
          <img src="./img/logo.png" alt="" />
        </div>
        <h2>MY APPS</h2>
     </div>

     <div className="navbar--links">
      <Link
      spy="true"
      smooth="true"
      offset={-70}
      duration={500}
      to="/"
      className="text-md"
      >
        Home
      </Link>
      <Link
      spy="true"
      smooth="true"
      offset={-70}
      duration={500}
      to="budgetapp"
      className="text-md"
      >
        Budget-Tracker
      </Link>
      <Link
      spy="true"
      smooth="true"
      offset={-70}
      duration={500}
      to="tic-tac-toe"
      className="text-md"
      >
        Tic-Tac-Toe
      </Link>
    </div>
    </nav>
  );
}
 
export default Navbar;