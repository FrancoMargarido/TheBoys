import The7 from "../../pages/The7/The7";
import Cart from "../../pages/cart/Cart";
import { Link, Outlet } from "react-router-dom";

const Nav = ({}) => {
  return (
    <>
      <header className="header" id="header">
        <nav className="nav container">
          <Link to="/">
            <h4 href="" className="nav__logo">
              Vought Company
            </h4>
          </Link>
          <div className="nav__menu" id="nav-menu">
            <ul className="nav__list">
              <Link to="/">
                <h4 href="" className="nav__link active-link">
                  Home
                </h4>
              </Link>
              <Link to="/The7">
                <h4 className="nav__link">The 7</h4>
              </Link>
              <li className="nav__item">
                <a href="" className="nav__link">
                  Compound V
                </a>
              </li>
              <li className="nav__item">
                <a href="" className="nav__link">
                  Side Effects
                </a>
              </li>
            </ul>
            <i className="ri-close-line nav__close" id="nav-close"></i>
          </div>
          <div className="nav__toggle" id="nav-toggle"></div>
          <>
            <Cart />
          </>
        </nav>
      </header>
    </>
  );
};

export default Nav;
