import {toolData } from "../../data/toolData.js";
import SkillCard from "./SkillCard.js";

export default function Tools() {
  const allTools = toolData.map((tool) => (
    <SkillCard {...tool} key={tool.caption} />
  ));

  return (
    <div className="text-center">
      <hr className="border-green dark:border-mustard mt-16" />
      <h1 className="font-semibold text-3xl uppercase mt-8">
      <span className="text-green  dark:text-mustard">Tools</span>
      </h1>
      
      <div className="mt-10 grid gap-x-9 gap-y-7 justify-center font-medium grid-cols-6col">
        {allTools}
      </div>
    </div>
  );
}
