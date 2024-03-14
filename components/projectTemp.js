import React from "react";
import Image from "next/image";
import Link from "next/link";

function ProjectTemp({ img, altmessage, title, caption, link }) {
  const card = (
    <div className="flex flex-col items-center shadow-lg transition duration-300 ease-in-out hover:shadow-xl bg-light-purp max-w-md w-96 mx-auto mb-8">
      <div className="w-full h-48 overflow-hidden relative rounded-t-lg">
        <Image
          src={img}
          alt={altmessage}
          layout="fill"
          objectFit="cover"
          className="transition duration-300 ease-in-out transform hover:scale-105"
        />
      </div>
      <div className="p-4 h-32 flex flex-col justify-between">
        <h2 className="text-center text-xl font-semibold">{title}</h2>
        <p className="text-center text-gray-600 text-sm">{caption}</p>
      </div>
    </div>
  );

  return link ? (
    <div className="flex flex-col items-center  mx-auto mb-8">
      <Link href={link} target="blank">
        {card}
      </Link>
    </div>
  ) : (
    card
  );
}

export default ProjectTemp;
