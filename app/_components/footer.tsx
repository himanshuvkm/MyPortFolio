import { Mail, Github, Linkedin } from "lucide-react";
import { SiX } from "react-icons/si";

export default function Footer() {
  return (
    <div className="my-5 text-center">
      
      <ul className="flex gap-8  justify-center">
        <li>
          <Mail size={22} className="" />
        </li>
        <li>
          <Github size={22} className="" />
        </li>
        <li>
          <SiX size={20} className="" />
        </li>
        <li>
          <Linkedin size={22} className="" />
        </li>
      </ul>
    </div>
  );
}
