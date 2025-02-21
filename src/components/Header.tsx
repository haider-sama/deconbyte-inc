import NavBar from "./nav/NavBar";
import MobileNav from "./nav/MobileNav";
import "./../index.css";
import InfoNav from "./nav/InfoNav";

const Header = () => {
    return (
        <header className="mx-auto w-full bg-primary fixed top-0 z-50">
            <InfoNav />
            <div className="flex items-center justify-between">
                <NavBar />
                <MobileNav />
            </div>
        </header>
    );
}

export default Header;
