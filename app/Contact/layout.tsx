import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact & Collaborate",
  description: "Get in touch with Himanshu Vishwakarma for web development opportunities, freelance projects, or technical collaborations.",
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
