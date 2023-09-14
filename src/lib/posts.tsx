import "server-only";

import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";

const rootDirectory = path.join(process.cwd(), "src/posts");

function validatePosts(posts): Post[] {
  if (!posts) {
    throw "Failed to load posts";
  }
  const requiredProperties = [
    "id",
    "title",
    "tags",
    "img",
    "date",
    "subfolder",
  ];

  return posts.filter((post) => {
    if (requiredProperties.every((property) => property in post)) {
      return true;
    }
    console.error("Missing property on post: ", post.id);
    return false;
  });
}

export function getSortedPostsData(subfolder): any {
  const postsDirectory = path.join(rootDirectory, subfolder);
  const fileNames = fs.readdirSync(postsDirectory);
  const allPostsData = fileNames.map((fileName) => {
    const id = fileName.replace(/\.md$/, "");

    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const matterResult = matter(fileContents);

    return {
      id,
      ...matterResult.data,
      subfolder,
    };
  });
  return validatePosts(
    allPostsData.sort((a: any, b: any) => {
      if (a.date < b.date) {
        return 1;
      } else {
        return -1;
      }
    }),
  );
}

export function getAllPostIds(subfolder) {
  const postsDirectory = path.join(rootDirectory, subfolder);
  const fileNames = fs.readdirSync(postsDirectory);
  return fileNames.map((fileName) => {
    return { id: fileName.replace(/\.md$/, "") };
  });
}

export async function getPostData(id, subfolder) {
  const postsDirectory = path.join(rootDirectory, subfolder);
  const fullPath = path.join(postsDirectory, `${id}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");

  // Use gray-matter to parse the post metadata section
  const matterResult = matter(fileContents);

  // Use remark to convert markdown into HTML string
  const processedContent = await remark()
    .use(html)
    .process(matterResult.content);
  const contentHtml = processedContent.toString();

  // Combine the data with the id and contentHtml
  return {
    id,
    contentHtml,
    ...matterResult.data,
  };
}
