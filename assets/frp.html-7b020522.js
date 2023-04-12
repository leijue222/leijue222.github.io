import{_ as s,W as l,X as r,Z as e,$ as n,a0 as d,a2 as a,C as t}from"./framework-e3cc5c16.js";const c={},o=e("h1",{id:"frp内网穿透",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#frp内网穿透","aria-hidden":"true"},"#"),n(" frp内网穿透")],-1),v=e("h2",{id:"内网穿透-frp-教程-分为云服务器端-frps-和本地电脑端-frpc",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#内网穿透-frp-教程-分为云服务器端-frps-和本地电脑端-frpc","aria-hidden":"true"},"#"),n(" 内网穿透（frp）教程，分为云服务器端（frps）和本地电脑端（frpc）")],-1),u=e("strong",null,"7000和7500",-1),p=e("strong",null,"安全组和防火墙",-1),m={href:"https://blog.yiweiding.cn/archives/%E9%98%B2%E7%81%AB%E5%A2%99firewalldiptables%E7%9A%84%E4%BD%BF%E7%94%A8",target:"_blank",rel:"noopener noreferrer"},b=a(`<ul><li><strong>启动frp的服务端和客户端</strong></li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code># 服务端
cd /root/frp_0.36.1_linux_amd64
nohup ./frps -c frps.ini &amp;
# 客户端
systemctl start frpc
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><strong>frps.ini配置文件样例</strong></li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>[common]
bind_port = 7000
token = liublack
dashboard_port = 7500
#vhost_https_port = 5555
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><strong>frpc.ini配置文件样例</strong></li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>[common]
server_addr = 193.112.92.146
server_port = 7000
token = liublack
tls_enable = true

# 服务1
[pengfei-vh]	
type = tcp
local_ip = 127.0.0.1
local_port = 5000
remote_port = 5000

# 服务2
[pengfei-tts]
type = tcp
local_ip = 127.0.0.1
local_port = 8882
remote_port = 8882
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,6);function _(f,h){const i=t("ExternalLinkIcon");return l(),r("div",null,[o,v,e("blockquote",null,[e("p",null,[n("留意"),u,n("端口要开放"),p,n("。配置防火墙可参考"),e("a",m,[n("此处"),d(i)])])]),b])}const x=s(c,[["render",_],["__file","frp.html.vue"]]);export{x as default};
