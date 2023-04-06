## 推荐方法：启动容器，在容器中配好所有环境，再把容器到出成镜像
1. 启动容器：

```
docker run -it -d --name demo mirrors.tencent.com/ailab_sv/ubuntu18.04:conda
```
获得容器id: 假设为dyz222

2. 进入容器：

```
docker exec -it dyz222 /bin/bash
```
然后开始配你的环境

3. 最后导出容器为镜像

```
# docker commit dyz222 mirrors.tencent.com/ailab_sv/pytorch:new
docker commit [OPTIONS] ${container_id} [REPOSITORY[:TAG]]
```
最后再把容器push即可调用。



## Dockerfile制作方法：
### 第一步：选择一个基础镜像
示例：

```
FROM mirrors.tencent.com/ailab_sv/ubuntu18.04:conda
```
这个很重要，基础镜像选好，很多必装的东西都预装好了，后续配置定制化的环境会方便很多。

推荐上述示例的基础镜像，ubuntu18.04+cuda11+py37，且包含了太极依赖的安装包。

### 第二步：定制化
- 示例一
```
FROM mirrors.tencent.com/ailab_sv/ubuntu18.04:conda
RUN pip3 install --upgrade pip opencv-python==4.2.0.32 wheel numpy
RUN pip3 install torch torchvision torchaudio --extra-index-url https://download.pytorch.org/whl/cu113
```
- 示例二

```
FROM mirrors.tencent.com/ailab_sv/pytorch:1.10.0
RUN pip3 install --upgrade pip wheel setuptools==45.2.0
RUN python -m pip --no-cache-dir install git+https://github.com//pytorch/fairseq.git@b5a039c292facba9c73f59ff34621ec131d82341#egg=fairseq
RUN python -m pip --no-cache-dir install git+https://github.com/mechanicalsea/lighthubert#egg=lighthubert
RUN python -m pip --no-cache-dir install git+https://github.com/s3prl/s3prl.git#egg=s3prl
```

### 第三步：其他个性化选配（按需选择）
系统依赖（必需+常用）：
第一部推荐的base镜像（mirrors.tencent.com/ailab_sv/ubuntu18.04:conda）已预装以下依赖

```
RUN apt-get update && apt-get install -y --no-install-recommends wget \ 
    openssh-server \
    zip \
    unzip \
    vim \
    rsync \
    telnet \
    pciutils \
    iproute2 \
    inetutils-ping \
    lsof \
    net-tools \
    libsndfile1 \
    git \
    git-lfs \
    sox \
    ffmpeg \
    openmpi-bin \
    screen \
    cron \
    iproute2 \
    tcl \
    tk \
    expect

RUN mkdir -p /var/run/sshd && \
 sed -i 's/#PermitRootLogin prohibit-password/PermitRootLogin yes/g' /etc/ssh/sshd_config && \
 sed -i 's/# Port 22/Port 36000/g' /etc/ssh/ssh_config
```
- 太极CPU监控：
```
RUN wget https://mirrors.tencent.com/repository/generic/NPD_TMP/tmp_agent/tmp_agent-latest-x86_64.tar.gz && tar zxf tmp_agent-latest-x86_64.tar.gz && cd AgentInstall && sh install.sh
```
 调用的话需要在start.sh里该命令：

```
bash /usr/local/agenttools/agent/startagent.sh
```
 也可进入容器内部执行该命令。

- 安装conda：
```
RUN wget \
    https://repo.anaconda.com/miniconda/Miniconda3-latest-Linux-x86_64.sh \
    && mkdir /root/.conda \
    && bash Miniconda3-latest-Linux-x86_64.sh -b \
    && rm -f Miniconda3-latest-Linux-x86_64.sh \
RUN conda version
ENV PATH="/root/miniconda3/bin:${PATH}"
RUN conda create -n py38 python=3.8 pip -y \
        && conda info -e
SHELL ["conda", "run", "-n", "py38", "/bin/bash", "-c"]        
RUN conda run -n py38 command \
	&& conda info -e
```
 使用带有conda的镜像时，跑任务需要在start.sh中加入
```
source activate py38
```
激活对应环境。conda activate不适用。要用source activate。



网络代理：
（不建议加入Dockfile进行build，建议需要的时候手动把这些命令加入start.sh或者进入容器手动执行）

# 配置容器内的web代理（根据需要加，如运行代码内无联网要求则不加）
```
ENV http_proxy=http://star-proxy.oa.com:3128
ENV https_proxy=http://star-proxy.oa.com:3128
ENV no_proxy=".woa.com,mirrors.cloud.tencent.com,tlinux-mirror.tencent-cloud.com,tlinux-mirrorlist.tencent-cloud.com,localhost,127.0.0.1,mirrors-tlinux.tencentyun.com,.oa.com,.local,.3gqq.com,.7700.org,.ad.com,.ada_sixjoy.com,.addev.com,.app.local,.apps.local,.aurora.com,.autotest123.com,.bocaiwawa.com,.boss.com,.cdc.com,.cdn.com,.cds.com,.cf.com,.cjgc.local,.cm.com,.code.com,.datamine.com,.dvas.com,.dyndns.tv,.ecc.com,.expochart.cn,.expovideo.cn,.fms.com,.great.com,.hadoop.sec,.heme.com,.home.com,.hotbar.com,.ibg.com,.ied.com,.ieg.local,.ierd.com,.imd.com,.imoss.com,.isd.com,.isoso.com,.itil.com,.kao5.com,.kf.com,.kitty.com,.lpptp.com,.m.com,.matrix.cloud,.matrix.net,.mickey.com,.mig.local,.mqq.com,.oiweb.com,.okbuy.isddev.com,.oss.com,.otaworld.com,.paipaioa.com,.qqbrowser.local,.qqinternal.com,.qqwork.com,.rtpre.com,.sc.oa.com,.sec.com,.server.com,.service.com,.sjkxinternal.com,.sllwrnm5.cn,.sng.local,.soc.com,.t.km,.tcna.com,.teg.local,.tencentvoip.com,.tenpayoa.com,.test.air.tenpay.com,.tr.com,.tr_autotest123.com,.vpn.com,.wb.local,.webdev.com,.webdev2.com,.wizard.com,.wqq.com,.wsd.com,.sng.com,.music.lan,.mnet2.com,.tencentb2.com,.tmeoa.com,.pcg.com,www.wip3.adobe.com,www-mm.wip3.adobe.com,mirrors.tencent.com,csighub.tencentyun.com"
 
```

- 更多Demo示例：
1. 示例一
```
FROM mirrors.tencent.com/ailab_sv/ubuntu18.04:conda
# 创建conda环境
RUN conda run -n py38 command \
	&& conda info -e
# 个性化安装项目环境依赖
RUN pip3 install torch torchvision torchaudio --extra-index-url https://download.pytorch.org/whl/cu113
RUN python -m pip --no-cache-dir install git+https://github.com//pytorch/fairseq.git@b5a039c292facba9c73f59ff34621ec131d82341#egg=fairseq
RUN python -m pip --no-cache-dir install git+https://github.com/mechanicalsea/lighthubert#egg=lighthubert
RUN python -m pip --no-cache-dir install git+https://github.com/s3prl/s3prl.git#egg=s3prl

```
 注意使用conda的话，在stat.sh中要选择环境：
```
# 激活环境
source activate py38
# 开始训练
python xx.py
```
2. 示例二
```
# pytorch官方镜像
FROM pytorch/pytorch:1.11.0-cuda11.3-cudnn8-devel

# 解决官方镜像的源问题
RUN rm /etc/apt/sources.list.d/cuda.list
# 安装太极必需的依赖和其它常用依赖
RUN apt-get update && apt-get install -y wget \ 
    openssh-server \
    zip \
    unzip \
    vim \
    rsync \
    telnet \
    pciutils \
    iproute2 \
    inetutils-ping \
    lsof \
    net-tools \
    libsndfile1 \
    git \
    git-lfs \
    sox \
    ffmpeg \
    openmpi-bin \
    screen

# 安装太极CPU监控依赖
RUN wget https://mirrors.tencent.com/repository/generic/NPD_TMP/tmp_agent/tmp_agent-latest-x86_64.tar.gz && tar zxf tmp_agent-latest-x86_64.tar.gz && cd AgentInstall && sh install.sh
```

3. 示例三
```
# We need this to use GPUs inside the container
FROM nvidia/cuda:11.2.2-base
# Using a multi-stage build simplifies the s3prl installation
# TODO: Find a slimmer base image that also "just works"
FROM tiangolo/uvicorn-gunicorn:python3.8
# Monitor CPU
RUN wget https://mirrors.tencent.com/repository/generic/NPD_TMP/tmp_agent/tmp_agent-latest-x86_64.tar.gz && tar zxf tmp_agent-latest-x86_64.tar.gz && cd AgentInstall && sh install.sh
# Common dependencies
RUN apt-get update --fix-missing && apt-get install -y wget \ 
    zip \
    unzip \
    vim \
    rsync \
    telnet \
    pciutils \
    iproute2 \
    inetutils-ping \
    lsof \
    net-tools \
    libsndfile1 \
    sox \
    ffmpeg \
    git \
    git-lfs

# Install according to your needs
RUN python -m pip install --upgrade pip
RUN python -m pip --no-cache-dir install git+https://github.com//pytorch/fairseq.git@b5a039c292facba9c73f59ff34621ec131d82341#egg=fairseq
RUN pip3 install --upgrade pip wheel setuptools==45.2.0
RUN python -m pip --no-cache-dir install git+https://github.com/mechanicalsea/lighthubert#egg=lighthubert
RUN python -m pip --no-cache-dir install git+https://github.com/s3prl/s3prl.git#egg=s3prl
```