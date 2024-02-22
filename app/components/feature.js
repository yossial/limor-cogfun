import React from "react";

export default function Feature({ icon, title, text }) {
  return (
    <div className="flex flex-col bg-white rounded-lg shadow p-8 border-b-2 border-pink-600">
      <div className="flex justify-center mx-auto items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
        {icon}
      </div>
      <h3 className="mx-auto mb-2 text-xl font-bold dark:text-white">
        {title}
      </h3>
      <p className="flex justify-center justify-self-center justify-items-center mx-auto text-gray-500 dark:text-gray-400">
        {text}
      </p>
    </div>
  );
}
