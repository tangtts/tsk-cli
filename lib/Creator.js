const ora = require("ora");
var child_process = require("child_process");
const { spawn } = child_process;
class Creator {
  constructor(porjectName, targetDir) {
    this.name = porjectName;
    this.target = targetDir;
  }
  create() {
    this.download();
  }
  async download() {
    const spinner = ora("下载中");
    try {
      var g = spawn("git", [
        "clone",
        "https://github.com/tangtts/PURE-TEMPLATE-VUE3.git",
        this.target,
      ]);
      g.stdout.on("data", function (s) {
        console.log("g stdout: " + s);
      });
      g.stderr.on("data", function (data) {
        console.log("g stderr: " + data);
      });
    } catch (err) {
      spinner.fail("失败了err", err);
    }
  }
}

module.exports = Creator;
