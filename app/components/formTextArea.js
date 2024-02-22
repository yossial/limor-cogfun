import React from "react";

export default function FormTextArea({ id, text, rows }) {
  return (
    <div className="relative mb-6">
      <textarea
        type="text"
        id={id}
        className="block px-2.5 pb-2.5 pt-4 w-full text-sm cursor-text text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
        placeholder=" "
        rows={rows}
      />
      <label
        htmlFor={id}
        className="absolute cursor-text text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-0 scale-75 left-1 top-0 z-10 origin-0 bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:top-2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4"
      >
        {text}
      </label>
    </div>
  );
}
