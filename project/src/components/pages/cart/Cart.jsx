import { FaCartPlus } from "react-icons/fa";
import { Link } from "react-router-dom";

const Cart = () => {
  return (
    <Link to="/cart">
      <li className="nav__item">
        <span>0</span>
        <div className="color">
          <FaCartPlus />
        </div>
      </li>
    </Link>
  );
};

export default Cart;
