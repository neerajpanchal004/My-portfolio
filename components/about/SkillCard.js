import Image from "next/image.js";

export default function SkillCard({ image, caption }) {
  return (
    <div className="flex flex-col justify-center items-center text-sm gap-1 dark:hover:border-2 dark:hover:bg-slate-800 dark:border-gray-800 px-3 py-1">
      <Image
        src={image}
        alt={`${caption} icon`}
        height={64}
        width={64}
        priority
        objectFit="contain"
      />

      <p>{caption}</p>
    </div>
  );
}
