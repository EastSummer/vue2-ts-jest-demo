# vue2-jest

## Directory Structure
```bash
├── dist                       // 打包好的文件 prod环境
├── src                        // 源代码
│   ├── api                    // 所有请求
│   ├── assets                 // 主题 字体等静态资源
│   ├── components             // 全局公用组件
│   ├── router                 // 前端路由
│   ├── store                  // 全局 store 状态数管理
│   ├── utils                  // 全局公用方法
│   ├── views                  // views 所有页面
│   ├── App.vue                // 入口页面
│   └── main.ts                // 入口文件 加载组件 初始化等
├── test                       // 打包好的文件 test环境
├── .editorconfig              // 编辑器配置，就是指统一不同编辑器的代码风格的配置
├── babel.config.js            // babel-loader 配置
├── jest.config.js             // 单元测试 配置
├── tsconfig.json              // ts 编译配置项
├── tslint.json                // tslint 配置项 代码检测工具
└── vue.config.js              // 配置相关
```

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your unit tests
```
npm run test:unit
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
