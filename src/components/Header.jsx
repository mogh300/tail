import YellowButton from "./YellowButton"

const links = ["Home", "Services", "About", "Portfolio", "Contact"]

const Header = () => {
  return (
    <nav className="bg-primary py-4">
      <div className="gap-x-8 container flex justify-between max-md:hidden items-center">
        <a href="">
          <h1 className="max-md:hidden text-3xl text-cyan-50 font-DM">TinTin</h1>
        </a>

        <ul className="gap-8 hidden lg:flex text-cyan-50 font-DM">
          {links.map(item => (
            <a key={item} href=""><li>{item}</li></a>
          ))}
        </ul>

        <div className="flex gap-8 items-center">
          <button className="h-12 text-background flex gap-4 items-center">
            <img className="h-6" src="src/assets/SolarGlobalOutline (2).svg" />
            language
          </button>

          <YellowButton>
            Download CV
          </YellowButton>
        </div>
      </div>
    </nav>
  );
};

export default Header;
