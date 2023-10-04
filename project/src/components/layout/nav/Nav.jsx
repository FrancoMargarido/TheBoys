import Cart from "../../common/cart/Cart";

const Nav = ({ saludo }) => {
  return (
    <header className="header" id="header">
      <nav className="nav container">
        <a href="./index.html" className="nav__logo">
          Vought Company
        </a>
        <div className="nav__menu" id="nav-menu">
          <ul className="nav__list">
            <li className="nav__item">
              <a href="#home" className="nav__link active-link">
                Home
              </a>
            </li>
            <li className="nav__item">
              <a href="#about" className="nav__link">
                The 7
              </a>
            </li>
            <li className="nav__item">
              <a href="#discover" className="nav__link">
                Compound V
              </a>
            </li>
            <li className="nav__item">
              <a href="#place" className="nav__link">
                Side Effects
              </a>
            </li>
          </ul>
          <i className="ri-close-line nav__close" id="nav-close"></i>
        </div>
        <div className="nav__toggle" id="nav-toggle"></div>
        <>
          <Cart />
          <h4>{saludo} </h4>
        </>
      </nav>
    </header>
  );
};

export default Nav;
