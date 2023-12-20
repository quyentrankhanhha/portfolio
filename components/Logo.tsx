import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Logo() {
  const { theme } = useTheme();

  return (
    <Link href="/">
      <Image
        src={theme === "light" ? "/logo-light.png" : "/logo-dark.svg"}
        width={100}
        height={100}
        priority
        alt="logo"
      />
    </Link>
  );
}
