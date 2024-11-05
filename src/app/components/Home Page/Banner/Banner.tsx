import Image from "next/image";
import bannerSideImg from "@/assets/img/banner side img.png";

const Banner = () => {
  return (
    <div className="py-28 bg-[#bd1f17] bg-[url('/banner-bg.svg')] bg-cover">
      <div className="flex justify-center items-center max-w-[1320px] w-[90%] mx-auto relative ">
        {/* --- Banner left Side --- */}
        <div className="text-white flex flex-col justify-center items-start gap-5  w-full h-full">
          <div className="absolute top-10 px-5 py-3   left-0 bg-[rgba(189,31,23,0.43)] ">
            <h2 className="uppercase tracking-tight text-6xl font-[700] leading-tight ">
              Taste the authentic <br />
              Saudi cuisine
            </h2>
          </div>
          <p className="mt-40">
            Among the best Saudi chefs in the world,
            <br />
            serving you something beyond flavor.
          </p>
          <button className="btn-primary">Explore Menu</button>
        </div>

        {/* --- Banner right Side --- */}
        <div className="bg-yellow-400">
          <Image
            src={bannerSideImg}
            alt="banner-side-img"
            className="w-[1050px]"
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
