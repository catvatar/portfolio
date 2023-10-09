import "server-only";

import fs from "fs";
import path from "path";
import matter from "gray-matter";

import { micromark } from "micromark";

const rootDirectory = path.join(process.cwd(), "src/posts");

function validatePosts(posts): Post[] {
  if (!posts) {
    throw "Failed to load posts";
  }
  const requiredProperties = ["id", "title", "img", "date", "type"];

  return posts.filter((post) => {
    if (
      requiredProperties.every((property) => {
        const ret = property in post;
        if (!ret) {
          console.log("Missing ", property, " on ", post.id);
        }
        return ret;
      })
    ) {
      return true;
    }
    return false;
  });
}

export function getSortedPostsData(): any {
  const postsDirContents = fs.readdirSync(rootDirectory, { recursive: true });
  const fileNames: any = postsDirContents.filter((dir) => {
    return dir.includes(".md");
  });
  const allPostsData = fileNames.map((dir) => {
    const idSplit = dir.replace(/\.md$/, "").split("\\");

    const id = idSplit[idSplit.length - 1];
    const type = idSplit[0];

    const fullPath = path.join(rootDirectory, dir);
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const matterResult = matter(fileContents);

    return {
      id,
      ...matterResult.data,
      type,
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

export function getAllPostIds() {
  const postsDirContents = fs.readdirSync(rootDirectory, { recursive: true });
  const fileNames: any = postsDirContents.filter((dir) => {
    return dir.includes(".md");
  });

  return fileNames.map((dir) => {
    const idSplit = dir.replace(/\.md$/, "").split("\\");

    const id = idSplit[idSplit.length - 1];
    const type = idSplit.length == 2 ? idSplit[0] : "";
    return { ...id, ...type };
  });
}

export async function getPostData(id, type) {
  const postsDirectory = path.join(rootDirectory, type);
  const fullPath = path.join(postsDirectory, `${id}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");

  // Use gray-matter to parse the post metadata section
  const matterResult = matter(fileContents);

  // Use remark to convert markdown into HTML string
  // const processedContent = await remark()
  //   .use(html)
  //   .process(matterResult.content);
  // const contentHtml = processedContent.toString();

  const contentHtml = micromark(matterResult.content);

  // Combine the data with the id and contentHtml
  return {
    id,
    contentHtml,
    ...matterResult.data,
  };
}
