import { Link } from "react-router-dom";
import { useUserContext } from "../../context/UserContextProvider";

const links = ["home", "about", "contact", "profile"];

const Header = () => {
  const { currentUser: isLogin } = useUserContext();
  // if (!isLogin) {
  //   links.splice(links.length - 1, 1, "signup", "signin");
  // }
  return (
    <header>
      <h2>Frenzo</h2>
      {/* <ul>
        {links.map(link => (
          <li key={link}>
            <Link to={`/${link.toLocaleLowerCase() === "home" ? "" : link}`}>
              {link}
            </Link>
          </li>
        ))}
      </ul> */}
      <ul>
        <li>
          <Link to={"/"}>Home</Link>
        </li>
        <li>
          <Link to={"/contact"}>Contact</Link>
        </li>
        <li>
          <Link to={"/about"}>About</Link>
        </li>
        <li>
          {isLogin ? (
            <Link to={"/profile"}>Profile</Link>
          ) : (
            <Link to={"/login"}>Login</Link>
          )}
        </li>
      </ul>
    </header>
  );
};

export default Header;
