# 一个包含vuejs和nodejs的全栈项目

> A Vue.js project for vue.js and node.js,related to vuex,vue-router,express4,sequelize,stylus,axios,etc .

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

