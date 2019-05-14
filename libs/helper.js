/*
 * @Author: yongtian.hong
 * @LastEditors: yongtian.hong
 * @Description:
 * @Date: 2019-04-13 10:50:55
 * @LastEditTime: 2019-05-14 19:38:32
 */
const chalk = require("chalk");
const path = require("path");
const fs = require("fs");

//路径处理
function resolve(...file) {
    return path.resolve(process.cwd(), ...file);
}

// 日志打印
const log = {
    warn: (...message) => console.log(chalk.green(`${message}`)),
    success: (...message) => console.log(chalk.blue(`${message}`)),
    error: (...error) => console.log(chalk.red(`${error}`))
};

// 递归创建文件夹
function mkdir(directory, callback) {
    var exists = fs.existsSync(directory);
    if (exists) {
        // log.error(`${directory}已存在`)
    } else {
        mkdir(path.dirname(directory), function () {
            fs.mkdirSync(directory);
        });
    }
    typeof callback === "function" && callback();
}

// 创建文件
function createFile(targetFile, data) {
    if (fs.existsSync(targetFile)) {
        log.error(`${targetFile}文件已存在`);
    }
    fs.writeFile(targetFile, data, "utf8", err => {
        if (err) {
            log.error(err.message);
        }
    });
}

function generateFile(targetDir, fileName, content) {
    mkdir(targetDir);
    const targetFile = path.resolve(targetDir, fileName);
    createFile(targetFile, content);
}

function generateFiles(targetDir, templateObj, ext = ".js") {
    mkdir(targetDir);
    Object.keys(templateObj).forEach(fileName => {
        let content = templateObj[fileName];
        fileName = /\./.test(fileName) ? fileName : fileName + ext;
        let targetFileName = path.resolve(targetDir, fileName);
        createFile(targetFileName, content);
    });
}

module.exports = {
    log,
    resolve,
    generateFile,
    generateFiles
};
