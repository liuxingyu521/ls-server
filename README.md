# ls-server

一个命令行工具，用来初始化一个本地静态服务器。

## 使用

全局安装该命令

```sh
$ npm install -g ls-server
```

运行`--help`查看命令帮助

```sh
$ ls-server --help
# ls-server ~ @version

# Usage: ls-server [(--port | -p) <port>] [(--dirs | -d) <dir1 dir2 ...>] [--gzip | -g]

# 选项：
#   --help, -h     显示帮助信息                                            [布尔]
#   --version, -v  显示版本号                                             [布尔]
#   --port, -p     <port> 设置服务器端口号， 默认为8888                     [数字]
#   --dirs, -d     <dir> 设置服务器静态资源目录，可以设置多个，用空格隔开       [数组]
#   --gzip, -g     <gzip> 设置服务器是否开启 gzip 压缩                      [布尔]
```

## 示例

1. 开启默认本地服务器，默认使用`./` 和 `./public/`目录为静态资源根目录

```sh
$ ls-server
# 服务器静态资源路径为:
#   /Users/user/.../ls-server/public/
#   /Users/user/.../ls-server/

# http-server lauched at http://localhost:8888
```

2. 开启指定端口号的本地服务器

```sh
$ ls-server -p 10086
# 服务器静态资源路径为:
#   /Users/user/.../ls-server/public/
#   /Users/user/.../ls-server/

# http-server lauched at http://localhost:10086
```

3. 开启指定静态资源根目录的本地服务器

```sh
$ ls-server --dirs ./static/ ./common
# 服务器静态资源路径为:
#   /Users/user/.../ls-server/static/
#   /Users/user/.../ls-server/common/

# http-server lauched at http://localhost:8888
```

4. 开启 gzip 压缩

```sh
$ ls-server -g
# 服务器静态资源路径为:
#   /Users/user/.../ls-server/public/
#   /Users/user/.../ls-server/
#
# 已开启 Gzip
#
# http-server lauched at http://localhost:8888
```
