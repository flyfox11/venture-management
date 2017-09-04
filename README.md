# 一个包含vuejs和nodejs的全栈项目

> A Vue.js project for vue.js and node.js,related to vuex,vue-router,express4,sequelize,stylus,axios,etc .

## 技术栈
* ### 前端技术
vue2 + vuex + vue-router + webpack + ES6/7 + axios + stylus + element-ui
* ### node技术
nodejs + express4 + session + sequelize + mysql + lodash.js

## 目录结构介绍 ##

	|-- build                            // webpack配置文件
	|-- config                           // 项目打包路径
	|-- screenshots                      // 效果图截屏
	|-- server                           // express后端，用于提供Api
	|-- src                              // 源码目录
	|   |-- assets                       // 资源文件
	|   |-- components                   // 公共组件
	|   |-- fetch                        // 接口定义与配置
	|   |-- pages                        // 相关页面
	|   |-- router                       // 路由配置
	|   |-- vuex                         // 状态管理
	|   |-- App.vue                      // 页面入口文件
	|   |-- main.js                      // 程序入口文件，加载各种公共组件
	|-- static                           // 静态资源文件
	|-- .babelrc                         // ES6语法编译配置
	|-- .editorconfig                    // 代码编写规格
	|-- .gitignore                       // git忽略的文件
	|-- .postcssrc.js                    // post-loader的插件配置文件
	|-- .favicon.ico                     // 网站logo图标
	|-- index.html                       // 入口html文件
	|-- package.json                     // 项目及工具的依赖配置文件
	|-- server.js                        // node server入口文件
  |-- README.md                        // 说明

## 效果演示


### 图1
![image](https://github.com/zhuangyanyan/my-vue/raw/master/screenshots/1.png)

### 图2
![image](https://github.com/zhuangyanyan/my-vue/raw/master/screenshots/2.png)

### 图3
![image](https://github.com/zhuangyanyan/my-vue/raw/master/screenshots/3.png)

### 图4
![image](https://github.com/zhuangyanyan/my-vue/raw/master/screenshots/4.png)

### 图5
![image](https://github.com/zhuangyanyan/my-vue/raw/master/screenshots/5.png)

## 项目运行

``` bash
# 安装依赖
npm install

# 启动vue前端项目(http://localhost:8080/...)
npm run dev

# 启动node后端项目(http://localhost:8081/...)
npm run start

#测试
<ul>
  <li>Yui哦</li>
  <li>客家人</li>
  <li>能恢复的</li>
  <li>真是的任天野</li>
</ul>

