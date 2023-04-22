import Head from "next/head";
import {
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiFillGithub,
} from "react-icons/ai";
import { BsFillMoonStarsFill, BsSunFill, BsMedium } from "react-icons/bs";
import { useState } from "react";
import deved from "../public/dev-ed-wave.png";
import Image from "next/image";
import web1 from "../public/web1.png";
import web2 from "../public/web2.png";
import htmlLogo from "../public/htmlLogo.png";
import cssLogo from "../public/cssLogo.png";
import jsLogo from "../public/jsLogo.png";
import reactLogo from "../public/reactLogo.png";
import nodeLogo from "../public/nodeLogo.png";
import tailwindLogo from "../public/tailwindLogo.png";
import bootstrapLogo from "../public/bootstrapLogo.png";
import mongodbLogo from "../public/mongodb.png";
import resume from "../public/resume.pdf";

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode === "dark" ? "dark" : ""}>
      <Head>
        <title>Aman Verma</title>
        <meta
          name="description"
          content="Aman Verma - Full Stack Developer and designer. Follow me on my links and lets create great projects together"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className=" bg-white px-10 transition-colors duration-700 dark:bg-gray-900 md:px-20 lg:px-40 ">
        <section className="min-h-screen">
          <nav className="py-10 flex justify-between dark:text-white">
            <h1 className="font-burtons text-xl">Aman Verma</h1>
            <ul className="flex items-center">
              <li>
                {darkMode === "light" ? (
                  <BsFillMoonStarsFill
                    onClick={() => setDarkMode("dark")}
                    className="cursor-pointer text-2xl"
                    alt="light mode icon"
                  />
                ) : (
                  <BsSunFill
                    onClick={() => setDarkMode("light")}
                    className="cursor-pointer text-2xl"
                    alt="dark mode icon"
                  />
                )}
              </li>
              <li>
                <a
                  className="bg-gradient-to-r from-cyan-500 text- to-teal-500 text-white px-4 py-2 border-none rounded-md ml-8"
                  href={resume}
                  download={AmanResume}
                >
                  Resume
                </a>
              </li>
            </ul>
          </nav>
          <div className="text-center p-10 py-10 pt-2">
            <div className="mx-auto bg-gradient-to-b from-teal-500 rounded-full w-48 h-48 relative overflow-hidden mt-10 md:h-96 md:w-96">
              <Image src={deved} layout="fill" objectFit="cover" alt="" />
            </div>
            <h2 className="text-5xl mt-7 py-1 text-teal-600 font-medium dark:text-teal-400 md:text-6xl">
              Aman Verma
            </h2>
            <h3 className="text-2xl py-2 dark:text-white md:text-3xl">
              Full Stack Developer and Designer.
            </h3>
            <p className="text-md py-5 leading-8 text-gray-800 dark:text-gray-200 max-w-xl mx-auto md:text-xl">
              Student contributing with programming and designing needs. Join me
              down below and let&apos;s get cracking!
            </p>
            <div className="text-4xl lg:gap-16 flex justify-center gap-8 py-5 text-gray-600 dark:text-gray-400">
              <a href="https://github.com/amanverma2908">
                <AiFillGithub className="hover:fill-orange-600" />
              </a>
              <a href="https://www.linkedin.com/in/midnightcoder">
                <AiFillLinkedin className="hover:fill-orange-600" />
              </a>
              <a href="https://twitter.com/midnightcoder">
                <AiFillTwitterCircle className="hover:fill-orange-600" />
              </a>
              <a href="https://medium.com/@midnightcoder">
                <BsMedium className="hover:fill-orange-600" />
              </a>
            </div>
          </div>
        </section>
        <section>
          <div>
            <h3 className="text-3xl font-medium py-1 dark:text-white">
              Tech Stack
            </h3>
          </div>
          <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4">
            <div className="text-center shadow-lg p-5 rounded-xl my-10  dark:bg-white flex-1">
              <Image src={htmlLogo} width={100} height={100} />
              <h3 className="text-lg font-medium pt-8 pb-2  ">HTML</h3>
            </div>
            <div className="text-center shadow-lg p-5 rounded-xl my-10  dark:bg-white flex-1">
              <Image src={cssLogo} width={90} height={100} />
              <h3 className="text-lg font-medium pt-8 pb-2  ">CSS</h3>
            </div>
            <div className="text-center shadow-lg p-5 rounded-xl my-10  dark:bg-white flex-1">
              <Image src={jsLogo} width={100} height={100} />
              <h3 className="text-lg font-medium pt-8 pb-2  ">JavaScript</h3>
            </div>
            <div className="text-center shadow-lg p-5 rounded-xl my-10  dark:bg-white flex-1">
              <Image src={reactLogo} width={100} height={100} />
              <h3 className="text-lg font-medium pt-8 pb-2  ">ReactJs</h3>
            </div>
            <div className="text-center shadow-lg p-5 rounded-xl my-10  dark:bg-white flex-1">
              <Image src={nodeLogo} width={150} height={90} />
              <h3 className="text-lg font-medium pt-8 pb-2  ">NodeJs</h3>
            </div>
            <div className="text-center shadow-lg p-5 rounded-xl my-10  dark:bg-white flex-1">
              <Image src={tailwindLogo} width={100} height={100} />
              <h3 className="text-lg font-medium pt-8 pb-2  ">Tailwind CSS</h3>
            </div>
            <div className="text-center shadow-lg p-5 rounded-xl my-10  dark:bg-white flex-1">
              <Image src={bootstrapLogo} width={100} height={100} />
              <h3 className="text-lg font-medium pt-8 pb-2  ">Bootstrap</h3>
            </div>
            <div className="text-center shadow-lg p-5 rounded-xl my-10  dark:bg-white flex-1">
              <Image src={mongodbLogo} width={100} height={100} />
              <h3 className="text-lg font-medium pt-8 pb-2  ">MongoDB</h3>
            </div>
          </div>
        </section>
        <section className="py-10">
          <div>
            <h3 className="text-3xl py-1 dark:text-white ">Portofolio</h3>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
              Since the beginning of my journey as a designer and developer,
              I&apos;ve done work for
              <span className="text-teal-500"> Open Source </span>
              and collaborated with talanted people to create various projects.
            </p>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
              I offer from a wide range of skills, including Ui/Ux design and
              both Front-End and Back-end Development
            </p>
          </div>
          <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
            <div className="relative basis-1/3 flex-1 rounded-lg shadow-md shadow-slate-500 ">
              <Image
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src={web1}
              />
              <div className="flex flex-wrap justify-center items-center absolute  bottom-0 rounded-lg left-0 right-0 top-0 h-full w-full overflow-hidden bg-gray-900 bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-90">
                <h2 className="w-full text-2xl text-gray-200 font-bold text-center p-2">
                  Simple DrumKit
                </h2>
                <a
                  href="https://drumkit-2908.netlify.app/"
                  className=" mx-2 p-2 bg-teal-700 text-white rounded-md"
                >
                  Demo
                </a>
                <a
                  href="https://github.com/amanverma2908/drumkit"
                  className="mx-2 p-2 bg-teal-700 text-white rounded-md"
                >
                  Github
                </a>
              </div>
            </div>
            <div className="relative basis-1/3 flex-1 shadow-md shadow-slate-500 rounded-lg">
              <Image
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src={web2}
              />
              <div className="flex flex-wrap justify-center items-center absolute rounded-lg bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-gray-900 bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-90">
                <h2 className="w-full text-2xl text-gray-200 font-bold text-center p-2">
                  Tic Tac Toe
                </h2>
                <a
                  href="https://amanverma2908.github.io/tic-tac-toe/"
                  className="mx-2 p-2 bg-teal-700 text-white rounded-md"
                >
                  Demo
                </a>
                <a
                  href="https://github.com/amanverma2908/tic-tac-toe"
                  className="mx-2 p-2 bg-teal-700 text-white rounded-md"
                >
                  Github
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* footer */}

        <section>
          <div className="grid grid-flow-row text-2xl sm:text-md md:grid-cols-2 md:gap-4 rounded-t-lg bg-teal-400 py-8 px-4 text-center dark:bg-teal-500">
            <h4 className="font-burtons">Aman Verma</h4>
            <ul className="flex justify-center gap-6 ">
              <a href="https://github.com/amanverma2908">
                <AiFillGithub />
              </a>
              <a href="https://www.linkedin.com/in/midnightcoder">
                <AiFillLinkedin />
              </a>
              <a href="https://twitter.com/midnightcoder">
                <AiFillTwitterCircle />
              </a>
              <a href="https://medium.com/@midnightcoder">
                <BsMedium />
              </a>
            </ul>
          </div>
        </section>
      </main>
    </div>
  );
}
