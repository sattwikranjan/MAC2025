import React, { useEffect, useState } from "react";

const NotificationCarousel = () => {
  const texts = [
    {
      type: "text",
      content:
        "Extended version of the top 10% papers from MAC 2024 will be published in a special issue of Defence Science Journal(SCI).",
    },

    {
      type: "image",
      content: "Welcome onboard JV Micronics(Gold Sponsor).",
      imageUrl: "Logo-JV-Micronics.png", // Replace with your image URL
    },
    {
      type: "image",
      content: "Welcome onboard APC Technologies(Gold Sponsor).",
      imageUrl: "apc.png", // Replace with your image URL
    },
    {
      type: "image",
      content: "Welcome onboard Scientific Microwave(Gold Sponsor).",
      imageUrl: "SciMic.png", // Replace with your image URL
    },
    {
      type: "image",
      content: "Welcome onboard Agmatel(Silver Sponsor).",
      imageUrl: "agmatel.png", // Replace with your image URL
    },
    {
      type: "image",
      content:
        "Welcome onboard Icon Electromatic Private Limited(Bronze Sponsor).",
      imageUrl: "electro.png", // Replace with your image URL
    },
    {
      type: "image",
      content: "Welcome onboard  NUMEREGION's TaraNG(Bronze Sponsor).",
      imageUrl: "/6_Bronze.jpeg", // Replace with your image URL
    },
    {
      type: "image",
      content: "Welcome onboard  Mmrfic technology pvt ltd(Bronze Sponsor).",
      imageUrl: "/bronze_logo_1.jpeg", // Replace with your image URL
    },
    {
      type: "image",
      content: "Welcome onboard  Synergy telecom pvt ltd(Bronze Sponsor).",
      imageUrl: "/bronze_logo_2.jpeg", // Replace with your image URL
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % texts.length);
    }, 3000);

    return () => clearInterval(intervalId);
  }, [texts.length]);

  return (
    <>
      <style jsx>{`
        .carousel-container {
          background-color: #ebf8ff;
          color: #1c3d5a;
          padding: 30px;
          font-weight: bold;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
          position: relative;
          overflow: hidden;
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
          min-height: 150px; /* Minimum height to ensure some space */
          transition: height 1s ease-in-out;
        }

        .carousel-text {
          font-size: 26pt;
          color: #ff0f0f;
          position: absolute;
          opacity: 0;
          transition: opacity 1s ease-in-out, height 1s ease-in-out;
          display: flex;
          align-items: center;
        }

        .carousel-text.active {
          opacity: 1;
        }

        .image-text-container {
          display: flex;
          align-items: center;
        }

        .carousel-image {
          max-width: 220px; /* Set a max-width for the image */
          max-height: 220px; /* Set a max-height for the image */
          margin-right: 20px; /* Add some space between the image and text */
        }
        /* Media queries for responsive design */
        @media (max-width: 768px) {
          .carousel-container {
            padding: 30px;
          }

          .carousel-text {
            font-size: 24px;
          }

          .carousel-image {
            max-width: 200px; /* Increase image size slightly for better visibility */
            max-height: 200px;
          }
        }

        @media (max-width: 480px) {
          .carousel-container {
            padding: 50px;
            min-height: 250px;
          }

          .carousel-text {
            font-size: 22px;
            flex-direction: column; /* Stack text and image vertically on small screens */
            text-align: center;
          }

          .image-text-container {
            flex-direction: column;
            align-items: center;
          }

          .carousel-image {
            margin-left: 0; /* Remove margin when stacking vertically */
            margin-top: 10px; /* Add margin on top for spacing */
            max-width: 200px; /* Increase image size slightly for better visibility */
            max-height: 200px;
          }
        }
      `}</style>
      <div className="carousel-container">
        {texts.map((item, index) => (
          <div
            key={index}
            className={`carousel-text ${
              index === currentIndex ? "active" : ""
            }`}
          >
            {item.type === "image" ? (
              <div className="image-text-container">
                <p>{item.content}</p>
                <img
                  src={item.imageUrl}
                  alt="Carousel"
                  className="carousel-image"
                />
              </div>
            ) : (
              <p>{item.content}</p>
            )}
          </div>
        ))}
      </div>
    </>
  );
};

export default NotificationCarousel;
