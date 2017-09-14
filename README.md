# 一个包含vuejs和nodejs的全栈项目

> A Vue.js project for vue.js and node.js,related to vuex,vue-router,express4,sequelize,stylus,axios,etc .

## 项目说明

风险管理系统是我业余时间开发的项目，是一个简单的入门级项目。说简单是因为实现的页面和功能简单，不代表用的技术简单(对于初级前端来说)。

项目里用到了vue和element-ui的大部分技术点，可以给学习vue的童鞋一个参考。当然由于这个项目也是全栈项目，所以对于一些想学习node的前端来说，也是
一个不错的参考范本,项目里也有一些加密token等真实上线项目中会用到的东西，大家也可以借鉴。

由于本项目是全栈项目，所以在启动node服务器之前，需要安装mysql数据库，并对config/index.js中的数据库配置项进行修改，这点需要注意。如果安装过程中有疑问或者
发现项目bug的话，可以在issues里向我提问，我会尽力解答。

有效的进行偷懒，是程序员的优良品质。希望该项目能帮助到大家！

## 技术栈
* ### 前端技术
vue2 + vuex + vue-router + webpack + ES6/7 + axios + stylus + element-ui
* ### 后端技术
node.js + express4 + session + sequelize + mysql + lodash.js + bcrypt + jwt

## 实现功能
- [x] 登陆 -- 完成
- [x] 注册 -- 完成
- [x] 项目/额度条件查询 -- 完成
- [x] 列表展示及分页 -- 完成
- [x] 添加/修改项目 -- 完成
- [x] 额度详情页 -- 完成
- [x] 用户注销 -- 完成
- [x] 登出 -- 完成

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


## 项目运行

``` bash
# 安装依赖
npm install

# 启动vue前端项目(http://localhost:8080/...)
npm run dev

# 启动node后端项目(http://localhost:8081/...)
npm run start

