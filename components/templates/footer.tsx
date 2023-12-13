import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-slate-100">
      <div className="container py-10 rounded text-sm text-center">
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
