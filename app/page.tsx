"use client"; // This is a client component
import React from "react";
import web1 from "../public/web (1).jpg";
import web2 from "../public/web (3).png";
import web3 from "../public/web (3).jpg";
import web4 from "../public/web (2).jpg";
import web5 from "../public/web (1).png";
import web6 from "../public/web (2).png";
import design from "../public/design.png";
import design2 from "../public/nature.jpg";
import design3 from "../public/flower.jpg";
import Image from "next/image";
import img from "../public/IG.png";
import {
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiFillYoutube,
} from "react-icons/ai";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { useState } from "react";

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <div className={darkMode ? "dark" : ""}>
      <main className=" bg-white px-10 md:px-20 lg:px-40 dark:bg-gray-800 dark:text-white">
        <section className=" min-h-screen">
          <div>
            <nav className=" py-10 mb-12 flex justify-between">
              <h1 className="text-xl font-burtons dark:text-white ">
                DevelopedByRaza
              </h1>
              <ul className="flex items-center">
                <li>
                  <BsFillMoonStarsFill
                    onClick={() => setDarkMode(!darkMode)}
                    className=" cursor-pointer text-2xl dark:text-white "
                  />
                </li>
                <li>
                  <a
                    href="#"
                    className=" bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8"
                  >
                    Resume
                  </a>
                </li>
              </ul>
            </nav>
          </div>
          <div>
            <div className=" text-center p-10 dark:bg-gray-800">
              <h1 className="text-5xl py-2 text-teal-600 font-medium md:text-6xl dark:text-teal-200 ">
                Ali Raza
              </h1>
              <h3 className="text-2xl py-2 md:text-2xl dark:text-teal-600">
                Developer and Design{" "}
              </h3>
              <p className=" text-md py-5 leading-8 md:text-xl max-w-xl mx-auto text-gray-800 dark:text-white">
                Hi there! Are you looking for a passionate and skilled React
                developer with a strong love for creating dynamic and
                interactive web applications?
              </p>
            </div>
            <div className="text-5xl flex justify-center gap-10 py-3 text-gray-600 dark:text-white">
              <AiFillLinkedin />
              <AiFillTwitterCircle />
              <AiFillYoutube />
            </div>

            <div className="related mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 mt-20 overflow-hidden md:h-96 md:w-96">
              <Image src={img} alt="" />
            </div>
          </div>
        </section>
        <section>
          <div>
            <div>
              <h3 className=" text-4xl text-center py-10 dark:text-teal-200 text-teal-600 font-medium">
                Services I Offer!
              </h3>
              <p className="text-md py-2 leading-8 text-gray-800 dark:text-white">
                As a solo developer, I offer a wide range of digital solutions
                to help you achieve your goals. From web development to{" "}
                <span className=" text-teal-500">
                  {" "}
                  mobile apps, UI/UX design, and digital marketing,{" "}
                </span>{" "}
                I can handle it all. Let me be your one-stop-shop for{" "}
                <span className="text-teal-500">
                  creating stunning websites, engaging mobile applications,
                </span>{" "}
                and captivating user experiences. Whether you need an e-commerce
                platform or ongoing support, I've got the expertise to take your
                project from concept to completion.
              </p>
              <p className="text-md text-gray-800 py-2 leading 8 dark:text-white">
                Let's work together and bring your ideas to life. Contact me
                today, and let's get started on your digital journey!
              </p>
            </div>

            <div className=" lg:flex gap-5 dark:text-white">
              <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:shadow-slate-700">
                <Image
                  className="mx-auto"
                  src={design}
                  alt="design"
                  width={100}
                  height={100}
                />
                <h3 className=" text-lg font-medium pt-8 pb-2 dark:text-teal-200">
                  Beautiful Design
                </h3>
                <p className="py-2">
                  Creating elegant design suited for your need and design
                  theory.
                </p>
                <h4 className="py-4 text-teal-600 dark:text-teal-200">
                  Design tools I use
                </h4>
                <p className="text-gray-800 py-1 dark:text-white">Photoshop</p>
                <p className="text-gray-800 dark:text-white py-1">
                  Illustrator
                </p>
                <p className="text-gray-800 dark:text-white py-1">Figma</p>
              </div>
              <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:shadow-slate-700">
                <Image
                  className="mx-auto rounded-xl"
                  src={design2}
                  alt="design"
                  width={100}
                  height={100}
                />
                <h3 className=" text-lg font-medium pt-8 pb-2 dark:text-teal-200">
                  Beautiful Design
                </h3>
                <p className="py-2">
                  Creating elegant design suited for your need and design
                  theory.
                </p>
                <h4 className="py-4 text-teal-600 dark:text-teal-200">
                  Design tools I use
                </h4>
                <p className="text-gray-800 dark:text-white  py-1">Photoshop</p>
                <p className="text-gray-800 dark:text-white  py-1">
                  Illustrator
                </p>
                <p className="text-gray-800 dark:text-white py-1">Figma</p>
              </div>
              <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:shadow-slate-700">
                <Image
                  className="mx-auto rounded-xl"
                  src={design3}
                  alt="design"
                  width={100}
                  height={100}
                />
                <h3 className=" text-lg font-medium pt-8 pb-2 dark:text-teal-200">
                  Beautiful Design
                </h3>
                <p className="py-2">
                  Creating elegant design suited for your need and design
                  theory.
                </p>
                <h4 className="py-4 text-teal-600 dark:text-teal-200">
                  Design tools I use
                </h4>
                <p className="text-gray-800 dark:text-white py-1">Photoshop</p>
                <p className="text-gray-800 dark:text-white py-1">
                  Illustrator
                </p>
                <p className="text-gray-800 dark:text-white py-1">Figma</p>
              </div>
            </div>
          </div>

          <div>
            <div>
              <h3 className="text-4xl text-center py-10 dark:text-teal-200 text-teal-600 font-medium">
                Portfolio
              </h3>
              <p className="text-md py-2 leading-8 text-gray-800 dark:text-white">
                As a solo developer, I offer a wide range of digital solutions
                to help you achieve your goals. From web development to
                <span className=" text-teal-500">
                  mobile apps, UI/UX design, and digital marketing,
                </span>
                I can handle it all. Let me be your one-stop-shop for
                <span className="text-teal-500">
                  creating stunning websites, engaging mobile applications,
                </span>
                and captivating user experiences. Whether you need an e-commerce
                platform or ongoing support, I've got the expertise to take your
                project from concept to completion.
              </p>
              <p className="text-md text-gray-800 pb-10 leading 8 dark:text-white">
                Let's work together and bring your ideas to life. Contact me
                today, and let's get started on your digital journey!
              </p>
            </div>
            <div className=" flex flex-col gap-10 lg:flex-row lg:flex-wrap m-10">
              <div className=" basis-1/3 flex-1 dark:shadow-slate-700">
                <Image
                  src={web1}
                  className="rounded-lg object-cover"
                  width={"100%"}
                  height={"100%"}
                  layout="responsive"
                />
              </div>
              <div className=" basis-1/3 flex-1">
                <Image
                  src={web3}
                  className="rounded-lg object-cover"
                  width={"100%"}
                  height={"100%"}
                  layout="responsive"
                />
              </div>
              <div className=" basis-1/3 flex-1">
                <Image
                  src={web2}
                  className="rounded-lg object-cover"
                  width={"100%"}
                  height={"100%"}
                  layout="responsive"
                />
              </div>
              <div className=" basis-1/3 flex-1">
                <Image
                  src={web4}
                  className="rounded-lg object-cover"
                  width={"100%"}
                  height={"100%"}
                  layout="responsive"
                />
              </div>
              <div className=" basis-1/3 flex-1">
                <Image
                  src={web5}
                  className="rounded-lg object-cover"
                  width={"100%"}
                  height={"100%"}
                  layout="responsive"
                />
              </div>
              <div className=" basis-1/3 flex-1">
                <Image
                  src={web6}
                  className="rounded-lg object-cover"
                  width={"100%"}
                  height={"100%"}
                  layout="responsive"
                />
              </div>
            </div>
          </div>
        </section>
        <section>
          <div>
            <div className=" bg-teal-400  rounded-xl py-11 dark:bg-gray-700 dark:text-teal-300 ">
              <h1 className="text-4xl text-center py-10  dark:text-teal-200 text-white font-medium">
                Contact Us
              </h1>
              <form className="max-w-md mb-4 mx-auto p-6 bg-white rounded-md shadow-md dark:bg-gray-500 ">
                <div className="mb-4 ">
                  <label
                    htmlFor="name"
                    className="block text-gray-700 font-bold mb-2 dark:text-teal-200"
                  >
                    Name:
                  </label>
                  <input
                    type="text"
                    className="w-full border border-gray-300 p-2 rounded-md focus:ring focus:ring-blue-300 dark:border-teal-300"
                  />
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="email"
                    className="block text-gray-700 font-bold mb-2 dark:text-teal-200"
                  >
                    Email:
                  </label>
                  <input
                    type="email"
                    className="w-full border border-gray-300 p-2 rounded-md focus:ring focus:ring-blue-300 dark:border-teal-300"
                  />
                </div>
                <div className="flex">
                  <button
                    type="submit"
                    className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-7 py-2 rounded-md mx-auto"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
