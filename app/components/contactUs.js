import React from "react";

import FormInput from "./formInput";
import FormTextArea from "./formTextArea";

export default function contactUs() {
  return (
    <div className="container my-24 mx-auto md:px-6 bg-slate-50 dark:bg-gray-800">
      <section className="mb-32 text-center">
        <div className="py-12 md:px-12">
          <div className="container mx-auto xl:px-32">
            <div className="grid items-center lg:grid-cols-2">
              <div className="mb-12 md:mt-12 lg:mt-0 lg:mb-0">
                <div className="relative z-[1] block rounded-lg bg-[hsla(0,0%,100%,0.55)] px-6 py-12 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] backdrop-blur-[30px] dark:bg-[hsla(0,0%,5%,0.7)] dark:shadow-black/20 md:px-12 lg:-mr-14">
                  <h2 className="mb-12 text-3xl font-bold">Contact us</h2>
                  <form>
                    <FormInput id="name" text="Name" />
                    <FormInput id="email" text="Email Address" />
                    <FormTextArea id="messge" text="Message" rows={4} />
                    <div className="flex justify-center">
                      <button
                        type="button"
                        class="text-white w-36 bg-blue-600 hover:bg-blue-800 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
                      >
                        Send
                      </button>
                    </div>
                  </form>
                </div>
              </div>
              <div className="md:mb-12 lg:mb-0">
                <div className="relative h-[700px] rounded-lg shadow-lg dark:shadow-black/20">
                  <iframe
                    src="https://maps.google.com/maps?q=beitshemesh&t=&z=13&ie=UTF8&iwloc=&output=embed"
                    className="absolute left-0 top-0 h-full w-full rounded-lg"
                    frameborder="0"
                    allowfullscreen
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
