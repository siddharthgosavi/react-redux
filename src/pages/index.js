import Image from "next/image";
import { Poppins } from "next/font/google";
import Header from "@/components/Header";
import AddExpense from "@/components/AddExpense";
import Expenses from "@/components/Expenses";
import Total from "@/components/Total";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export default function Home() {
  return (
    <div className={poppins.className}>
      <div className="p-6 text-white overflow-y-hidden">
        <ToastContainer
          className="absolute top-0 right-0"
          autoClose={2000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick={true}
          rtl={false}
          draggable
          theme="light"
        />
        <Header />
        <AddExpense />
        <Expenses />
        <Total />
      </div>
    </div>
  );
}
