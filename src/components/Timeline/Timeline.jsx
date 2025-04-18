import React from "react";

const Timeline = ({ items }) => {
  const buttonVariants = {
    initial: { scale: 1 },
    hover: { scale: 1.05 },
    tap: { scale: 0.95 },
  };

  return (
    <div className="w-full">
      <div className="relative wrap overflow-hidden p-10 h-full">
        {/* Vertical line in the center */}
        <div className="border-2 hidden md:flex absolute border-opacity-20 border-gray-700 h-full left-1/2 transform -translate-x-1/2"></div>

        {items.map((item, index) => {
          const isRight = index % 2 === 0;

          return (
            <div
              key={index}
              className={`
                    mb-8 flex w-full 
                    flex-col items-center 
                    md:flex-row md:justify-between md:items-center
                    ${isRight ? "md:right-timeline" : "md:left-timeline"}
                `}
            >
              {/* Left content */}
              <div
                className={`
                    order-1 w-full mb-4 md:mb-0 md:w-5/12
                    ${
                      !isRight
                        ? "bg-primary-100 rounded-lg shadow-xl px-6 py-4"
                        : ""
                    }
                    flex flex-col items-center md:items-start text-center md:text-left
                    `}
              >
                {!isRight && (
                  <>
                    <img
                      src={item.logo}
                      className="h-24 w-auto mb-4"
                      alt={item.title}
                    />
                    <h3 className="text-lg small-caps tracking-widest font-work">
                      {item.title}
                    </h3>
                    <p className="tracking-widest text-secondary-50">
                      {item.date}
                    </p>
                    {item.link && (
                      <a
                        href={item.link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-2 normal-case gradient-text underline"
                      >
                        {item.link.text}
                      </a>
                    )}
                  </>
                )}
              </div>

              {/* Circle with number */}
              <div className="z-20 items-center order-1 bg-primary-25 shadow-xl w-8 h-8 rounded-full mb-4 md:mb-0 hidden md:flex">
                <h1 className="mx-auto font-semibold text-lg text-white">
                  {index + 1}
                </h1>
              </div>

              {/* Right content */}
              <div
                className={`
                    order-1 w-full md:w-5/12
                    ${
                      isRight
                        ? "bg-primary-100 rounded-lg shadow-xl px-6 py-4"
                        : ""
                    }
                    flex flex-col items-center md:items-start text-center md:text-left
                    `}
              >
                {isRight && (
                  <>
                    <img
                      src={item.logo}
                      className="h-24 w-auto mb-4"
                      alt={item.title}
                    />
                    <h3 className="text-lg small-caps tracking-widest font-work">
                      {item.title}
                    </h3>
                    <p className="tracking-widest text-secondary-50">
                      {item.date}
                    </p>
                    {item.link && (
                      <a
                        href={item.link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-2 normal-case gradient-text underline"
                      >
                        {item.link.text}
                      </a>
                    )}
                  </>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Timeline;
