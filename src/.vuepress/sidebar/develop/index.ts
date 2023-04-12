import { arraySidebar } from "vuepress-theme-hope";

export const develop = arraySidebar([
    "",
    {
        text: "Linux常用",
        icon: "creative",
        prefix: "linux/",
        link: "linux/",
        children: [
        "linuxCMD",
        "firewalld",
        ],
    },
    {
        text: "常用工具",
        icon: "creative",
        prefix: "tools/",
        link: "tools/",
        children: [
            "frp/",
            "dockerCMD/",
            "dockerMake/",
        ],
    },
//   {
//     text: "基础教程",
//     icon: "study",
//     prefix: "language/",
//     link: "language/",
//     children: ["basic/", "windows/", "github/"],
//   },
//   {
//     text: "前端开发",
//     icon: "code",
//     children: [
//       "website/",
//       "node-js/",
//       "vue/",
//       "Angular/",
//       "react/",
//       "mini-app/",
//     ],
//   },
//   "back-end/",
]);