import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Logo() {
  return (
    <Link href="/">
      <Image
        src="/logo-light.svg"
        width={80}
        height={80}
        priority
        alt="logo-light-mode"
        className="dark:hidden"
      />
      <Image
        src="/logo-dark.svg"
        width={80}
        height={80}
        priority
        alt="logo-dark-mode"
        className="hidden dark:block"
      />
    </Link>
  );
}
