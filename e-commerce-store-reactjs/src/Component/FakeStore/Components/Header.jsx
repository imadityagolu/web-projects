import { useState } from "react";
import { MdOutlineShoppingCart, MdLogout } from "react-icons/md";
import { AiOutlineHeart } from "react-icons/ai";
import { BsFillPersonFill } from "react-icons/bs";
import { FaChevronDown } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { useCart } from "../contexts/CartContext";
import { useAuth } from "../contexts/AuthContext";
import { getAuth } from "firebase/auth";
import app from "../firebase";

const auth = getAuth(app);

function Header() {
  const navigate = useNavigate();
  const { user } = useAuth();
  const { cart } = useCart();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  function handleLogout() {
    auth.signOut();
    navigate("/login");
  }

  return (
    <>
      <header className="bg-rose-400 h-14 px-12 flex justify-between items-center">
        <h1 className="font-bold text-3xl">
          <Link to="/">E-commerce</Link>
        </h1>
        <ul className="flex items-center justify-evenly md:w-72">
          <li className="mr-5 cursor-pointer">
            <Link to="/about">About</Link>
          </li>
          <li className="mr-5 cursor-pointer">
            <Link to="/contact">Contact</Link>
          </li>
          {user ? (
            <li className="mr-5 cursor-pointer relative">
              <div onClick={toggleDropdown} className="flex items-center">
                <span className="mr-2">Menu</span>
                <FaChevronDown
                  className={`text-xl transition-transform duration-300 ${
                    isDropdownOpen ? "rotate-180" : "rotate-0"
                  }`}
                />
              </div>
              {isDropdownOpen && (
                <ul className="absolute z-50 right-0 mt-2 bg-white shadow-md rounded w-40">
                  <li className="p-2 hover:bg-gray-200">
                    <Link to={user ? "/profile" : "/login"}>
                      {user ? "Profile" : "Login"}
                    </Link>
                  </li>
                  <li className="p-2 hover:bg-gray-200 relative">
                    <Link to="/wishlist" className="flex items-center gap-2">
                      Wishlist{" "}
                      <p className="relative flex items-center">
                        <AiOutlineHeart title="Your Wishlist" className="" />
                        <span className="absolute top-[-10px] right-[-10px] bg-rose-400 font-bold text-black rounded-full w-4 h-4 flex justify-center items-center text-xs">
                          0
                        </span>
                      </p>
                    </Link>
                  </li>
                  <li className="p-2 hover:bg-gray-200 relative">
                    <Link to="/cart" className="flex items-center gap-2">
                      Cart{" "}
                      <p className="relative flex items-center">
                        <MdOutlineShoppingCart title="Your Cart" className="" />
                        <span className="absolute top-[-10px] right-[-10px] bg-rose-400 font-bold text-black rounded-full w-4 h-4 flex justify-center items-center text-xs">
                          {cart.length}
                        </span>
                      </p>
                    </Link>
                  </li>
                  <li className="p-2 hover:bg-gray-200 relative flex items-center gap-2">
                    Logout{" "}
                    <button onClick={handleLogout}>
                      <MdLogout title="Logout" className="" />
                    </button>
                  </li>
                </ul>
              )}
            </li>
          ) : (
            <li className="mr-5 cursor-pointer">
              <Link to="/login">Login</Link>
            </li>
          )}
        </ul>
      </header>
    </>
  );
}

export default Header;
