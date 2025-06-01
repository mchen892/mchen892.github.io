import React from "react";
import Image from "next/image";
import Link from "next/link";

function ProjectTemp({ img, altmessage, title, link, list = [], caption }) {
  const listItems = [];

  if (Array.isArray(list)) {
    for (let i = 0; i < list.length; i++) {
      listItems.push(
        <li
          key={i}
          className="text-sm text-gray-800 bg-lavendar w-auto h-7 flex items-center justify-center rounded-lg mx-.5 p-1 mr-2 mb-2"
        >
          {list[i]}
        </li>
      );
    }
  }

  const card = (
    <div className="bg-gray-300 rounded-lg flex flex-col items-center transition duration-300 ease-in-out hover:purple-shadow max-w-md w-96 mx-auto mb-8 h-[28rem]">
      <div className="w-full h-48 overflow-hidden relative rounded-t-lg">
        <Image
          src={img}
          alt={altmessage}
          layout="fill"
          objectFit="cover"
          className="p-3 transition duration-300 ease-in-out transform hover:scale-105"
        />
      </div>
      <div className="p-4 h-32 flex flex-col justify-between w-[23rem]">
        <h2 className="text-left text-light-purp-text text-xl font-semibold">
          {title}
        </h2>
        <hr />
        <ul className="flex items-center my-2 py-2 flex-wrap">{listItems}</ul>
        <p className="text-left text-gray-950 text-sm">{caption}</p>
      </div>
    </div>
  );

  return link ? (
    <div className="flex flex-col items-center mx-auto mb-8">
      <Link href={link} target="blank">
        {card}
      </Link>
    </div>
  ) : (
    card
  );
}

export default ProjectTemp;
