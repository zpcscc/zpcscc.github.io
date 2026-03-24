---
title: githook
---
## Git Hook



## 添加pre-commit

```shell
npx husky add .husky/pre-commit "npx lint-staged"
```



## 添加commit-msg

```shell
npx husky add .husky/commit-msg 'npx --no-install commitlint --edit "$1"' 
```



## 部分报错处理

因为没有将钩子 '.husky/commit-msg' 设置为可执行，钩子被忽略。

```shell
chmod +x .husky/commit-msg
```
