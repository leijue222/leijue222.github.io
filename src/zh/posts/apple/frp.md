---
icon: edit
date: 2022-05-18
category:
  - 常用工具
tag:
  - frp
---


# frp内网穿透

## 内网穿透（frp）教程，分为云服务器端（frps）和本地电脑端（frpc）

> 留意**7000和7500**端口要开放**安全组和防火墙**。配置防火墙可参考[此处](https://blog.yiweiding.cn/archives/%E9%98%B2%E7%81%AB%E5%A2%99firewalldiptables%E7%9A%84%E4%BD%BF%E7%94%A8)
- **启动frp的服务端和客户端**
```
# 服务端
cd /root/frp_0.36.1_linux_amd64
nohup ./frps -c frps.ini &
# 客户端
systemctl start frpc
```
- **frps.ini配置文件样例**
```
[common]
bind_port = 7000
token = liublack
dashboard_port = 7500
#vhost_https_port = 5555
```
- **frpc.ini配置文件样例**
```
[common]
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
```
