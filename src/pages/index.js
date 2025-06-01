import Head from "next/head";
import FooterAll from "../components/footer";
import Link from "next/link";
import Image from "next/image";
import me from "../../public/images/pfp.jpg";
import MobileNav from "../components/sideNavBar";
import React, { useState, useEffect } from "react";
import RotatingText from "@/src/components/rotate";
import { useMediaQuery } from "react-responsive";
import { BsArrowDown } from "react-icons/bs";

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
          <div className="about-me-part">
            <div className="about-me-photo">
              <Image src={me} height={250} className=""></Image>
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
                  I studied{" "}
                  <Link href="https://infosci.cornell.edu/" target="_blank">
                    <span style={{ textDecoration: "underline" }}>
                      Information Science
                    </span>
                  </Link>{" "}
                  at Cornell University with a concentration in
                  Interactive technology and a minor in computer science.
                </p>
                
                <p className="about-me-text">
                  I'm currently working as a {" "}
                  <Link
                    href="https://www.verizon.com/fullstack"
                    target="_blank"
                  >
                    <span style={{ textDecoration: "underline" }}>
                      fullstack developer at Verizon
                    </span>
                  </Link>.
                </p>
                <div>
                <h2>You can find me...</h2>
                <p></p>
              </div>
            <div>
            <ul style={{ listStyleType: "circle", paddingLeft: "20px" }}>
                    <li>Sewing dresses at home</li>
                    <li>Going to concerts and listening to my favorite artists</li>
                    <li>Doing something creative (sticker collection)</li>
                    <li>Painting</li>
                  </ul>

            </div>
              </div>
            </div>
          </div>
        </section>
        <FooterAll />
      </main>
    </>
  );
}
