---
title: 使用 Hexo 搭建个人博客
author: 李海涛
date: 2017-09-19 18:48:03
tags: [ 开发者手册, Hexo, Github Pages ]
---
一直想开个博客写几篇技术文章，因为写博客不仅能让自己更深入地理解某项技术，而且可以总结归纳一些我学到的知识点分享给别人，但总是犹豫在什么地方写博客，因为现在有很多比如 CSDN、博客园、简书等博客平台，很难选择，也都不是我喜欢的类型。后来看到我关注的一些大牛都自行搭建了个人博客，所以就选了这种形式。因为自建博客权限比较高，可控性也高，博客的样式、布局都可以由自己来设定，最重要的是搭建过程包括发文章都使用命令来操作，更像是一个极客的风格。于是我在网上查了些资料，折腾了大半天，终于使用 [Hexo](https://hexo.io) +  [Github Pages](https://pages.github.com) 搭起了自己的博客 [lihthub](https://lihthub.github.io)。相对于使用专业的已经成型的博客平台，自行搭建博客可能有点折腾，下面详细记录下我的搭建过程。

## 什么是 Hexo ?

[Hexo](https://hexo.io) 是个静态博客框架。使用 [Markdown](https://daringfireball.net/projects/markdown) 撰写好文章，Hexo 会转成静态网页部署到 [Github Pages](https://pages.github.com)。

## 安装

### 安装 Node.js 和 Git

在安装 Hexo 之前，首先要安装 [Node.js](https://nodejs.org/en/) 和 [Git](https://git-scm.com)， Node.js 和 Git 的安装比较简单，请自行查看官方文档，这里不再赘述。

安装好 Node.js 和 Git 后，用 [npm](https://npmjs.org) 安装 Hexo ， npm 是 Node.js 的 package manager，会随 Node.js 一同安装。由于墙的关系，建议 npm 换成国内的源，比如[淘宝 NPM 镜像](http://npm.taobao.org/)。推荐安装 [nrm](https://github.com/Pana/nrm) (NPM registry manager)，可以在不同的 registry 之间快速切换：

``` bash
$ npm install -g nrm # 安装 nrm
$ nrm ls # registry 列表
$ nrm use taobao  # 将 registry 切换为 taobao
```

### 安装 Hexo

接着使用 npm 安装 Hexo：

``` bash
$ npm install hexo-cli -g
```

*说明：本文所有命令 Linux/Mac 在终端（terminal）输入，Windows 在 CMD 输入。*

## 创建 Hexo 项目

安装好 Hexo 后，在本地新建个文件夹作为 Hexo 项目文件夹，名称随意，我的叫 `lihthub.github.io` ，执行下列命令，Hexo 会在指定文件夹 `lihthub.github.io` 中新建所需要的文件：

``` bash
$ hexo init lihthub.github.io # 初始化 Hexo 项目
$ cd lihthub.github.io
$ npm install
```

初始化后，会在文件夹 `lihthub.github.io` 里生成以下目录结构，这就是你的 Workspace：

``` bash
.
├── _config.yml # 配置文件
├── package.json # 项目所需模块项目的配置信息
├── scaffolds # 用命令生成文章等的模板
├── source # 源文件夹，这里放置网站内容
|   ├── _drafts # 放置草稿 markdown 文件
|   └── _posts # 放置博文 markdown 文件
└── themes # 主题文件夹，Hexo 通过将网站内容与主题相结合来生成一个静态网站
```

在 `_config.yml` 配置文件中填写你的网站的 `title`、`description`、`author` 。更多配置请参考 [Hexo Configuration](https://hexo.io/docs/configuration.html)。

接着执行下列命令：

``` bash
$ hexo generate # 生成静态文件
$ hexo server # 启动本地服务
```

到这里本地的博客已经有了初步的原型，先访问 http://localhost:4000/ 查看下效果，后面继续。

Hexo 的命令可以通过 `hexo help` 和 `hexo help [command]` 查看帮助，更多请参考 [Hexo Commands](https://hexo.io/docs/commands.html)。

## Hexo 主题

Hexo 的默认主题不怎么好看，可以在 [Hexo Themes](https://github.com/hexojs/hexo/wiki/Themes) 选一款自己喜欢的主题，我用的是 [Cactus Dark](https://github.com/probberechts/cactus-dark)。

在 Github 下载主题文件，将文件整个目录 `cactus-dark` 复制到本地项目的 `themes` 目录下，然后修改配置文件 `_config.yml`：

``` yaml
theme: cactus-dark # 主题文件夹的名称
```

主题相关的配置在 `themes/cactus-dark/_config.yml` 里面，可以设置链接、添加菜单等，根据自己的需要配置。

## Hexo 插件

### 评论

Hexo 默认支持 [DISQUS](http://disqus.com/) 的评论功能，只要在 [disqus.com](http://disqus.com) 注册获得 Disqus Comments Shortname，然后在 `_config.yml` 里配置：

``` yaml
disqus_shortname: your shortname # Disqus Comments Shortname
```

### 图片

[hexo-asset-image](https://github.com/CodeFalling/hexo-asset-image) 能帮助你更好地管理博客中所用到的图片，每篇博文都会生成一个单独的资源文件夹，而不是混在一起。安装命令是：

``` bash
$ npm install hexo-asset-image --save
```

并且需要在 `_config.yml` 里设置 `post_asset_folder: true`。

安装完成后用 Hexo 新建文章时会在文章同目录下 `source/_posts` 生成一个和文章同名的文件夹，文章相关的所有图片放这个文件夹里就行，例如：

```
MacGesture2-Publish
├── apppicker.jpg
├── logo.jpg
└── rules.jpg
MacGesture2-Publish.md
```

在文章中插入图片时链接只要写图片名称就可以，比如要插入 `logo.jpg` ，只要写成 `![logo](logo.jpg)`。

### RSS

[hexo-generator-feed](https://github.com/hexojs/hexo-generator-feed) 可生成 `atom.xml` 文件供订阅使用，安装命令是：

``` bash
$ npm install hexo-generator-feed --save
```

在 `_config.yml` 中配置以下内容：

``` yaml
feed:
  type: atom
  path: atom.xml
  limit: 20
  hub:
  content:
```

然后将 `/atom.xml` 链接添加到 `themes/cactus-dark/_config.yml` 中设置RSS的位置。

### Sitemap

Sitemap 可方便搜索引擎抓取网页，安装 [hexo-generator-sitemap](https://github.com/hexojs/hexo-generator-sitemap) 即可自动生成 sitemap.xml 文件：

``` bash
$ npm install hexo-generator-sitemap --save
```

### Git

由于要使用 Git 部署 Hexo，所以需要安装 [hexo-deployer-git](https://github.com/hexojs/hexo-deployer-git)：

``` bash
$ npm install hexo-deployer-git --save
```

### 站内搜索

首先安装 [hexo-generate-search](https://www.npmjs.com/package/hexo-generator-search) 插件，它会生成一个搜索索引文件：

~~~ bash
$ npm install hexo-generator-search --save
~~~

接下来，创建一个页面来显示搜索引擎：

~~~ bash
$ hexo new page search
~~~

并将 `search: true` 放入 [Front-matter](https://hexo.io/zh-cn/docs/front-matter.html) ，也就是 `.md` 文件最上方以 `---` 分隔的区域。

最后编辑 `_config.yml` 并在导航菜单上添加一个搜索链接。

~~~ bash
nav:
  search: /search/
~~~

更多 Hexo 插件请参考 [Hexo Plugins](https://hexo.io/plugins/)

## 发布到 Github

至此本地的博客已经搭建起来了，下一步就是要发布到 Github。

发布到 Github 前首先要配置 Git 用户信息和在 Github 上加入 SSH key ，如果之前在 Github 上提交过项目或者配置过这两项则可以忽略。

### Git 用户信息

首先要配置的是你个人的用户名称和电子邮件地址。这两条配置很重要，每次 Git 提交时都会引用这两条信息，说明是谁提交了更新，所以会随更新内容一起被永久纳入历史记录：

``` bash
$ git config --global user.name lihaitao
$ git config --global user.email lihaitao.dev@gmail.com
```

如果用了 `--global` 选项，那么更改的配置文件就是位于你用户主目录下的那个，以后你所有的项目都会默认使用这里配置的用户信息。如果要在某个特定的项目中使用其他名字或者电邮，只要去掉 `--global` 选项重新配置即可，新的设定保存在当前项目的 `.git/config` 文件里。

### 在 Github 添加 SSH key

使用 SSH key 可以连接到 GitHub ，而无需在每次访问时提供用户名或密码，方便 Git 提交代码到 Github 。所以必须提供 SSH key 用于授权。生成 SSH key 的命令是（Linux/Mac 在终端输入，Windows 在 Git Bash 输入）：

``` bash
$ ssh-keygen -t rsa # 指定 rsa 算法生成密钥
```

接着连续三个回车键（不需要输入密码），然后就会生成两个文件 `id_rsa` 和 `id_rsa.pub` ，id_rsa 是密钥，id_rsa.pub 是公钥。这两个文件在 Linux/Mac 系统是在 `~/.ssh` 下，Windows 系统在 `C:/Users/username/.ssh` 下。

接下来要把 id_rsa.pub 的内容添加到 GitHub 上，这样你本地的 id_rsa 密钥跟 Github 上的 id_rsa.pub 公钥进行配对，授权成功才可以提交代码。

打开 Github 的 Setting 页面，点击左侧的 SSH and GPG keys：

![Github Setting](github-setting.png)

然后点击页面右上角的 New SSH key 按钮：

![New SSH key](new-ssh-key.png)

在 Key 那栏把 `id_rsa.pub` 文件里的内容复制粘贴进去就可以了，`Title` 不需要填写，点击 Add SSH key 按钮就 ok 了。

SSH key 添加成功后，输入 `ssh -T git@github.com` 进行测试，如果出现以下提示就证明添加成功了。

```
$ ssh -T git@github.com
Hi lihaitao! You've successfully authenticated, but GitHub does
not provide shell access.
```

### Github Pages

在 Github 上[新建](https://github.com/new)一个名为 `username`.github.io 的 repository ， username 是你的 Github 账号，比如我的叫 lihthub.github.io 。然后修改配置文件 `_config.yml` 里的以下内容：

``` yaml
# url 就是刚才新建的 repository 的名称
# repo 是刚才新建的 repository 的 SSH url
url: https://lihthub.github.io
deploy:
  type: git
  repo: git@github.com:lihthub/lihthub.github.io.git
  branch: master
```

经过前面的更改主题、安装插件等一系列配置之后，静态文件需要重新生成：

``` bash
$ hexo clean # 清除 public 文件夹中的静态文件
$ hexo generate # 生成静态文件
$ hexo server # 启动本地服务
```

访问 http://localhost:4000/ 查看效果，确认页面无误后执行下列命令将静态文件发布到 Github:

``` bash
$ hexo deploy
```

到这里博客就完全搭建起来了，访问 https://lihthub.github.io 就可以看到博客了。

## 写博客

正式发表博客前可以先打个草稿：

``` bash
$ hexo new draft "hello-world" # 新建标题为 hello-world 的草稿
```

执行此命令后，会在 `source/_drafts` 目录下生成一个 `hello-world.md` 文件，然后用文本编辑器打开 `hello-world.md` 就可以编辑博文了，使用 [Markdown](https://daringfireball.net/projects/markdown) 撰写。

新建草稿时标题建议使用英文单词之间加横杠的这种形式，例如 "hello-world" ，而不要使用中文，因为默认会使用文件名作为文章的 url，真正的标题可以在 `hello-world.md` 文件里面设置。

默认情况下，草稿不显示。可以在运行 Hexo 时添加 `--draft` 选项：

``` bash
$ hexo server --draft # 启动服务并预览草稿
$ hexo publish "hello-world" # 发布草稿，会把草稿移到 source/_posts 目录下
$ hexo deploy --generate # 生成静态文件并发布到 Github
```

也可以不打草稿：

``` bash
$ hexo new post "hello-world" # 新建标题为 hellow-world 的博文
```

这个命令会在 `source/_posts` 目录下生成一个 `hello-world.md` 文件，同样使用文本编辑器编辑这个文件。博文写完预览后直接发布到 Github：

``` bash
$ hexo server # 启动服务预览博文
$ hexo deploy --generate # 生成静态文件并发布到 Github
```

更多请参考 [Hexo Writing](https://hexo.io/docs/writing.html)。

## 源文件管理

如果要用另一台电脑写博客怎么办呢，这里介绍一种方法就是使用 Git 分支，创建两个分支，一个分支用来放博客的原始文件，另一个分支用来放生成的静态文件。

### 提交源文件到分支

先删除 `themes` 文件夹下的 `.git` 文件。然后在 `_config.yml` 中的 `deploy` 参数下设置 `branch: master` ，如果前面已经设置过就不用改了，这一步是为了确认将静态文件提交到 `master` 分支：

``` bash
deploy:
  type: git
  repo: git@github.com:lihthub/lihthub.github.io.git
  branch: master
```

接着在本地博客文件夹下依次执行下列命令：

``` bash
$ git init # 初始化 Git 项目
$ git checkout -b develop # 新建并切换到 develop 分支
# 添加远程仓库 origin ，后面是你在 Github 上创建的 repository 的 url
$ git remote add origin git@github.com:lihthub/lihthub.github.io.git
$ git add . # 将当前目录的所有文件加入暂存区
$ git commit -m "提交说明" # 提交更新
$ git push origin develop # 推送到远程仓库 origin 的 develop 分支
```

需要注意的是本地博客文件夹根目录下的 `.gitignore` 是 Hexo 自带的文件，也要提交到仓库，里面列的是要被 Git 忽略的文件，这些文件不需要纳入 Git 的管理。

这样就把本地博客项目提交到你的 Github 中 `lihthub.github.io` 仓库的 `develop` 分支上了。然后将仓库的默认分支设置为 develop，因为 develop 分支需要手动管理。

在 Github 中打开 `lihthub.github.io` 仓库的主页面，点击上面的 2 branches:

![lihthub.github.io](lihthub.github.io.png)

然后点击页面右上角的 Change default branch 按钮:

![lihthub.github.io](change-default-branch.png)

然后按下图所示依次点击将 Default branch 设为 `develop`:

![lihthub.github.io](switch-default-branch.png)

每次更新完博客或者更改了源文件都要执行下列命令提交更新：

``` bash
$ git status # 检查文件状态
$ git add . # 将当前目录的所有更新加入暂存区
$ git commit -m "提交说明" # 提交更新
$ git push origin develop # 推送到远程仓库 origin 的 develop 分支
```

### 换台电脑写博客

首先需要在新电脑上将远程仓库克隆下来：

``` bash
$ git clone git@github.com:lihthub/lihthub.github.io.git
```

输入 `git branch` 确认一下当前分支是否为 develop 。然后安装 Node.js 和 Git 。接着执行以下命令安装 Hexo：

``` bash
$ npm install hexo-cli -g
```

装好 Hexo 后，进入 `lihthub.github.io` 目录，安装所需要的 Hexo 插件：

``` bash
$ cd lihthub.github.io
$ npm install
$ npm install hexo-asset-image --save # 图片管理
$ npm install hexo-generator-feed --save # RSS订阅
$ npm install hexo-generator-sitemap --save # 生成 sitemap.xml
$ npm install hexo-deployer-git --save # Git部署
$ npm install hexo-generator-search --save # 站内搜索
```

按前面的步骤配置好 Git 用户信息和在 Github 上加入 SSH key 后新电脑的环境就搭建好了，就可以写博客了。