import React, { useEffect, useState } from "react";

const NotificationCarousel = () => {
  const texts = [
    {
      type: "text",
      content:
        "Extended version of the top 10% papers from MAC 2025 will be published in a special issue of Defence Science Journal(SCI).",
    },
    {
      type: "image",
      content: "Welcome onboard JV Micronics(Gold Sponsor).",
      imageUrl: "Logo-JV-Micronics.png", // Replace with your image URL
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
          padding: 20px;
          font-weight: bold;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
          position: relative;
          overflow: hidden;
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
          min-height: 70px; /* Minimum height to ensure some space */
          transition: height 1s ease-in-out;
        }

        .carousel-text {
          font-size: 15pt;
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
          max-width: 60px; /* Set a max-width for the image */
          max-height: 60px; /* Set a max-height for the image */
          margin-right: 10px; /* Add some space between the image and text */
        }
        /* Media queries for responsive design */
        @media (max-width: 768px) {
          .carousel-container {
            padding: 30px;
          }

          .carousel-text {
            font-size: 16px;
          }

          .carousel-image {
            max-width: 60px; /* Increase image size slightly for better visibility */
            max-height: 60px;
          }
        }

        @media (max-width: 480px) {
          .carousel-container {
            padding: 50px;
          }

          .carousel-text {
            font-size: 14px;
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
