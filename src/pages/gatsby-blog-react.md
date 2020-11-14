---
title: "使用 Gatsby 搭建个人网站"
date: "2020-11-10"
author: Jay
tags:
  - blog
  - gatsby
  - personal website
mainImage: ../assets/gatsby_main.jpg
---

# 前言

其实很久以前就一直想做一个自己的个人网站，挂一些平常喜欢的文章啊，帖子啊，或者自己的人生感悟、旅行日记之类的。

这次公司要做官网项目，技术选型选用了 **Gatsby** (基于React的快速搭建静态网站、博客的开源框架)，然后也是因为自己一直以来写的都是Angular项目，对React接触比较少，
所以这次想用Gatsby来写自己的个人网站也是想多攒点React的开发经验，哈哈哈~

然后发现Gatsby写起来是真的很快很爽，它支持的Graphql查询语句，能够轻松地将Markdown文件转化成页面所需要的数据构建页面。

在开始写个人网站项目之前，自己就已经在考虑后面部署的事项了，去网上查了一下，最先查出来的是云服务器+WordPress，不过又要买服务器，又要买域名，还得备案。后来发现每个Github账户都可以开一个自己的静态网站（域名为 username.github.io），非常简单，便转向了 **GitHub Pages**，


# 准备工作

1. 安装 Gatsby CLI

```shell
npm install -g gatsby-cli
```

2. 创建项目

```shell
gatsby new
```

目录结构如下：

```
.
├── LICENSE
├── README.md
├── content
├── gatsby-browser.js
├── gatsby-config.js
├── gatsby-node.js
├── node_modules
├── package-lock.json
├── package.json
├── src
└── static
```

3. 本地开发

```shell
gatsby develop
```

4. 用到的插件

![image](/assets/Plug-in.jpg)

# 配置及开发

## 配置

首先最重要的就是 `gatsby-config.js` 文件了，我们需要在里面启用上述安装的插件，配置可以到 [sasuke40.githu.io](https://github.com/SASUKE40/sasuke40.github.io) 查看。

还有得去 [google analytics](https://analytics.google.com/) 配置一下记录站点的访问信息。
![image](/assets/domain-config.jpg)
配置结束会给你个跟踪 ID，在配置文件 `gatsby-plugin-google-analytics` 下修改就行。

## 开发
就正常开发就好，建议使用md文件写博客，非常快。


# 部署

1. 安装 gh-pages

```shell
npm install gh-pages --save-dev
```

2. 配置部署脚本

```json
{
  "scripts": {
    "deploy": "gatsby build && gh-pages -d public -b master"
  }
}
```

3. 推送源码到 dev 分支

Github Pages 有个特殊的规则，就是 \<username\>.github.io 会默认使用 `master` 分支中的生产代码。这也就是为什么 `gh-pages -d public -b master` 中是指定 `master`，而不是 `gh-pages`。

因此，源码就需要放到非 `master` 分支上。我把博客的源码推到 `dev` 分支，并将其设置为默认。可以选择用Github pages默认的域名 **\<username\>.github.io** ，也可以自己配置自己的个人域名，如下图所示，
将 **custom domain**指向到自己已经认证并解析过的域名就好了

![image](/assets/github-page-config.jpg)

4. 推送构建后的生产代码

```shell
npm run deploy
```

推送后应该稍微等一下，就可以访问个人网站了。

# 总结

Gastby 优势

- 相当的灵活，给个人网站巨大的修改空间
- 支持 graphql，数据调用方便
- 生态强大，1500+ 数量的插件基本满足大部分需求


