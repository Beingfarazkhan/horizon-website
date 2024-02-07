import { useContext, Fragment } from "react";
import { Link, Outlet } from "react-router-dom";
import "./navigation.styles.css";
import { BiMenuAltRight } from "react-icons/bi";
import { MdClose } from "react-icons/md";
import { getMenuStyles, scrollToTop } from "../utils/common";
import useHeaderColor from "../hooks/useHeaderColor";
import OutsideClickHandler from "react-outside-click-handler";
import { MenuContext } from "../contexts/menu.context";

const Navigation = () => {
  const { isMenuOpen, toggleMenu, setIsMenuOpen } = useContext(MenuContext);
  const headerColor = useHeaderColor();

  const menuHandler = () => {
    console.log("Menu icon");
    toggleMenu();
  };

  return (
    <Fragment>
      <section className="h-wrapper" style={{ background: headerColor }}>
        <div className="flexCenter innerWidth paddings h-container">
          {/* logo */}
          <Link to={"/"}>
            <img src="./logo.png" alt="logo" width={50} />
          </Link>

          {/* menu */}
          <OutsideClickHandler
            onOutsideClick={() => {
              setIsMenuOpen(false);
            }}
          >
            <div
              // ref={menuRef}
              className="flexCenter h-menu"
              style={getMenuStyles(isMenuOpen)}
              onClick={() => {
                setIsMenuOpen(false);
              }}
            >
              <Link onClick={scrollToTop} to={"/about-us"}>
                <span className="nav-link">About Us</span>
              </Link>
              <Link onClick={scrollToTop} to={"/events"}>
                <span className="nav-link">Events</span>
              </Link>
              <Link onClick={scrollToTop} to={"/blogs"}>
                <span className="nav-link">Blogs</span>
              </Link>
              <Link onClick={scrollToTop} to={"/horizon-women"}>
                <span className="nav-link">Horizon-W</span>
              </Link>
              <Link onClick={scrollToTop} to={"/faq"}>
                <span className="nav-link">FAQ</span>
              </Link>
              <Link onClick={scrollToTop} to={"/contact"}>
                <button className="button">Contact</button>
              </Link>
            </div>
            <div className="menu-icon">
              {!isMenuOpen ? (
                <BiMenuAltRight size={30} onClick={toggleMenu} />
              ) : (
                <MdClose size={30} onClick={toggleMenu} />
              )}
            </div>
          </OutsideClickHandler>

          {/* for medium and small screens */}
        </div>
      </section>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
