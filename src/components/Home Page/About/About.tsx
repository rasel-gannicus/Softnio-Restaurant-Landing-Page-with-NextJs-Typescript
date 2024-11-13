"use client";
import Image from "next/image";
import aboutImg from "@/assets/img/about img 1.1 .png";
import marketExperienceImg from "@/assets/img/About section Market Place.png";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { FiPhoneCall } from "react-icons/fi";

const About = () => {
  return (
    <div className="my-20 max-w-[1320px] w-[90%] mx-auto flex justify-between items-start gap-16">
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
      <div className="">
        <Tabs>
          <TabList>
            <Tab>About</Tab>
            <Tab>Experience</Tab>
            <Tab>Contact</Tab>
          </TabList>

          <TabPanel>
            <div className="flex flex-col gap-5 mt-8 ">
              <h2 className="text-4xl font-extralight Font-bebasNeue tracking-wide">
                Exceptional culinary <br />
                experience and delicious food
              </h2>
              <p className="text-gray-600 font-extralight text-sm">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Tenetur, impedit sunt. Nostrum ipsam, eaque eligendi laborum
                quod iusto quae reprehenderit asperiores quis similique
                voluptatibus possimus amet corrupti pariatur, cupiditate fugiat
                rem tempore?
              </p>
              <div className="flex justify-start items-center gap-5">
                <button className="btn-primary ">About More</button>
                <span className="flex items-center gap-2">
                  <FiPhoneCall className="text-[#BD1F17] w-6 h-6" />
                  <p className="font-semibold">+88 01716 707031</p>
                </span>
              </div>
            </div>
          </TabPanel>
          <TabPanel>
            <h2>Any content 2</h2>
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
};

export default About;
