import Head from "next/head";
import FooterAll from "../../components/footer";
import Link from "next/link";
import Image from "next/image";
import me from "../../public/images/pfp.jpeg";
import MobileNav from "../../components/sideNavBar";
import HomeImages from "../../components/homeImage";
import React, { useState, useEffect } from "react";
import RotatingText from "@/components/rotate";
import { useMediaQuery } from "react-responsive";
import { Island_Moments } from "next/font/google";
import { BsAlignBottom, BsArrowDown } from "react-icons/bs";
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
                <div>
                  <p className="title-long-sub">
                    a software engineer, creator, foodie, fashion enthusiast,
                    artist
                  </p>
                </div>
              )}
            </div>

            <div class="table">
              <div class="table-cell">
                <div class="content">
                  <p>scroll for more</p>
                  <BsArrowDown
                    size={45}
                    style={{
                      marginRight: "auto",
                      marginLeft: "auto",
                      marginTop: "1em",
                      marginBottom: "1.5em",
                    }}
                  />
                </div>
              </div>
            </div>
          </section>
        </section>

        <section>
          <div className="current">
            <div className="current-text text-wrap">
              <h1
                className="text-light-purp-text curr-text"
                style={{ fontSize: "1.3em", paddingBottom: ".5em" }}
              >
                <strong>Currently... </strong>
              </h1>
              <Resumetext
                position="Robotics TA"
                company="Cornell University"
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
                className="text-light-purp-text text-xl curr-text"
                style={{
                  paddingTop: ".5em",
                  fontSize: "1.3em",
                  paddingBottom: ".5em",
                }}
              >
                <strong>Previously I've been...</strong>
              </h1>
              <Resumetext position="Full Stack Developer" company="Verizon" />
              <li>
                Created a website for Verizon to identify threats and visualize
                networks easier
              </li>
              <Resumetext
                position="Website Application Developer"
                company="Factor Earth"
              />
              <li>
              Refactored a codebase for their product and automated a
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

        <section>
          <div className="about-me-part">
            <div className="about-me-photo">
              <Image src={me} className=""></Image>
            </div>

            <div
              style={{
                paddingTop: "2em",
                marginLeft: "3em",
                marginRight: "3em",
                wordWrap: "break-word",
              }}
            >
              <h1
                className="text-light-purp-text text-xl about-me-section"
                style={{ fontSize: "1.3em" }}
              >
                {" "}
                <strong>About me!</strong>
              </h1>
              <div className="text-m">
                <p className="about-me-text">
                  I became invested in creating and building diy crafts ever
                  since I was little, engaging in various activities to fill the
                  long days at my family's restaurant. In high school, I wanted
                  to find a career path that allowed me to create, so I decided
                  to explore entrepreneurship because I thought it would allow
                  me to make a social impact on the world by creating things
                  that would help others, so I decided to get my associates in
                  Business at my local community college with a program that my
                  high school was in.
                </p>
                <p className="about-me-text">
                  I&apos;m a current Senior at{" "}
                  <Link href="https://infosci.cornell.edu/" target="_blank">
                    <span style={{ textDecoration: "underline" }}>
                      Cornell University
                    </span>
                  </Link>{" "}
                  studying information science with a concentration in
                  Interactive technology with a minor in computer science.
                </p>
                <p className="about-me-text">
                  Last summer, I interned at {" "}
                  <Link
                    href="https://www.verizon.com/fullstack"
                    target="_blank"
                  >
                    <span style={{ textDecoration: "underline" }}>
                      fullstack developer at Verizon
                    </span>{" "}
                  </Link>.
                </p>
                <p className="about-me-text">
                  On campus, I&apos;m a software engineer that is creating a
                  fumehood dashboard for Cornell that will help reduce energy
                  usuage with{" "}
                  <Link href="https://esw.org" target="_blank">
                    <span style={{ textDecoration: "underline" }}>
                      Engineering for Sustainability World (ESW)
                    </span>
                  </Link>
                </p>
                <div style={{ paddingBottom: "3em" }}>
                  <Link
                    href="https://topmate.io/maggiechen"
                    target="_blank"
                    className="about-me-text"
                  >
                    <span className="hover:underline">
                      Book a coffee chat with me ☕️
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <section>
              <div>
                <h2>You can find me...</h2>
                <p></p>
              </div>
            <div>
              <p>eating good food and reviewing them (Yelp Elite Squad)</p>
              <p>going to concerts and listening to my fave artsits</p>
              <p>doing something creative (sticker collection)</p>
            </div>
        </section> */}

        <FooterAll />
      </main>
    </>
  );
}
