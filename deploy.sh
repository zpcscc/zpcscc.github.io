#!/usr/bin/env sh

#发布流程，按顺序执行下方命令

# 确保脚本抛出遇到的错误
set -e

# 生成静态文件
npm run build

# 进入生成的文件夹
cd myNote/.vuepress/dist

# 如果是发布到自定义域名
echo 'zpcscc.top' >CNAME

git init
git add -A
git commit -m 'deploy'

# 如果发布到 https://<USERNAME>.github.io
git push -f git@github.com:dxsixpc/dxsixpc.github.io.git master:gh-pages

# 如果发布到 https://<USERNAME>.github.io/<REPO>
# git push -f git@github.com:<USERNAME>/<REPO>.git master:gh-pages

cd -
