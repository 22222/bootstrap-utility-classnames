"use strict";

const path = require("path");
const fs = require("fs");

async function renameFileAsync() {
  /**
   * @type {string[]}
   */
  const args = process.argv ?? [];
  const source = args[2];
  const target = args[3];
  if (!source) {
    throw new Error("Missing source file");
  }
  if (!target) {
    throw new Error("Missing target file");
  }

  const targetDir = path.dirname(target);
  if (!fs.existsSync(targetDir)) {
    console.log(`Making directory "${pattargetDir}"`);
    await fs.promises.mkdir(targetDir);
  }

  console.log(`Renaming "${source}" to "${target}"`);
  await fs.promises.rename(source, target);
}

renameFileAsync();
