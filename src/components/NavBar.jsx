import { useState } from "react";
import { FaWindowClose } from "react-icons/fa";
import { TiThMenu } from "react-icons/ti";
import { navItems } from "../constants/NavItems";

function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleNav = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleScroll = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  return (
    <div className="max-w-[1920px] mx-auto">
      <div className="hidden md:flex p-4 justify-end w-full px-6 gap-4">
        {navItems.map((item) => (
          <ul
            key={item.id}
            className={`self-center transition duration-300 cursor-pointer ${
              item.id === "wallet"
                ? "text-yellow hover:text-white font-rubik font-bold border-2 border-yellow rounded-customet w-[163px] h-[50px] flex items-center justify-center text-center bg-transparent hover:bg-gradient-to-r from-leftbuynow to-rightbuynow"
                : "text-white hover:text-yellow font-poppins"
            }`}
            onClick={() => handleScroll(item.id)}
          >
            {item.label}
          </ul>
        ))}

        <div
          onClick={handleNav}
          className="block cursor-pointer w-11 h-11 text-customYellow lg:hidden z-50"
        >
          {isMenuOpen ? (
            <FaWindowClose className="w-11 h-11 text-white" />
          ) : (
            <TiThMenu className="w-11 h-11 text-white" />
          )}
        </div>
      </div>
    </div>
  );
}

export default NavBar;
