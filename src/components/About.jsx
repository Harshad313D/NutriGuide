import React from "react";

const About = () => {
  return (
    <section className="py-16 mt-20 bg-white">
      <div className="container mx-auto px-6 text-gray-600 md:px-12 xl:px-6">
        <h1 className="text-3xl font-extrabold text-center text-gray-900 mb-6">
          About NutriGuide!
        </h1>
        <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
          <div className="md:w-5/12 lg:w-5/12">
            <img
              src="https://tailus.io/sources/blocks/left-image/preview/images/startup.png"
              alt="About Us"
              loading="lazy"
              className="w-full h-auto"
            />
          </div>
          <div className="md:w-7/12 lg:w-6/12">
            <h2 className="text-2xl text-gray-900 font-bold md:text-4xl">
              Empowering Your Health Journey with Personalized Nutrition and
              Expert Guidance.
            </h2>
            <p className="mt-6 text-gray-600">
              At NutriGuide, we're passionate about helping you achieve your
              health goals through personalized nutrition. Whether you're
              looking to lose weight, manage a health condition, or simply eat
              healthier, NutriGuide provides tailored meal recommendations based
              on your specific needs. Our mission is to empower you with the
              right nutrition information so you can make informed choices and
              live a healthier life. We believe that healthy eating should be
              simple, accessible, and enjoyable for everyone.
            </p>
            <p className="mt-4 text-gray-600">
              NutriGuide offers personalized meal plans, nutritional guidance,
              and health condition support to help you achieve your wellness
              goals. Track your meals and progress with our user-friendly app,
              designed to make healthy eating simple and enjoyable. Let us guide
              you to better health, one meal at a time.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
