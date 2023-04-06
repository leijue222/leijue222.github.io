> 不断更新中...

## 复制（可看进度）

```
rsync -av --progress /root/vox2_dev_wav.zip /dockerdata/
```

## 查看端口（netstat）

查看80端口
```
netstat -anop | grep 80
```
## nohup
用于在系统后台不挂断地运行命令，退出终端不会影响程序的运行。
```
nohup python server.py >> server-$(date "+%Y-%m-%d-%H:%M:%S").txt & 
```

## 查看文件大小
1. 查看当前目录下所有文件大小
```
du -h *
或者
ls -lh *
```
## 查看当前目录下文件（夹）的个数
- 统计当前路径下的文件
```
ls -l | grep "^-" | wc -l
```
- 统计包括子目录下的文件
```
ls -lR| grep "^-" | wc -l
```
- 统计文件夹
```
ls | wc -l
```
## curl 模拟请求

GET请求本地
```
curl localhost:80
```
