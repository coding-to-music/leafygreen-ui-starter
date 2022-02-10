import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-gray-200">
      <div className="container mx-auto px-6 py-3 flex justify-between items-center">
        <div className="text-xl font-bold text-green-500 hover:text-green400 cursor-pointer">
          <Link href="/">MongoStore</Link>
        </div>
        <p className=" text-sm text-gray-600">All Rights Reserved © 2022</p>
      </div>
    </footer>
  );
};

export default Footer;
