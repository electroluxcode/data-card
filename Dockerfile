# 使用基于 Node.js 的官方镜像作为基础
FROM node:14

# 设置工作目录
WORKDIR /app/stats

# 将项目文件复制到工作目录
COPY ./ /app/stats

# 执行 npm install 安装项目依赖
RUN npm install

# 暴露容器的 3000 端口
EXPOSE 3000

# 运行 node app.js 命令启动应用
CMD ["node", "app.js"]




# docker logs -f -t --since="2019-08-09" firstcontainer

# docker build  --platform linux/amd64  -t docker_hub_username/docker_image_name:docker_image_version  .
# docker run -d --name firstcontainer -p 81:3000 docker_hub_username/docker_image_name:docker_image_version

# 删除所有容器
# docker rm $(docker ps -a -q)
# 删除指定容器
# docker ps -a
# docker rm b7825ba1cd81
# 删除所有镜像
# docker stop $(docker images -q)
# docker rmi $(docker images -q)


# docker exec -it  d9d21c9defb3  ls -a /

# docker cp d9d21c9defb3:/ ./test
