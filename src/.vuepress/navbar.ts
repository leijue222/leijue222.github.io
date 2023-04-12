import { navbar } from "vuepress-theme-hope";


export const zhNavbar = navbar([
    "/",
    { text: "深度学习", icon: "discover", link: "/deeplearning/" },
    { text: "工程研发", icon: "edit", link: "/develop/" },

    // {
    //   text: "工程研发",
    //   icon: "edit",
    //   prefix: "/develop/",
    //   children: [
    //     { 
    //       text: "Linux常用", 
    //       icon: "linux", 
    //       prefix: "linux/",
    //       link: "linux/",
    //       activeMatch: "^/linux/$",
    //     //   children: [
    //     //     { text: "Linux常用命令", icon: "shell", link: "linuxCMD" },
    //     //     { text: "防火墙", icon: "animation", link: "firewalld" },
    //     //   ],
    //     },
    //     {
    //         text: "常用工具",
    //         icon: "tool",
    //         prefix: "tools/",
    //         link: "tools/",
    //         activeMatch: "^/tools/$",
    //     },
    //     // { text: "火龙果", icon: "edit", link: "dragonfruit" },
    //   ],
    // },
    {
      text: "教程",
      icon: "study",
      prefix: "/tutorial",
      children: [
        {
            text: "人工智能",
            icon: "code",
            link: "/ai/",
            activeMatch: "^/ai/$",
        },
        {
            text: "前端开发",
            icon: "code",
            link: "/front-end/",
            activeMatch: "^/front-end/$",
        },
        {
            text: "后端开发",
            icon: "code",
            link: "/back-end/",
            activeMatch: "^/back-end/$",
        },
        {
            text: "运维工具",
            icon: "tool",
            link: "/ops/",
            activeMatch: "^/ops/$",
        },
      ]
    },
  ]);
