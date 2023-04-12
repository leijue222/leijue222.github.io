import { sidebar } from "vuepress-theme-hope";

import { deeplearning } from "./deeplearning/index.js";
import { develop } from "./develop/index.js";

export const zhSidebar = sidebar({
  "/deeplearning/": deeplearning,

  "/develop/": develop,

  "/tutorial/": "structure",

//   "/software/git/": "structure",
//   "/code/github/": "structure",

  "intro": "structure",

  // fallback
//   "/": ["", "note/", "code/", "software/", "about/"],
});


