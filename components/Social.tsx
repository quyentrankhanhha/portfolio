"use client";

import Link from "next/link";
import React from "react";
import { socialLinks } from "./consts/data";

export default function Social({
  containerStyles,
  iconStyles,
}: {
  containerStyles: string;
  iconStyles: string;
}) {
  return (
    <div className={`${containerStyles}`}>
      {socialLinks.map((icon, index) => {
        return (
          <Link
            href={icon.path}
            key={index}
            className="inline-flex items-center justify-center w-10 h-10 mr-2 bg-secondary rounded-full focus:shadow-outline hover:text-secondary hover:bg-primary transition-all">
            <div className={`${iconStyles}`}>{icon.name}</div>
          </Link>
        );
      })}
    </div>
  );
}
