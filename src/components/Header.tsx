import { RxHamburgerMenu } from "react-icons/rx";
import Logo from "./../statics/logo.svg";
import { Button, MobileNav } from "@material-tailwind/react";
import { useState } from "react";

function Header() {
  const [openNav, setOpenNav] = useState(false);
  return (
    <>
      <header
        id="header"
        className="position-absolute flex justify-between flex-row px-10 py-5"
      >
        <a href="/">
          <img src={Logo} alt="logo" />
        </a>
        <button type="button" className="" onClick={() => setOpenNav(!openNav)}>
          <RxHamburgerMenu size={20} />
        </button>
      </header>
      <MobileNav open={openNav}>
        <div className="flex flex-col">
          <Button variant="text">Navbar 1</Button>
          <Button variant="text">Navbar 2</Button>
          <Button variant="text">Navbar 3</Button>
          <Button variant="text">Navbar 4</Button>
          <Button variant="text">Navbar 5</Button>
        </div>
      </MobileNav>
    </>
  );
}

export default Header;
