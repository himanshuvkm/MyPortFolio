import { Mail, Github, Linkedin } from "lucide-react";
import Link from "next/link";
import { SiX } from "react-icons/si";

export default function Footer() {
  return (
    <div className="my-5 text-center">
      
      <ul className="flex gap-8  justify-center">
        <li>
          <Link href={"mailto:himanshuvkm252@gmail.com"}><Mail size={22} className="" /></Link>
        </li>
        <li>
          <Link href={"https://github.com/himanshuvkm"}><Github size={22} className="" /></Link>
        </li>
        <li>
          <Link href={"https://x.com/Himanshu_10147"}><SiX size={20} className="" /></Link>
        </li>
        <li>
          <Link href={"https://www.linkedin.com/in/himanshu-vishwakarma-2275a5354"}><Linkedin size={22} className="" /></Link>
        </li>
      </ul>
    </div>
  );
}
