import { navbar } from "vuepress-theme-hope";

export const zhNavbar = navbar([
  "/",
  { text: "深度学习", icon: "discover", link: "/deeplearning/" },
  {
    text: "工程研发",
    icon: "edit",
    prefix: "/develop/",
    children: [
      {
        text: "常用工具",
        icon: "tool",
        prefix: "tools/",
        children: [
          { text: "Dokcer镜像的制作", icon: "docker", link: "dockerMake" },
          { text: "Docker常用命令", icon: "template", link: "dockerCMD" },
        ],
      },
      { 
        text: "Linux", 
        icon: "linux", 
        link: "linux",
        children: [
          { text: "Linux常用命令", icon: "template", link: "linuxCMD" },
          { text: "防火墙", icon: "docker", link: "firewalld" },
        ],
      },
      // { text: "火龙果", icon: "edit", link: "dragonfruit" },
    ],
  },
  {
    text: "V2 文档",
    icon: "note",
    link: "https://theme-hope.vuejs.press/zh/",
  },
]);
