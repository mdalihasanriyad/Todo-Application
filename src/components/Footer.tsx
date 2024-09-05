"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import {
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaYoutube,
} from "react-icons/fa";

const Footer = () => {
  const footerArray = [
    { icon: <FaGithub />, href: "https://github.com/mdalihasanriyad" },
    { icon: <FaFacebook />, href: "https://github.com/mdalihasanriyad" },
    { icon: <FaYoutube />, href: "https://github.com/mdalihasanriyad" },
    { icon: <FaLinkedin />, href: "https://github.com/mdalihasanriyad" },
    { icon: <FaInstagram />, href: "https://github.com/mdalihasanriyad" },
  ];
  const pathName = usePathname();
  return (
    <footer>
      <p className="text-base text-center text-gray-400">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum inventore
        necessitatibus magnam non! Cumque inventore exercitationem minus quas
        laborum fugiat pariatur commodi, similique magni fuga placeat eaque
        deleniti facilis rem?
      </p>
      <div className="flex items-center gap-8 justify-center mt-4 ">
        {footerArray?.map((item, index) => (
          <Link
            key={index}
            href={item?.href}
            target="blank"
            className="h-10 w-10 rounded-full bg-gray-800 hover:bg-gray-900 cursor-pointer duration-500 hover:text-white border border-transparent hover:border-gray-500 flex items-center justify-center"
          >
            {item?.icon}
          </Link>
        ))}
      </div>
      <Link
        href={pathName === "/" ? "/todo" : "/"}
        className="text-center text-base flex items-center justify-center mt-4 underline underline-offset-2 decoration-[1px] hover:text-white duration-300"
      >
        {pathName === "/" ? "todo page" : "back to home"}
      </Link>
    </footer>
  );
};

export default Footer;
