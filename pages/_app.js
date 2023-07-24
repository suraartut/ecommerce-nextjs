import "@/styles/globals.css";
import Header from "@/layouts/Header";
import Footer from "@/layouts/Footer";
import { ToastContainer } from "react-toastify";
import { StoreProvider } from "@/context/ProductContext";

export default function App({ Component, pageProps }) {
  return (
    <>
      <StoreProvider>
        <Header />
        <ToastContainer autoClose={1500} />
        <Component {...pageProps} />
        <Footer />
      </StoreProvider>
    </>
  );
}
