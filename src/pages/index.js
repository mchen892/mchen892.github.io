import Head from "next/head";
import FooterAll from "../../components/footer";
import Link from "next/link";
import Image from "next/image";
import me from "../../public/images/pfp.jpeg";
import cake from "../../public/images/cake.jpg";
import shrimp from "../../public/images/shrimp.jpg";
import tree from "../../public/images/tree.jpg";
import unami from "../../public/images/unami.jpg";
import prettypic from "../../public/images/prettypic.jpg";
import snow from "../../public/images/snowphoto.jpg";
import downArrow from "../../public/images/downArrow.png";
import friends from "../../public/images/friends.jpg";
import skate from "../../public/images/skate.jpg";
import wecode from "../../public/images/wecode.jpg";
import MobileNav from "../../components/sideNavBar";
import HomeImages from "../../components/homeImage";
import React, { useState, useEffect } from "react";
import RotatingText from "@/components/rotate";
import { useMediaQuery } from "react-responsive";
import { Island_Moments } from "next/font/google";
import { BsArrowDown } from "react-icons/bs";
import Resumetext from "@/components/resume_text";

export default function Home() {
  const isLargeScreen = useMediaQuery({ query: "(min-width: 1024px)" });

  return (
    <>
      <Head>
        <title>Maggie's Website</title>
        {/* <link rel="icon" href="../public/images/lemon.png" /> */}
        <meta name="description" content="Maggie Chen's Website" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <main>
        <section className="h-full" style={{ height: "100vh" }}>
          <MobileNav />

          <section className="h-full w-full font-serif text-general">
            <div className="flex flex-col h-full">
              <h1 className="title-name font-bold text-light-purp-text">
                <i>Hello</i>, I am{" "}
                <strong className="text-light-purp-text">Maggie</strong> 🍡
              </h1>
              {!isLargeScreen && (
                <div
                  className="title-sub flex flex-row"
                  style={{ justifyContent: "center" }}
                >
                  <p className="title-pad">I&apos;m </p>
                  <RotatingText />
                </div>
              )}
              {isLargeScreen && (
                <p className="title-long-sub">
                  a software engineer, creator, foodie, fashion enthusiast,
                  artist
                </p>
              )}
            </div>
            <div style={{ marginTop: "30em" }}>
              <div className=" flex flex-col justify-center items-center">
                <p className="text-center">scroll for more</p>
                <BsArrowDown size={45} className="mt-4" />
              </div>
            </div>
          </section>
        </section>

        <section>
          <div className="current">
            <div className="current-text text-wrap ml-3">
              <h1
                className="text-light-purp-text"
                style={{ fontSize: "1.3em", paddingBottom: ".5em" }}
              >
                <strong>Currently... </strong>
              </h1>
              <Resumetext 
                position="Incoming Fullstack Developer Intern"
                company="Verizon"
              />
              <Resumetext
                position="Software Engineer"
                company="Engineering For Sustainability World"
              />
                <li>
                  Creating a fumehood dashboard for Cornell for them to become
                  more Sustainable
                </li>

              <h1
                className="text-light-purp-text text-xl"
                style={{
                  paddingTop: ".5em",
                  fontSize: "1.3em",
                  paddingBottom: ".5em",
                }}
              >
                <strong>Previously I've been...</strong>
              </h1>
              <Resumetext position="Software Engineer" company="Verizon" />
              <li>
                Created a website for Verizon to identify threats and visualize
                networks easier
              </li>
              <Resumetext
                position="Website Application Developer"
                company="Factor Earth"
              />
              <li>
                Refactored the a codebase for their prroduct and automated a
                tagging system
              </li>
              <Resumetext
                position="IBM Accelerate Software Track"
                company="IBM"
              />
              <li>Learned front-end, back-end, react, and more</li>
              <Resumetext
                position="Co-President"
                company="Cornell Rubber Ducky Club"
              />
              <li>Planned social events and managed the team</li>
            </div>
          </div>
        </section>

        {/* <section>
          <div> 
            <h1>About me! </h1>
            <p> </p>
          </div>
        </section> */}
        {/*           
          
            <div className="mx-auto ">
              <h2>About me!</h2>
              <p>
                I&apos;m currently a junior majoring in Information Science with
                a concentration in Interactive Technology and a minor in
                Computer Science at Cornell University. I have a lot of interest
                in a variety of things, and I&apos;m constantly exploring new
                interests. I&apos;m passionate about social impact and
                developmental psychology. I&apos;m also interested in ML/AI
                while also dabbling in Front-end Design. This website will be
                mainly used for my interests and my portfolio.
              </p>
              <p className="coffee lg:pt-20 lg:pb-3 lg:text-sm">
                <Link
                  href="https://calendly.com/mchen892/bobatalks"
                  target="_blank"
                >
                  <span className="hover:underline">
                    Book a coffee chat with me ☕️
                  </span>
                </Link>
              </p>
              <Image src={me}></Image>
            </div>
          </div>
        <div>

        <div
          id="purple"
          className="current mx-auto lg:p-10 lg:pb-20 lg:text-xl"
        >
          <div className="mx-auto ">
            <h2 className="text-center text-xl">
              I like to do almost everything
            </h2> */}
        {/* <HomeImages
                img={prettypic}
                img2={friends}
                img3={shrimp}
                altmessage={"picture of cornell"}
                altmessage2={"picture of tree"}
                altmessage3={"picture of snow"}
              /> */}
        {/* </div> */}
        {/* </div> */}
        {/* <div className="me lg:flex lg:flex-row lg:p-10 lg:pb-20 lg:text-xl">
          <div className="lg:ml-40 lg:w-1/2">
            <p>A Little About Me--</p>
            <ul className="p-5">
              <li>💃Favorite Activity To Do: Go to concerts</li>
              <li>🎵 I like to play to the piano</li>
              <li>🎨 I like to do digital art</li>
              <li>💻 Love Genshin Impact</li>
              <li>🍜Favorite Food is Ramen</li>
            </ul>
          </div>

          
          <iframe
            className=""
            src="https://open.spotify.com/embed/playlist/42e1NHVS6gTz87AC9NexwJ?utm_source=generator"
            width="100%"
            height="352"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
          ></iframe>
        </div> */}
        {/* <p className="text-center text-lg">Other Ways that I exist </p> */}
        <FooterAll />
      </main>
    </>
  );
}
