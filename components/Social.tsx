"use client";
import { GithubIcon, LinkedinIcon } from "lucide-react";
import Link from "next/link";
import React from "react";

const icons = [
  { path: "/", name: <LinkedinIcon /> },
  { path: "/", name: <GithubIcon /> },
];

export default function Social({
  containerStyles,
  iconStyles,
}: {
  containerStyles: string;
  iconStyles: string;
}) {
  return (
    <div className={`${containerStyles}`}>
      {icons.map((icon, index) => {
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
