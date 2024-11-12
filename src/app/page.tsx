import About from "@/components/Home Page/About/About";
import Banner from "../components/Home Page/Banner/Banner";

export default function Home() {
  return (
    <div className="max-w-[1920px] min-h-[200vh] mx-auto dark:bg-black">
      <Banner />
      <About />
    </div>
  );
}
