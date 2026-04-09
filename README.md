npm init -y
npm install typescript --save-dev
npx tsc main.ts




npx tsc --init 生成 tsconfig.json

当生成 tsconfig.json 之后，就可以运行 npx tsc
PS: 记住所有的 js 文件在 src 文件夹下

此时, tsconfig.json 应该添加如下的内容：




{
  "compilerOptions": {
    "target": "es5", /* Set the JavaScript language version for emitted JavaScript and include compatible library declarations. */
    "module": "commonjs", /* Specify what module code is generated. */
    "rootDir": "./src", /* Specify the root folder within your source files. */
    "outDir": "./dist", /* Specify an output folder for all emitted files. */
    "removeComments": true, /* Disable emitting comments. */
    "esModuleInterop": true, /* Emit additional JavaScript to ease support for importing CommonJS modules. This enables `allowSyntheticDefaultImports` for type compatibility. */
    "forceConsistentCasingInFileNames": true, /* Ensure that casing is correct in imports. */
    "strict": true, /* Enable all strict type-checking options. */
    "skipLibCheck": true /* Skip type checking all .d.ts files. */
  }
}


==============================================================
1, 然后再导入 webpack
命令：

npm install -D webpack webpack-cli webpack-dev-server html-webpack-plugin typescript ts-loader @types/lodash

2, 编辑 webpack.config.js

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: './src/main.ts',
    plugins: [
        new HtmlWebpackPlugin({
            title: '我的Webpack5',
        }),
    ],
    devServer: {
        static: './dist',
        port: 3000,
    },
    output: {
        filename: 'bundle-[contenthash].js',
        path: path.resolve(__dirname, "dist"),
        clean: true,
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
        ]
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },
}



3, 在 package.json 增加：
"serve": "webpack serve --config webpack.config.js"

4, 最后运行
npm run serve



=====================================================================================================

## lodash(Node.js常用库)

https://lodash.com/

## 实战演习/说明讲解

+ 安装 lodash 第三方依赖库
+ 使用 lodash 编写 TypeScript 程序
+ 编译执行

$ npm i lodash
$ npm i @types/lodash --save-dev



=====================================================================================================

ts-node 直接执行 ts 代码
Step 1:
npm install -D ts-node @types/node
step 2:
在 package.json 中增加 "tsmain": "clear && npx ts-node src/main.ts", 这样就直接运行 main.ts 了，这样是不用经过编译的



=====================================================================================================

TypeScript 使用 Express.js 开发 API - 初始化工程

# 建立工程目录
$ mkdir tsapi
$ cd tsapi
# 初始化工程
$ npm init -y
# 安装依赖包
$ npm install -D typescript
$ npm install -D @types/node
$ npm install -D ts-node
$ npm install -D nodemon
# 初始化 TypeScript 设置文件
$ npx tsc --init
# 安装 express.js
$ npm install express
$ npm install -D @types/express
# 建立启动文件
$ nano app.ts
...
# 执行启动文件
$ npx ts-node app.ts