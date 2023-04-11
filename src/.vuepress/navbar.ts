import { navbar } from "vuepress-theme-hope";

const ICON_DOCKER = 
  '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><!--! Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M349.9 236.3h-66.1v-59.4h66.1v59.4zm0-204.3h-66.1v60.7h66.1V32zm78.2 144.8H362v59.4h66.1v-59.4zm-156.3-72.1h-66.1v60.1h66.1v-60.1zm78.1 0h-66.1v60.1h66.1v-60.1zm276.8 100c-14.4-9.7-47.6-13.2-73.1-8.4-3.3-24-16.7-44.9-41.1-63.7l-14-9.3-9.3 14c-18.4 27.8-23.4 73.6-3.7 103.8-8.7 4.7-25.8 11.1-48.4 10.7H2.4c-8.7 50.8 5.8 116.8 44 162.1 37.1 43.9 92.7 66.2 165.4 66.2 157.4 0 273.9-72.5 328.4-204.2 21.4.4 67.6.1 91.3-45.2 1.5-2.5 6.6-13.2 8.5-17.1l-13.3-8.9zm-511.1-27.9h-66v59.4h66.1v-59.4zm78.1 0h-66.1v59.4h66.1v-59.4zm78.1 0h-66.1v59.4h66.1v-59.4zm-78.1-72.1h-66.1v60.1h66.1v-60.1z"/></svg>'

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
          { text: "Dokcer镜像的制作", icon: ICON_DOCKER, link: "dockerMake" },
          { text: "Docker常用命令", icon: "shell", link: "dockerCMD" },
          { text: "frp内网穿透", icon: "tool", link: "frp" },
        ],
      },
      { 
        text: "Linux", 
        icon: "linux", 
        prefix: "linux/",
        children: [
          { text: "Linux常用命令", icon: "shell", link: "linuxCMD" },
          { text: "防火墙", icon: "animation", link: "firewalld" },
        ],
      },
      // { text: "火龙果", icon: "edit", link: "dragonfruit" },
    ],
  },
  {
    text: "教程",
    icon: "study",
    prefix: "/tutorial",
    children: [
        {
            text: "前端开发",
            icon: "code",
            link: "/front-end/",
            activeMatch: "^/front-end/$",
        },
        {
            text: "运维工具",
            children: ["/ops/"],
        },
    ]
  },
]);
