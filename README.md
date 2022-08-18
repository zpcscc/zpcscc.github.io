# dxsixpc-monorepo

## 一、Yarn workspace

### 创建一个新的package

```sh
yarn run create <package>
# example
yarn run create package1
```

### 链接多个packages

```sh
yarn packages/<package> run lint
```

### 打包某个packages

```sh

```

### 为某个package安装依赖

```sh
yarn workspace awesome-package add react react-dom --dev
```

### 为某个package删除依赖

```sh
yarn workspace web-project remove react
```



## 二、Lerna

### 添加lerna

```sh
npx lerna@latest init
```

### 清除所有的node_modules

```sh
lerna clean
```

### 显示修改内容 类似git diff

```sh
lerna diff
```

### 列出所有的子package

```sh
lerna ls -l
```

### 列出修改过的子package

```sh
lerna changed
```

### build 所有子package

​	子package分别执行 `build`

```
lerna run build
```

# License

The scripts and documentation in this project are released under the [MIT License](LICENSE)