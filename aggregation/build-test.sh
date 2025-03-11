yarn build:test

# 进入h5-build 项目目录
cd ../datacenter-build

# 切换分支
git checkout main

# 拉取最新代码
git pull origin main


# 将 dist 文件夹的内容复制过去
cp -r ../datacenter/build/* . 


git add --all

# 获取当前时间
CURRENT_TIME=$(date "+%Y-%m-%d %H:%M:%S")

# 提交并推送更改
git commit -m "聚合页 $CURRENT_TIME 发版" || echo "没有新内容提交"
git push origin main

# 完成提示
echo "完成"
read -p "按任意键退出..."
