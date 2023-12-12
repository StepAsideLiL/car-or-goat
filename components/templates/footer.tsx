import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="py-10">
      <div className="container bg-slate-100 py-10 rounded text-sm text-center">
        Built by{" "}
        <Link
          href={"https://github.com/StepAsideLiL/"}
          target="_blank"
          className="font-medium hover:underline"
        >
          Rifat Khan
        </Link>
      </div>
    </footer>
  );
};
export default Footer;
