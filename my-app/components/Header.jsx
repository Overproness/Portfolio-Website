import MobileNav from "./MobileNav";
import Nav from "./Nav";
import { Button } from "./ui/button";

const Header = () => {
  return (
    <header className="py-8 xl:py-12 text-white">
      <div className="container flex align-center mx-auto justify-between items-center">
        <a href="#home">
          <h1 className="text-4xl font-semibold">
            Muntazar<span className="text-accent">.</span>
          </h1>
        </a>

        <div className="hidden xl:flex items-center gap-8">
          <Nav />
          <a href="#contact">
            <Button>Hire me</Button>
          </a>
        </div>

        <div className="xl:hidden">
          <MobileNav />
        </div>
      </div>
    </header>
  );
};

export default Header;
