import{_ as e,W as i,X as n,a1 as s}from"./framework-b5ea9e64.js";const l={},d=s(`<h1 id="docker常用操作命令" tabindex="-1"><a class="header-anchor" href="#docker常用操作命令" aria-hidden="true">#</a> Docker常用操作命令</h1><p><strong>1. 拉取镜像</strong>（如拉取 Halo 镜像）</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>docker pull halohub/halo:1.5.3
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>2. 创建一个新的容器并运行。</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>docker run -it -d --name halo -p 8092:8092 -v ~/.halo:/root/.halo --restart=unless-stopped halohub/halo:1.5.3
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>-<strong>it</strong>： 开启输入功能并连接伪终端</li><li><strong>-d</strong>： 后台运行容器</li><li><strong>--name</strong>： 为容器指定一个名称</li><li><strong>-p</strong>： 端口映射，格式为 主机(宿主)端口:容器端口 ，可在 application.yaml 配置。</li><li><strong>-v</strong>： 工作目录映射。形式为：-v 宿主机路径:/root/.halo，后者不能修改。</li><li><strong>--restart</strong>： 建议设置为 unless-stopped，在 Docker 启动的时候自动启动 Halo 容器。</li></ul><p><strong>3. ps</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code># 列出所有在运行的容器信息。  
docker ps  

# 列出所有创建的容器ID。  
docker ps -a
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><strong>-a</strong> : 显示所有的容器，包括未运行的。</li><li>**-f ** : 根据条件过滤显示的内容。</li><li><strong>–format</strong> : 指定返回值的模板文件。</li><li><strong>-l</strong> : 显示最近创建的容器。</li><li><strong>-n</strong> : 列出最近创建的n个容器。</li><li><strong>–no-trunc</strong> : 不截断输出。</li><li><strong>-q</strong> : 静默模式，只显示容器编号。</li><li><strong>-s</strong> : 显示总的文件大小。</li></ul><p><strong>4. start / stop / restart</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code># 启动已被停止的容器mynginx  
docker start mynginx  
 
# 停止运行中的容器mynginx  
docker stop mynginx  
 
# 重启容器mynginx  
docker restart mynginx
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>5. kill / rm</strong></p><ul><li><strong>杀死进程（kill）</strong></li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code># 根据容器名字杀掉容器  
docker kill tomcat7  
 
# 根据容器ID杀掉容器  
docker kill 65d4a94f7a39
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><strong>删除容器（rm）</strong></li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code># 强制删除容器 db01、db02：  
docker rm -f db01 db02  
 
# 删除容器 nginx01, 并删除容器挂载的数据卷：  
docker rm -v nginx01  
 
# 暂停所有容器：  
docker stop $(docker ps -a -q)

# 删除所有已经停止的容器：  
docker rm $(docker ps -a -q)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><strong>删除镜像（rmi）</strong></li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>docker rmi $(docker images -q)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>6. Docker系统和版本信息</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code># 查看docker系统信息
docker info
# 显示 Docker 版本信息
docker version
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>6. Dockerfile制作镜像</strong></p><ul><li><strong>Dockerfile demo</strong></li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code># We need this to use GPUs inside the container
FROM nvidia/cuda:11.2.2-base
# Using a multi-stage build simplifies the s3prl installation
# TODO: Find a slimmer base image that also &quot;just works&quot;
FROM tiangolo/uvicorn-gunicorn:python3.8

RUN apt-get update --fix-missing &amp;&amp; apt-get install -y wget \\ 
    zip \\
    unzip \\
    vim \\
    telnet \\
    iproute2 \\
    inetutils-ping \\
    lsof \\
    net-tools \\
    libsndfile1 \\
    sox \\
    ffmpeg \\
    git \\
    git-lfs

RUN python -m pip install --upgrade pip
RUN python -m pip --no-cache-dir install git+https://github.com//pytorch/fairseq.git@b5a039c292facba9c73f59ff34621ec131d82341#egg=fairseq
RUN pip3 install --upgrade pip wheel setuptools==45.2.0
RUN python -m pip --no-cache-dir install git+https://github.com/mechanicalsea/lighthubert#egg=lighthubert
RUN python -m pip --no-cache-dir install git+https://github.com/s3prl/s3prl.git#egg=s3prl
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><strong>build制作镜像</strong></li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>docker build --network host -t mirrors.tencent.com/ailab_sv/s3prl:0.3.4 .
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li><strong>push上传镜像</strong></li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>docker push mirrors.tencent.com/ailab_sv/s3prl:0.3.4
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li><strong>本地开发机测试镜像</strong></li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>./run_docker.sh mirrors.tencent.com/ailab_sv/s3prl:0.3.4:latest sh -c &quot;ls&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,29),r=[d];function a(t,c){return i(),n("div",null,r)}const v=e(l,[["render",a],["__file","dockerCMD.html.vue"]]);export{v as default};
