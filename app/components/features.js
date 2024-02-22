import React from "react";

import Feature from "../components/feature";
import {
  BsChatSquare,
  BsBalloonHeart,
  BsMortarboard,
  BsGlobeAmericas,
  BsCurrencyExchange,
  BsCompass,
  BsCreditCard2Back,
} from "react-icons/bs";

export default function Features() {
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6 bg-[url('/img/dot-grid.webp')] dark:bg-gray-700">
        <div className="flex flex-col justify-center max-w-screen-md mb-8 lg:mb-16">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
            Why choosing me?
          </h2>
          <p className=" text-gray-500 sm:text-xl dark:text-gray-400">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse nobis
            illum id cupiditate aspernatur nostrum, facere eveniet veritatis
            totam neque! Nulla aspernatur optio ipsam perspiciatis
          </p>
        </div>
        <div className="space-y-8 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-12 md:space-y-0">
          <Feature
            icon={<BsChatSquare color="deeppink" fill="deeppink" size={20} />}
            title="Marketing"
            text="Plan it, create it, launch it. Collaborate seamlessly with all the
              organization and hit your marketing goals every month with our
              marketing plan."
          />
          <Feature
            icon={<BsMortarboard color="deeppink" fill="deeppink" size={20} />}
            title="Legal"
            text="Protect your organization, devices and stay compliant with our
              structured workflows and custom permissions made for you."
          />
          <Feature
            icon={
              <BsGlobeAmericas color="deeppink" fill="deeppink" size={20} />
            }
            title="Enterprise Design"
            text="Craft beautiful, delightful experiences for both marketing and
              product with real cross-company collaboration."
          />
        </div>
      </div>
    </section>
  );
}
