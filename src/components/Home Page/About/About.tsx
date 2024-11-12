import Image from "next/image";
import aboutImg from "@/assets/img/about img 1.1 .png";
import marketExperienceImg from "@/assets/img/About section Market Place.png";

const About = () => {
  return (
    <div className="my-20 max-w-[1320px] w-[90%] mx-auto ">
      {/* --- About Left Side --- */}
      <div className="">
        <div className="w-[617px] h-[460px] relative ">
          <Image
            src={aboutImg}
            alt="about-img"
            className="w-[100%] h-[100%] "
          />
          <Image
            src={marketExperienceImg}
            alt="market-experience-img"
            className="absolute top-5 left-0 w-[241px]  "
          />
        </div>
      </div>

      {/* --- About Right Side --- */}
      <div className=""></div>
    </div>
  );
};

export default About;
