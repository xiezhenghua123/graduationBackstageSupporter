#!/usr/bin/env sh
###
 # @Descripttion:
 # @version:
 # @Author: ZhenghuaXie
 # @Date: 2022-04-16 16:02:52
 # @LastEditors: ZhenghuaXie
 # @LastEditTime: 2022-04-16 16:11:20
###

# 确保脚本抛出遇到的错误
set -e

# 生成静态文件
npm run build

# 进入生成的文件夹
cd ./dist
# 如果是发布到自定义域名
# echo 'www.example.com' > CNAME

git init
git add *
git commit -m '发布'

# 如果发布到 https://<USERNAME>.github.io
# git push -f git@github.com:<USERNAME>/<USERNAME>.github.io.git master

# 如果发布到 https://<USERNAME>.github.io/<REPO>
git push -f git@github.com:xiezhenghua123/graduationBackstage.git master

cd -
