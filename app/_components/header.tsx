import Link from "next/link";

export default function Header() {
  return (
    <div className="my-5">
      <ul className="flex gap-4 font-medium">
        <li>
          <Link className="" href="/">Home</Link>
        </li>
        <li>
          <Link className="" href="/Projects">Projects</Link>
        </li>
        <li>
          <Link className="" href="/Resume">Resume</Link>
        </li>
        <li>
          <Link className="" href="/Contact">Contact</Link>
        </li>
        {/* <li>
          <Link className="" href="/about">About</Link>
        </li> */}
      </ul>
    </div>
  );
}
