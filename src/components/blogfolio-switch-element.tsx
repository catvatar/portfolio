"use client";

import { useSelectedLayoutSegments } from "next/navigation";
import Link from "next/link";

function generateURL(selectedLayoutSegments, posts) {
  const isBlog = selectedLayoutSegments.includes("blog");
  const isPost = selectedLayoutSegments.includes("posts");

  const id = selectedLayoutSegments[selectedLayoutSegments.length - 1];

  if (isPost) {
    const url = selectedLayoutSegments.reduce((URL, item) => {
      return URL + `${item}/`;
    }, "/");

    const blogRouts = posts.filter((item) => item.type == "blog");
    const portfolioRouts = posts.filter((item) => item.type == "portfolio");

    const urltoBlog = url.replace("portfolio", "blog");
    const urltoPortfolio = url.replace("blog", "portfolio");
    if (
      !(isBlog
        ? portfolioRouts.some((item) => item.id == id)
        : blogRouts.some((item) => item.id == id))
    ) {
      return "/";
    }
    return isBlog ? urltoPortfolio : urltoBlog;
  }
  return isBlog ? "/" : "/blog";
}

export default function BlogfolioSwitchElement({ posts }) {
  const selectedLayoutSegments = useSelectedLayoutSegments();
  const isBlog = selectedLayoutSegments.includes("blog");
  return (
    <div>
      <Link href={generateURL(selectedLayoutSegments, posts)} prefetch={true}>
        {isBlog ? "Portfolio" : "Blog"}
      </Link>
    </div>
  );
}
