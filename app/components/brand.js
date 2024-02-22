import React from "react";

import Link from "next/link";

export default function Brand() {
  return (
    <Link href="/">
      <span className="flex items-center space-x-2 text-2xl text-secondary-600 font-medium dark:text-gray-100">
        <span className="font-lobster font-medium text-base bg-primary-700 text-white px-2 rounded-lg">
          L
        </span>
        <span className="font-serif font-bold text-base">Limor Alfia</span>
      </span>
    </Link>
  );
}
