const fs = require("fs");
const path = require("path");

const operation = process.argv[2];
const file = process.argv[3];
const content = process.argv[4];
const directoryPath = path.join("../file_system");

switch (operation) {
  case "create":
    fs.writeFile(`${file}`, `${content}`, (err) => {
      if (err) {
        console.log(err);
      } else {
        console.log("file has created");
      }
    });
    break;

  case "read":
    fs.readFile(`${file}`, "utf-8", (err, data) => {
      if (err) {
        console.log(err);
      } else {
        console.log(data);
      }
    });
    break;
2
  case "delete":
    fs.unlink(`${file}`, (err) => {
      if (err) {
        console.log(err);
      } else {
        console.log("deleted");
      }
    });
    break;

  case "rename":
    fs.rename(`${file}`, `${content}`, (err) => {
      if (err) {
        console.log(err);
      } else {
        console.log("renamed");
      }
    });
    break;

  case "append":
    fs.appendFile(`${file}`, `\n${content}`, (err) => {
      if (err) {
        console.log(err);
      } else {
        console.log("appended");
      }
    });
    break;

  case "list":
    fs.readdir(directoryPath, (err, files) => {
      if (err) {
        console.log(err);
      } else {
        files.forEach((el) => {
          console.log(el);
        });
      }
    });
    break;

  default:
    console.log(`Invalid operation '${operation}'`);
}
