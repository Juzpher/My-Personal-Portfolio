import React from "react";
import toolsData from "../../../assets/mock/about/_tools";
import Capsule from "../../../components/Capsule/Capsule";

const Tools = () => {
  return (
    <div className="flex flex-col gap-8 w-full">
      <div className="flex flex-col gap-4">
        <h1 className="text-2xl small-caps font-semibold gradient-text tracking-wider">
          Technologies I use
        </h1>
        <p className="tracking-wider">
          As a web developer, I create responsive and engaging websites using a
          variety of technologies. Below, you'll find the tools and frameworks
          that power my work
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {toolsData.map((tool) => (
          <Capsule
            key={tool.id}
            name={tool.name}
            description={tool.description}
            icon={tool.icon}
          />
        ))}
      </div>
    </div>
  );
};

export default Tools;
