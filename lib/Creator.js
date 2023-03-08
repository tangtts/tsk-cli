const ora = require("ora");
var child_process = require("child_process");
const { spawn } = child_process;
const download = require("download-git-repo");
const chalk = require("chalk");
class Creator {
  constructor(porjectName, targetDir, userOptions) {
    this.name = porjectName;
    this.target = targetDir;
    this.userOptions = userOptions;
  }
  create() {
    this.download();
  }
  async download() {
    let baseGitAddress = "https://github.com/tangtts/PURE-TEMPLATE-VUE3.git";
    let branch = "master";
    if (this.userOptions.needElementPlus) {
      branch = "element";
    } else {
      branch = "master";
    }
    const spinner = ora("开始克隆").start();
    //  let g = spawn("git", ["clone", "-b", branch, baseGitAddress, this.target]);
    //   g.stdout.on("data",function(s){
    //     console.log("gggg",s)
    //   })
    //   return;

    try {
      spinner.color = "yellow";
      spinner.text = "正在克隆...";

      download(
        `direct:${baseGitAddress}#${branch}`,
        this.target,
        function (err) {
          if (!err) {
            spinner.succeed("克隆完成");
          } else {
            console.log(`${chalk.red(`\r\n${err}`)}`);
            spinner.stop("出现了一点问题");
          }
        }
      );
    } catch (err) {
      spinner.fail("失败了err", err);
    }
  }
}

module.exports = Creator;
