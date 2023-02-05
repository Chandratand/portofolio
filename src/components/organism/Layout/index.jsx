import Navbar from "../Navbar";

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <main className="mt-[60px] overflow-hidden">{children}</main>
    </>
  );
};

export default Layout;
