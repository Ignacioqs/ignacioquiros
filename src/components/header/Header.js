import classes from "./header.module.css";
import { NavLink } from "react-router-dom";
import { useState } from "react";

const Header = () => {
  const [hamburger, setHamburger] = useState(false);

  const others = () => {
    setHamburger(false);
  };

  return (
    <header className={classes.header}>
      <NavLink to="/home">
        <h1>Ignacio Quirós Salgado</h1>
      </NavLink>

      <ul className={hamburger ? classes.nav2 : classes.nav}>
        <NavLink
          className={(navData) =>
            navData.isActive ? classes.active : classes.navItem
          }
          to="/home"
          onClick={others}
        >
          pinturas
        </NavLink>
        <NavLink
          className={(navData) =>
            navData.isActive ? classes.active : classes.navItem
          }
          to="/bio"
          onClick={others}
        >
          bio/contacto
        </NavLink>
      </ul>

      <div className={classes.hamStyle} onClick={() => setHamburger(true)}>
        <div className={classes.line} />
        <div className={classes.line} />
        <div className={classes.line} />
      </div>
    </header>
  );
};

export default Header;
