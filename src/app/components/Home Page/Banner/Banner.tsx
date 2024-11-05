import bannerSideImgMain from "@/assets/img/banner side img.png";
import bannerSideImgFlower from "@/assets/img/flower.png";
import Image from "next/image";
import "./Banner.css";

const Banner = () => {
  return (
<div className="bg-gradient-to-r from-[#BD1F17] to-[#8E1B0F] bg-opacity-100 z-50">
  <div className="pb-[160px] pt-[160px] bg-[url('/banner-bg.png')] bg-opacity-50">
 
        <div className="flex justify-center items-center max-w-[1320px] w-[90%] mx-auto relative ">
          {/* --- Banner left Side --- */}
          <div className="text-white flex flex-col justify-center items-start gap-6  w-full h-full ">
            <div className="absolute top-10 px-5 py-3   left-0 bg-[rgba(189,31,23,0.43)] xl:min-w-[850px] z-20 ">
              <h2 className="uppercase text-8xl  leading-tight Font-bebasNeue   ">
                Taste the authentic <br />
                Saudi cuisine
              </h2>
            </div>
            <p className="mt-80 font-extralight text-gray-100">
              Among the best Saudi chefs in the world,
              <br />
              serving you something beyond flavor.
            </p>
            <button className="btn-primary">Explore Menu</button>
          </div>

          {/* --- Banner right Side --- */}
          <div className="bg-green-400 relative">
            <Image
              src={bannerSideImgMain}
              alt="banner-side-img"
              className="w-[1050px] z-10"
            />
            <Image
              src={bannerSideImgFlower}
              alt="banner-side-img"
              className="absolute -top-[7%] translate-y-[7%] -right-[5%] translate-x-[-5%] "
              width={45}
              height={45}
            />
            <div className="w-[120px] h-[120px] z-50 bg-yellow-400 rounded-full absolute bottom-0 -right-10 p-2  shadow-xl drop-shadow-xl">
              <div className="border-2 border-dashed w-full h-full border-[#BD1F17] rounded-full flex justify-center items-center text-center">
                <h2 className="Font-bebasNeue text-2xl leading-tight ">
                  Today Offer
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
