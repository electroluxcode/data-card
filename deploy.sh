#!/bin/bash

# step1：初始化变量
start_time=$(date +%s) # 记录脚本开始时间
docker_image_version=${1:-1.1} # Docker镜像版本
docker_image_name=${2:-behind_image} # Docker 仓库 image 名字
docker_hub_username=${3:-electroluxcode} # Docker Hub 用户名
container_name=${4:-behind_container} # 容器名字
container_expose_port=${5:-3000} # 容器暴露的端口

server_username=${6:-ubuntu} # Linux服务器用户名
server_address=${7:-62.234.180.224} # Linux服务器地址



# step2：没登陆首先登录一下
# docker login -u 3451613934@qq.com -p 
# yarn build

# step3： 注意这个 image 应该要提前构建
# -t 指定构建镜像的名字和版本 
echo -e "\e[91m --本地build中--"
docker build  --platform linux/amd64 -t $docker_hub_username/$docker_image_name:$docker_image_version  . 
docker push $docker_hub_username/$docker_image_name:$docker_image_version
echo -e "\e[0m"


echo -e "\e[92m --服务器部署中--"
# step4:这一步可以 ssh-copy-id 去除登录
ssh $server_username@$server_address << EOF
sudo -s
docker ps
docker stop $container_name
docker rm $container_name
docker rmi $(docker images -q)

docker images
docker pull $docker_hub_username/$docker_image_name:$docker_image_version
if [ $? -ne 0 ]; then
  echo "Docker镜像拉取失败,脚本被终止."
  exit 1
fi
docker images

# docker run -d --name bimddp_container -p 81:80 electroluxcode/bimddp_image:1.1
docker run -d --name $container_name -p $container_expose_port:3000 $docker_hub_username/$docker_image_name:$docker_image_version
docker ps
docker images
exit

EOF

echo -e "\e[0m"
# docker images |  docker rmi  id id | docker rmi $(docker images -q)
# 计算整个脚本的用时
end_time=$(date +%s)
duration=$((end_time - start_time))
formatted_duration=$(date -u -d @"$duration" +"%H:%M:%S")

echo "✨🎉🎈恭喜您, 部署成功!"
echo "整个过程花费 $formatted_duration"