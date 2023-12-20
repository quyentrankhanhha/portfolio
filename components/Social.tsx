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
  containerIconStyles,
  iconStyles,
}: {
  containerStyles: string;
  containerIconStyles: string;
  iconStyles: string;
}) {
  return (
    <div className={`${containerStyles}`}>
      {icons.map((icon, index) => {
        return (
          <Link
            href={icon.path}
            key={index}
            className={`${containerIconStyles}`}>
            <div className={`${iconStyles}`}>{icon.name}</div>
          </Link>
        );
      })}
    </div>
  );
}
