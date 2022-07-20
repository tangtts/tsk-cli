
const axios = require("axios")
const download = require("download-git-repo");
async function download(){
 return axios.get("https://github.com/tangtts/tsk-cli.git")
}
module.exports = download
