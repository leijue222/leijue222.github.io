import{_ as e,W as a,X as d,a2 as i}from"./framework-6199cc12.js";const t={},n=i(`<blockquote><p>不断更新中...</p></blockquote><h2 id="复制-可看进度" tabindex="-1"><a class="header-anchor" href="#复制-可看进度" aria-hidden="true">#</a> 复制（可看进度）</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>rsync -av --progress /root/vox2_dev_wav.zip /dockerdata/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="查看端口-netstat" tabindex="-1"><a class="header-anchor" href="#查看端口-netstat" aria-hidden="true">#</a> 查看端口（netstat）</h2><p>查看80端口</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>netstat -anop | grep 80
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="nohup" tabindex="-1"><a class="header-anchor" href="#nohup" aria-hidden="true">#</a> nohup</h2><p>用于在系统后台不挂断地运行命令，退出终端不会影响程序的运行。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>nohup python server.py &gt;&gt; server-$(date &quot;+%Y-%m-%d-%H:%M:%S&quot;).txt &amp; 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="查看文件大小" tabindex="-1"><a class="header-anchor" href="#查看文件大小" aria-hidden="true">#</a> 查看文件大小</h2><ol><li>查看当前目录下所有文件大小</li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>du -h *
或者
ls -lh *
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="查看当前目录下文件-夹-的个数" tabindex="-1"><a class="header-anchor" href="#查看当前目录下文件-夹-的个数" aria-hidden="true">#</a> 查看当前目录下文件（夹）的个数</h2><ul><li>统计当前路径下的文件</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>ls -l | grep &quot;^-&quot; | wc -l
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>统计包括子目录下的文件</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>ls -lR| grep &quot;^-&quot; | wc -l
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>统计文件夹</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>ls | wc -l
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="curl-模拟请求" tabindex="-1"><a class="header-anchor" href="#curl-模拟请求" aria-hidden="true">#</a> curl 模拟请求</h2><p>GET请求本地</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>curl localhost:80
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,22),l=[n];function s(r,c){return a(),d("div",null,l)}const o=e(t,[["render",s],["__file","linuxCMD.html.vue"]]);export{o as default};
