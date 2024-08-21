import ParticlesComponent from "./Particles";
import NavBar from "./nav/NavBar";
import MobileNav from "./nav/MobileNav";
import "./../index.css";

const Header = () => {
    return (
        <header className="mx-auto w-full">
            <ParticlesComponent />
            <div className="flex items-center justify-between">
                <NavBar />
                <MobileNav />
            </div>
        </header>
    );
}

export default Header;
