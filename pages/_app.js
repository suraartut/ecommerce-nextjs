import "@/styles/globals.css";
import Header from "@/layouts/Header";
import Footer from "@/layouts/Footer";
import { ToastContainer } from "react-toastify";
import { StoreProvider } from "@/context/ProductContext";
import "react-toastify/dist/ReactToastify.css";

export default function App({ Component, pageProps }) {
  return (
    <>
      <StoreProvider>
        <Header />
        <ToastContainer
          position="top-center"
          autoClose={1500}
          toastClassName={() =>
            "text-[#141414] relative flex pt-2 pb-3 min-h-10 rounded-lg justify-center overflow-hidden cursor-pointer bg-[#FFD2B1] text-center items-center text-md"
          }
        />
        <Component {...pageProps} />
        <Footer />
      </StoreProvider>
    </>
  );
}
