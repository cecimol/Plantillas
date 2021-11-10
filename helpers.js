const fs = require("fs");

exports.writeFileAsync = async (nombre, objects) => {
  await fs.promises.writeFile(
    `./${nombre}.txt`,
    JSON.stringify(objects, null, 2),
    "utf-8"
  );
};

exports.readFileAsync = async (nombre) => {
  let file = await fs.promises.readFile(`./${nombre}.txt`, "utf-8");
  return JSON.parse(file);
};
