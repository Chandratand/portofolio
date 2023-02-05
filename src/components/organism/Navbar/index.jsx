import Hamburger from "hamburger-react";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useRef } from "react";
import Button from "../../atoms/Button";
import Logo from "../../atoms/logo";

function Navbar() {
  const navRef = useRef();
  const headerRef = useRef();

  const onScroll = () => {
    if (window.pageYOffset > 0) {
      headerRef.current.classList.add("navbar-fixed");
    } else {
      headerRef.current.classList.remove("navbar-fixed");
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const onHumburgerChange = () => {
    navRef.current.classList.toggle("translate-x-full");
  };

  return (
    // jika positionnya absolte maka sidebar akan kelihatan disebelah kanan melewati layar ketika sidebar ditutup
    // tapi kalau posisition nya fixed sidebarnya ga kelihatan ketika closed
    <header ref={headerRef} className="navbar">
      <div className="w-full px-4 lg:container">
        <div className="relative flex items-center justify-between md:justify-start">
          <div className="py-[14px] transition-all">
            <Logo />
          </div>
          <div className="flex items-center md:w-full">
            <div className="absolute -right-2 block md:hidden">
              <Hamburger onToggle={onHumburgerChange} color="#252525" />
            </div>
            <nav
              ref={navRef}
              className="absolute right-0 top-full -mx-4 h-screen w-[250px] translate-x-full bg-white px-4 shadow-md transition md:static md:mx-0 md:flex md:h-full md:w-full md:translate-x-0 md:bg-transparent md:px-0 md:shadow-none"
            >
              <div className="block md:flex md:w-full md:items-center md:justify-between">
                <ul className="block gap-4 md:ml-8 md:flex md:items-center">
                  <NavbarLink href="/#" title="About me" />
                  <NavbarLink href="/#" title="Portofolio" />
                  <NavbarLink href="/#" title="Experience" />
                </ul>
                <ul className="block md:flex md:items-center">
                  <li>
                    <Button className="my-2 w-full py-2">Hire me</Button>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Navbar;

function NavbarLink({ href, title, className }) {
  const router = useRouter();
  const activeLink = (url) =>
    router.pathname === url ? "text-primary font-bold" : "text-darkest";
  const styleClass = `${className || ""} ${activeLink(
    href
  )} font-medium block py-2 group-hover:text-primary group-hover:font-bold`;

  return (
    <li className="group">
      <Link href={href} className={styleClass}>
        {title}
      </Link>
    </li>
  );
}
