import bannerSideImgMain from "@/assets/img/banner side img.png";
import bannerSideImgFlower from "@/assets/img/flower.png";
import Image from "next/image";
import "./Banner.css";


const Banner = () => {
  return (
    <div className="bg-gradient-to-r from-[#BD1F17] to-[#8E1B0F] dark:bg-gradient-to-r dark:from-slate-900 dark:to-black bg-opacity-100 z-50">
      <div className="pb-[160px] pt-[160px] bg-[url('/banner-bg.png')] bg-opacity-50">
        <div className="flex justify-center items-center flex-col gap-y-10 lg:flex-row max-w-[1320px] w-[90%] mx-auto relative ">
          {/* --- Banner left Side --- */}
          <div className="text-white flex flex-col justify-center items-start  gap-6  w-full h-full ">
            <div className="lg:absolute lg:top-10 lg:left-0 lg:px-5 py-3 lg:bg-[rgba(189,31,23,0.43)] xl:min-w-[850px] z-20 ">
              <h2 className="uppercase  text-4xl lg:text-8xl  leading-tight Font-bebasNeue   ">
                Taste the authentic <br />
                Saudi cuisine
              </h2>
            </div>
            <p className="lg:mt-80 font-extralight text-gray-100">
              Among the best Saudi chefs in the world,
              <br />
              serving you something beyond flavor.
            </p>
            <button className="btn-primary">Explore Menu</button>
          </div>

          {/* --- Banner right Side --- */}
          <div className="bg-green-400 relative z-0">
            <Image
              src={bannerSideImgMain}
              alt="banner-side-img"
              className="w-[1050px] lg:z-10 z-50"
            />
            <Image
              src={bannerSideImgFlower}
              alt="banner-side-img"
              className="absolute -z-10 -top-[7%] translate-y-[7%] lg:-right-[5%] right-0 lg:translate-x-[-5%] "
              width={45}
              height={45}
            />
            <div className="w-[120px] h-[120px] z-50 bg-yellow-400 rounded-full absolute lg:bottom-0 bottom-4 right-4 lg:-right-10 p-2  shadow-xl drop-shadow-xl">
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
