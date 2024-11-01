import React from "react";

const SponsorCarousel = () => {
  return (
    <>
      <style jsx>{`
        .marquee-container {
          display: flex;
          overflow: hidden;
          width: 100%;
          height: 150px; /* Adjust the height as needed */
          padding-top: 90px; /* Increase padding from the top */
          padding-bottom: 190px; /* Decrease padding from the bottom */
        }

        .marquee-item {
          flex-shrink: 0;
          margin-right: 20px;
          height: 175px; /* Adjust the height of the images */
          width: 200px; /* Preserve aspect ratio */
          animation: marquee 15s linear infinite; /* Adjust the duration of the animation */
        }

        @keyframes marquee {
          0% {
            transform: translateX(100%);
          }
          100% {
            transform: translateX(-100%);
          }
        }
      `}</style>

      <div className="marquee-container">
        <img src="/DRDO-Logo-1.png" className="marquee-item" />
        <img src="/ieeeUP.jpg" className="marquee-item" />
        <img src="/DRDO-Logo-1.png" className="marquee-item" />
        <img src="/IITR-logo.png" className="marquee-item" />
        <img src="/DRDO-Logo-1.png" className="marquee-item" />
        <img src="/NIT_Uttarakhand_Logo.png" className="marquee-item" />
        <img src="/DRDO-Logo-1.png" className="marquee-item" />
        <img src="/THDC_IHET_Logo.png" className="marquee-item" />
        <img src="/DRDO-Logo-1.png" className="marquee-item" />
        <img src="/mnnit_logo.png" className="marquee-item" />
        <img src="/DRDO-Logo-1.png" className="marquee-item" />
        <img src="/ieeeUP.jpg" className="marquee-item" />
        <img src="/DRDO-Logo-1.png" className="marquee-item" />
        <img src="/ieeeUP.jpg" className="marquee-item" />
        <img src="/DRDO-Logo-1.png" className="marquee-item" />
        <img src="/IITR-logo.png" className="marquee-item" />
        <img src="/DRDO-Logo-1.png" className="marquee-item" />
        <img src="/NIT_Uttarakhand_Logo.png" className="marquee-item" />
        <img src="/DRDO-Logo-1.png" className="marquee-item" />
        <img src="/THDC_IHET_Logo.png" className="marquee-item" />
        <img src="/DRDO-Logo-1.png" className="marquee-item" />
        <img src="/mnnit_logo.png" className="marquee-item" />
        <img src="/DRDO-Logo-1.png" className="marquee-item" />
        <img src="/ieeeUP.jpg" className="marquee-item" />
      </div>
    </>
  );
};

export default SponsorCarousel;
