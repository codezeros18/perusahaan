import HeaderBar from "./navbarfirst";
import NavBar from "./navbarsecond";

interface NavbarWrapperProps {
  isSidebarOpen: boolean;
  setIsSidebarOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const NavbarWrapper = (_props: NavbarWrapperProps) => {
  return (
    <div className="fixed top-0 left-0 w-full -mt-1 z-50 bg-white lg:bg-black/90 text-white shadow-md">
      <HeaderBar />
      <NavBar />
    </div>
  );
};

export default NavbarWrapper;
