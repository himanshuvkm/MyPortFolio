import {
  Accordion,
  AccordionButton,
  AccordionItem,
  AccordionPanel,
} from "@/components/animate-ui/components/headless/accordion";

import { ExternalLink, Github, GitMerge } from "lucide-react";

export default function OpenSourceContribution() {
  return (
    <section className="space-y-4">
      <h1 className="text-2xl font-[Instrument_Serif]">
        Open Source Contributions
      </h1>

      <Accordion>
        <AccordionItem>
          <AccordionButton>
            <div className="flex items-center justify-between">
              <span className="text-lg text-[var(--graytext)]">
                Animate UI
              </span>
            </div>
          </AccordionButton>

          <AccordionPanel>
            <div className="space-y-2 text-sm text-muted-foreground">
              <p className="group flex items-start gap-2">
                <GitMerge
                  size={20}
                  className="
      mt-[2px]
      text-purple-500
      transition-transform duration-300
      group-hover:-rotate-6
    "
                />

                <a
                  href="https://github.com/imskyleen/animate-ui/pull/164"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
      relative
      text-md text-[var(--foreground)]
      font-bold tracking-wide
      transition-all duration-300
      group-hover:underline
      hover:animate-subtle-shake
    "
                >
                  fix: Add missing <code>getStrictContext</code> helper required
                  for ThemeToggler & Particles components
                </a>
              </p>

              <ul className=" pl-6">
                <li>
                  {" "}
                  I have added dropdown suggestions for request headers and
                  fixed form null handling to improve usability and prevent
                  runtime issues.
                </li>
              </ul>
            </div>
            <hr className="mt-2" />
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem>
          <AccordionButton>
            <div className="flex items-center justify-between">
              <span className="text-lg text-[var(--graytext)]">
                mx-icons
              </span>
            </div>
          </AccordionButton>

          <AccordionPanel>
            <div className="space-y-2 text-sm text-muted-foreground">
              <p className="group flex items-start gap-2">
                <GitMerge 
                  size={20}
                  className="
      mt-[2px]
      text-purple-500
      transition-transform duration-300
      group-hover:-rotate-6
    "
                />

                <a  
                  href="https://github.com/ig-imanish/mx-icons/pull/38"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
      relative
      text-md text-[var(--foreground)]
      font-bold tracking-wide
      transition-all duration-300
      group-hover:underline
      hover:animate-subtle-shake
    "
                >
                  Fix: sync dark mode with system preference changes
                </a>
              </p>

              <ul className=" pl-6">
                <li>
                  {" "}
                  Implemented logic to synchronize the application's dark mode seamlessly with system preference changes, ensuring a consistent user experience.
                </li>
              </ul>
            </div>
            <hr className="mt-2" />
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </section>
  );
}
