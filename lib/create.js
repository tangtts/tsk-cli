const path = require("path");
const fs = require("fs-extra");
const chalk = require("chalk");
const Inquirer = require("inquirer");
const Creator = require("./Creator")

module.exports = async function (porjectName, options) {
  console.log(porjectName, options);
  const cwd = process.cwd();
  const targetDir = path.join(cwd, porjectName);
  // 同名的目录是否存在
  if (fs.existsSync(targetDir)) {
    if (options.force) {
      await fs.remove(targetDir);
    } else {
      // 是否要覆盖
      const { action } = await Inquirer.prompt([
        {
          name: "action",
          type: "list",
          message: "当前文件下有同样的文件:",
          default:"覆盖",
          choices: [
            { name: "覆盖", value: "overwrite" },
            { name: "取消", value: false },
          ],
        },
      ]);
      if(action=="overwrite"){
        console.log(`${chalk.red("\r\n删除中...")}`);
        await fs.remove(targetDir);
        console.log(`${chalk.green("删除完毕...")}`);
      }
    }
  }

 const createor =  new Creator(porjectName,targetDir)
 createor.create()
};
