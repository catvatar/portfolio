import "../styles/global.css";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Aleksander Gogol Project",
  description: "Projects Aleksander Gogol",
  generator: "Next.js",
  keywords: ["Next.js", "React", "JavaScript", "Portfolio"],
  authors: [{ name: "Aleksander Gogol" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-primary">{children}</body>
    </html>
  );
}
