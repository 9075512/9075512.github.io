#!/usr/bin/env sh

# 忽略错误
set -e

# 构建
npm run docs:build

# 进入待发布的目录
cd docs/.vitepress/dist

# 初始化 git 并强制提交到仓库
git init
git add -a
git commit -m "初始化"
git remote add origin https://github.com/9075512/webTools.git
git push -f origin master:gh-pages

# 返回上次所在的目录
cd -

# 删除dist文件夹
rm -rf docs/.vitepress/dist

# 是否关闭命令行窗口
exec /bin/bash