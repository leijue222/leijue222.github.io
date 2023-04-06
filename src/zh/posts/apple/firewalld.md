
## 防火墙（firewalld、iptables）
> 推荐使用iptables，并关闭系统默认的firewalld。
1. **关闭firewalld防火墙和开机自启动**
```
systemctl stop firewalld
systemctl disable firewalld
```
2. **iptables的使用**
- 查看/修改配置文件
```
cat /etc/sysconfig/iptables
vim /etc/sysconfig/iptables
```
- 开放某个端口（如3306），写入配置文件
```
-A INPUT -p tcp -m state --state NEW -m tcp --dport 3306 -j ACCEPT
```
- 配置完重启iptables服务
```
systemctl restart iptables
```