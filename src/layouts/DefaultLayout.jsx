import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import GlobalContext from "../contexts/globalContext";
import { useContext } from "react";
import Loader from "../components/Loader";
export default function DefaultLayout() {
  const { isLoading } = useContext(GlobalContext);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}
