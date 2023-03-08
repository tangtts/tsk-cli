const path = require("path");
const fs = require("fs-extra");
const chalk = require("chalk");
// 下拉选择
const Inquirer = require("inquirer");
const Creator = require("./Creator");
const userOptions = {};
module.exports = async function (porjectName, options) {
  const cwd = process.cwd();
  const targetDir = path.join(cwd, porjectName);
  // 同名的目录是否存在
  if (fs.existsSync(targetDir)) {
    // 如果直接使用 强制删除 --f
    if (options.force) {
      await fs.remove(targetDir);
    } else {
      // 是否要覆盖
      const { needOverwrite } = await Inquirer.prompt([
        {
          name: "needOverwrite",
          type: "list",
          message: "当前文件下有同样的文件:",
          default: "覆盖",
          choices: [
            { name: "覆盖", value: true },
            { name: "取消", value: false },
          ],
        },
      ]);
      if (needOverwrite) {
        console.log(`${chalk.red("\r\n删除中...")}`);
        await fs.remove(targetDir);
        console.log(`${chalk.green("删除完毕...")}`);
      }
    }
  }
  // 需要 element-plus 吗?
  const { needElementPlus } = await Inquirer.prompt([
    {
      name: "needElementPlus",
      type: "list",
      message: "需要 element-plus 吗?",
      default: "需要",
      choices: [
        { name: "需要", value: true },
        { name: "不需要", value: false },
      ],
    },
  ]);
  userOptions.needElementPlus = needElementPlus;

  const createor = new Creator(porjectName, targetDir, userOptions);
  createor.create();
};
