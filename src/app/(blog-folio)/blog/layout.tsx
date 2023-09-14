import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Aleksander Gogol Blog",
  description: "Blog Aleksander Gogol",
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
