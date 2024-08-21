import Header from "../components/Header";
import Footer from "../components/Footer";

interface Props {
  children: React.ReactNode;
}

const Layout = ({ children}: Props) => {
  return (
        <div className="min-h-screen flex flex-col bg-primary">
            <Header />
            <main className="flex-grow w-full">{children}</main>
            <Footer />
        </div>
  );
};

export default Layout;