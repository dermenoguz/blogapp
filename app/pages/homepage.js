import Image from "next/image";
import Header from "../components/header";
import Footer from "../components/footer";
import Blog from "../pages/blog";

export default function Homepage() {
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto flex flex-col">
         <Blog/>
      </div>
    </section>
  );
}
