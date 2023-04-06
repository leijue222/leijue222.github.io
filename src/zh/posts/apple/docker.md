---
icon: edit
date: 2022-05-18
category:
  - 常用工具
tag:
  - docker
---

# Docker常用操作命令

**1. 拉取镜像**（如拉取 Halo 镜像）
```
docker pull halohub/halo:1.5.3
```
**2. 创建一个新的容器并运行。**
```
docker run -it -d --name halo -p 8092:8092 -v ~/.halo:/root/.halo --restart=unless-stopped halohub/halo:1.5.3
```
- -**it**： 开启输入功能并连接伪终端
- **-d**： 后台运行容器
- **--name**： 为容器指定一个名称
- **-p**： 端口映射，格式为 主机(宿主)端口:容器端口 ，可在 application.yaml 配置。
- **-v**： 工作目录映射。形式为：-v 宿主机路径:/root/.halo，后者不能修改。
- **--restart**： 建议设置为 unless-stopped，在 Docker 启动的时候自动启动 Halo 容器。

**3. ps**
```
# 列出所有在运行的容器信息。  
docker ps  

# 列出所有创建的容器ID。  
docker ps -a
```
- **-a** : 显示所有的容器，包括未运行的。
- **-f ** : 根据条件过滤显示的内容。
- **–format** : 指定返回值的模板文件。
- **-l** : 显示最近创建的容器。
- **-n** : 列出最近创建的n个容器。
- **–no-trunc** : 不截断输出。
- **-q** : 静默模式，只显示容器编号。
- **-s** : 显示总的文件大小。

**4. start / stop / restart**
```
# 启动已被停止的容器mynginx  
docker start mynginx  
 
# 停止运行中的容器mynginx  
docker stop mynginx  
 
# 重启容器mynginx  
docker restart mynginx
```

**5. kill / rm**
-  **杀死进程（kill）**
```
# 根据容器名字杀掉容器  
docker kill tomcat7  
 
# 根据容器ID杀掉容器  
docker kill 65d4a94f7a39
```
- **删除容器（rm）**
```
# 强制删除容器 db01、db02：  
docker rm -f db01 db02  
 
# 删除容器 nginx01, 并删除容器挂载的数据卷：  
docker rm -v nginx01  
 
# 暂停所有容器：  
docker stop $(docker ps -a -q)

# 删除所有已经停止的容器：  
docker rm $(docker ps -a -q)
```
- **删除镜像（rmi）**
```
docker rmi $(docker images -q)
```

**6. Docker系统和版本信息**
```
# 查看docker系统信息
docker info
# 显示 Docker 版本信息
docker version
```
**6. Dockerfile制作镜像**
- **Dockerfile demo**
```
# We need this to use GPUs inside the container
FROM nvidia/cuda:11.2.2-base
# Using a multi-stage build simplifies the s3prl installation
# TODO: Find a slimmer base image that also "just works"
FROM tiangolo/uvicorn-gunicorn:python3.8

RUN apt-get update --fix-missing && apt-get install -y wget \ 
    zip \
    unzip \
    vim \
    telnet \
    iproute2 \
    inetutils-ping \
    lsof \
    net-tools \
    libsndfile1 \
    sox \
    ffmpeg \
    git \
    git-lfs

RUN python -m pip install --upgrade pip
RUN python -m pip --no-cache-dir install git+https://github.com//pytorch/fairseq.git@b5a039c292facba9c73f59ff34621ec131d82341#egg=fairseq
RUN pip3 install --upgrade pip wheel setuptools==45.2.0
RUN python -m pip --no-cache-dir install git+https://github.com/mechanicalsea/lighthubert#egg=lighthubert
RUN python -m pip --no-cache-dir install git+https://github.com/s3prl/s3prl.git#egg=s3prl
```
- **build制作镜像**
```
docker build --network host -t mirrors.tencent.com/ailab_sv/s3prl:0.3.4 .
```
- **push上传镜像**
```
docker push mirrors.tencent.com/ailab_sv/s3prl:0.3.4
```
- **本地开发机测试镜像**
```
./run_docker.sh mirrors.tencent.com/ailab_sv/s3prl:0.3.4:latest sh -c "ls"
```