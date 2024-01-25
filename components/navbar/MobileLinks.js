import Link from "next/link.js";

export default function MobileLinks({ close }) {
  return (
    <>
      <Link href="/">
        <a
          className="block w-0 px-3 py-2 font-medium hover:text-green dark:hover:text-mustard"
          onClick={close}
        >
          Home
        </a>
      </Link>

      <Link href="/about">
        <a
          className="block w-0 px-3 py-2 font-medium hover:text-green dark:hover:text-mustard"
          onClick={close}
        >
          About
        </a>
      </Link>

      <Link href="/projects">
        <a
          className="block w-0 px-3 py-2 font-medium hover:text-green dark:hover:text-mustard"
          onClick={close}
        >
          Projects
        </a>
      </Link>

      <a
        href="https://drive.google.com/file/d/1oUm15zVm8hcbOjZV2FC5GKmon3EChpKJ/view?usp=sharing"
        rel="noreferrer"
        target={"_blank"}
        className="block w-0 px-3 py-2 font-medium hover:text-green dark:hover:text-mustard"
        onClick={close}
      >
        Resume
      </a>
    </>
  );
}
