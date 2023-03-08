"# tv3-cli" 
> ts + vue3
1. 创建可执行脚本
2. 更改  package.json 中的 main
> package.json   
> "bin":{  
>   "tsk-cli":"./bin/zhu",
>    "tsk":"./bin/zhu"
> }  
> 配置多个别名，也可以使用 bin:"./bin/cli"
3. npm link --force 强制把以前的包取消掉在link,本地目录链接到 npm 全局模块下  
4. 根据 package.json 中的name 作为全局命令 "name": "tsk-cli",

---
# 原理
> 
>要有各种命令，根据各种命令产生不同的效果，比如 --version --help
> 要个性化配置，有交互
> 下载模板
> 根据用户的选择生成动态内容
1. 配置可执行命令 commander
2. 交互功能 inquirer
3. 将模板下载下来 download-git-repo
4. 根据用户的选择生成动态内容 metalsmith

 > 命令：
1.  tv3 --version 获取版本

> 更新内容
1. 更新下载地址
**2022年7月30日16:11:58**


