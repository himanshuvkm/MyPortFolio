import {
  Accordion,
  AccordionButton,
  AccordionItem,
  AccordionPanel,
} from "@/components/animate-ui/components/headless/accordion";

import { GitMerge } from "lucide-react";

export default function OpenSourceContribution() {
  return (
    <section className="space-y-3 sm:space-y-4 my-6 sm:my-10">
      <h2 className="text-xl sm:text-2xl font-[Instrument_Serif] tracking-wide">
        Open Source Contributions
      </h2>

      <Accordion>
        <AccordionItem>
          <AccordionButton>
            <div className="flex items-center justify-between">
              <span className="text-base sm:text-lg text-[var(--foreground)] font-medium">
                Animate UI
              </span>
            </div>
          </AccordionButton>

          <AccordionPanel>
            <div className="space-y-2 text-xs sm:text-sm text-muted-foreground pt-1">
              <div className="group flex items-start gap-2">
                <GitMerge
                  size={18}
                  className="
                    mt-0.5
                    shrink-0
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
                    text-xs sm:text-sm text-[var(--foreground)]
                    font-semibold tracking-wide
                    transition-all duration-300
                    group-hover:underline
                    hover:animate-subtle-shake
                    break-words
                  "
                >
                  fix: Add missing <code>getStrictContext</code> helper required
                  for ThemeToggler & Particles components
                </a>
              </div>

              <p className="pl-6 text-xs sm:text-sm text-[var(--graytext)] leading-relaxed">
                I added dropdown suggestions for request headers and fixed form null handling to improve usability and prevent runtime issues.
              </p>
            </div>
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem>
          <AccordionButton>
            <div className="flex items-center justify-between">
              <span className="text-base sm:text-lg text-[var(--foreground)] font-medium">
                mx-icons
              </span>
            </div>
          </AccordionButton>

          <AccordionPanel>
            <div className="space-y-2 text-xs sm:text-sm text-muted-foreground pt-1">
              <div className="group flex items-start gap-2">
                <GitMerge
                  size={18}
                  className="
                    mt-0.5
                    shrink-0
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
                    text-xs sm:text-sm text-[var(--foreground)]
                    font-semibold tracking-wide
                    transition-all duration-300
                    group-hover:underline
                    hover:animate-subtle-shake
                    break-words
                  "
                >
                  Fix: sync dark mode with system preference changes
                </a>
              </div>

              <p className="pl-6 text-xs sm:text-sm text-[var(--graytext)] leading-relaxed">
                Implemented logic to synchronize the application&apos;s dark mode seamlessly with system preference changes, ensuring a consistent user experience.
              </p>
            </div>
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </section>
  );
}
