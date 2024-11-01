import React from "react";

const sheetURL =
  "https://docs.google.com/spreadsheets/d/e/2PACX-1vTB3Kd2qgv3wrqurlHhUiSFMUbLv-gDWJS6PdlX0-NB3DJNmujHqQQ5p5uP8Z2YMM4Ghmd9Powg9uHy/pubhtml?gid=2137689945&amp;single=true&amp;widget=true&amp;headers=false";

const Schedule = () => {
  return (
    <section
      id="venue"
      className="text-gray-600 body-font relative mx-6 pb-16 "
    >
      <div className=" px-0 sm:px-5 py-2 mt-8 md:mx-4 lg:mx-12 ">
        <div className="mt-8 pb-4 flex flex-col items-center justify-center">
          <h1 className="title-font text-center font-bold text-3xl sm:text-4xl  text-gray-900 border-b-4 border-blue-500 pb-1 md:pb-2">
            Conference schedule
          </h1>
        </div>
        <div className="w-full h-[400px] md:h-[580px] bg-gray-300 rounded-lg overflow-hidden  p-10 flex items-end justify-start relative ">
          <iframe
            width="100%"
            height="100%"
            className="absolute inset-0 contrast-125  grayscale-0 brightness-75"
            frameBorder="0"
            title="map"
            marginHeight="0"
            marginWidth="0"
            scrolling="no"
            src={sheetURL}
          ></iframe>
        </div>
      </div>
      <div class="flex justify-center">
        <a
          href="/session.pdf"
          download={true}
          class="block w-[20%] text-white bg-orange-400 hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 font-medium rounded-full text-[10px] sm:text-sm px-4 py-2 text-center mb-1 sm:mb-10 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
        >
          Download Conference Schedule
        </a>
      </div>
      <div class="flex justify-center">
        <a
          href="/paper.pdf"
          download={true}
          class="block w-[20%] text-white bg-orange-400 hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 font-medium rounded-full text-[10px] sm:text-sm px-4 py-2 text-center mb-1 sm:mb-10 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
        >
          Download Paper Presentation Schedule
        </a>
      </div>
    </section>
  );
};

export default Schedule;
