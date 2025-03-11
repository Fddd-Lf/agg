# 第一阶段：构建阶段
FROM registry.cn-shenzhen.aliyuncs.com/aiiin/node:latest as build

# 设置工作目录
WORKDIR /app

# 复制 package.json 和 package-lock.json（如果存在）
COPY package.json package-lock.json ./

# 安装项目依赖，排除开发依赖
RUN npm install --no-save --no-optional

# 复制项目文件到工作目录
COPY . .

# 构建 Next.js 应用
RUN npm run build

# 第二阶段：生产环境
FROM registry.cn-shenzhen.aliyuncs.com/aiiin/node:latest

# 设置工作目录
WORKDIR /app

# 从构建阶段复制构建好的文件
COPY --from=build /app/.next ./.next
COPY --from=build /app/package*.json ./
COPY --from=build /app/node_modules ./node_modules
COPY --from=build /app/public ./public
COPY --from=build /app/static ./static

# 指定启动命令
CMD ["npm", "start"]