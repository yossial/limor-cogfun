import Image from "next/image";
import Container from "./container";
import heroImg from "../../public/img/hero.png";

const Hero = () => (
  <>
    <Container className="flex flex-wrap ">
      <div className="flex items-start w-full lg:w-1/2">
        <div className="max-w-2xl mb-8">
          <h1 className="font-bold leading-snug tracking-tight text-gray-500 lg:mb-4 lg:leading-tight xl:text-2xl xl:leading-tight dark:text-white">
            Facing challenges with ADHD?
          </h1>
          <h1 className="text-4xl font-bold leading-snug tracking-tight text-gray-800 lg:mt-4 lg:mn-8 lg:text-4xl lg:leading-tight xl:text-6xl xl:leading-tight dark:text-white">
            Explore the successful{" "}
            <span className="text-transparent bg-gradient-to-r from-orange-400 via-pink-500 to-teal-600 font-bold leading-none tracking-tight bg-clip-text">
              Cog-Fun
            </span>{" "}
            approach
          </h1>
          <p className="py-5 text-xl leading-normal text-gray-500 lg:text-xl xl:text-2xl dark:text-gray-300 lg:mb-6">
            As a certified occupational therapist, I&apos;m here to help you
            conquer ADHD challenges with the successful and innovative{" "}
            <b>CogFun</b> method. Let&apos;s thrive together!
          </p>

          <div className="flex flex-col items-start space-y-3 sm:space-x-4 sm:space-y-0 sm:items-center sm:flex-row">
            <a
              href="/signup"
              rel="noopener"
              className="px-8 py-4 text-lg font-medium text-center text-white bg-primary-600 rounded-md "
            >
              Get Started
            </a>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center w-full lg:w-1/2">
        <div>
          <Image
            src={heroImg}
            className={"object-cover"}
            alt="cogfun"
            loading="eager"
            placeholder="blur"
          />
        </div>
      </div>
    </Container>
  </>
);

export default Hero;
