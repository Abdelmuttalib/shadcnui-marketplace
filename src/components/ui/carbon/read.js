function readFileContent(filePath) {
  return new Promise((resolve, reject) => {
    const fs = require("fs");
    pwd = process.cwd();
    console.log(pwd);
    fs.readFile(pwd + "/" + filePath, "utf8", (err, data) => {
      if (err) {
        reject(err);
      } else {
        resolve(data);
      }
    });
  });
}

const filePath = "/ui/button.tsx";

readFileContent(filePath)
  .then((data) => {
    console.log(data);
    // replace all '-cb' with '', just removing it
    const newData = data.replace(/-cb/g, "");
    console.log("newData", newData);
    const regex = /(export function)(\w+)(\(\))/g;
    const matches = data.match(regex);
    if (matches) {
      const functions = matches.map((match) => {
        const [, exportKeyword, functionName, params] = match.split("(");
        return {
          exportKeyword,
          functionName,
          params,
        };
      });
      console.log(functions);
    }
  })
  .catch((err) => {
    console.error(err);
  });
