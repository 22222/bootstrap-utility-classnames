"use strict";

const path = require("path");
const fs = require("fs");

const appDirectory = fs.realpathSync(process.cwd());
const paths = {
  src: path.resolve(appDirectory, "src"),
  build: path.resolve(appDirectory, "build"),
};

/**
 * @param {string} dir
 */
async function listFilesAsync(dir) {
  /**
   * @param {string[]} files
   * @param {string} dir
   */
  const pushFilesAsync = async (files, rootDir, relativeDir) => {
    const dir = path.join(rootDir, relativeDir);
    const dirents = await fs.promises.readdir(dir, { withFileTypes: true });
    /**
     * @type {string[]}
     */
    const relativeChildDirs = [];
    for (const dirent of dirents) {
      const direntPath = path.join(relativeDir, dirent.name);
      if (dirent.isDirectory()) {
        relativeChildDirs.push(direntPath);
      } else {
        files.push(direntPath);
      }
    }

    for (const relativeChildDir of relativeChildDirs) {
      await pushFilesAsync(files, rootDir, relativeChildDir);
    }
  };

  /**
   * @type {string[]}
   */
  const files = [];
  await pushFilesAsync(files, dir, "");

  const rootFile = "index.ts";
  const rootFileIndex = files.indexOf(rootFile);
  if (rootFileIndex >= 0) {
    files.splice(rootFileIndex, 1);
    files.push(rootFile);
  }

  return files;
}

/**
 * @param {string} dir
 */
async function readInputScriptsAsync(dir) {
  /**
   * @type {Record<string, string>}
   */
  const scriptsRecord = {};

  const files = await listFilesAsync(dir);
  for (const file of files) {
    if (path.extname(file) !== ".ts") {
      continue;
    }

    const filePath = path.join(dir, file);
    const script = await fs.promises.readFile(filePath, { encoding: "utf8" });
    if (typeof script === "string" && script.length > 0) {
      scriptsRecord[file] = script;
    }
  }

  return scriptsRecord;
}

/**
 * @param {string} script
 * @param {{ preserveExports?: boolean }} [options]
 */
function modifyInputScript(script, options) {
  let result = script;
  result = result.replace(/import \{[^}]*\} from "[^"]*";[ \t\n\r]*/g, "");
  if (options?.preserveExports !== true) {
    result = result.replace(/export function/g, "function");
  }
  return result;
}

/**
 * @param {Record<string, string>} scriptsRecord
 */
function generateOutputScript(scriptsRecord) {
  /**
   * @type {string[]}
   */
  const parts = [];
  for (const file of Object.keys(scriptsRecord)) {
    const inputScript = scriptsRecord[file];
    const isRootFile = file === "index.ts";
    const fileDisplay = file.replace(/\\/g, "/").replace(/\..*$/, "");

    const outputScript = modifyInputScript(inputScript, { preserveExports: isRootFile });
    if (!isRootFile) parts.push(`//#region ${fileDisplay}`);
    parts.push(outputScript);
    if (!isRootFile) parts.push(`//#endregion`);
  }
  return parts.join("\n");
}

async function runAsync() {
  const scriptsRecord = await readInputScriptsAsync(paths.src);
  const script = generateOutputScript(scriptsRecord);
  if (!fs.existsSync(paths.build)) {
    console.log(`Making directory "${paths.build}"`);
    await fs.promises.mkdir(paths.build);
  }
  const outputFile = path.join(paths.build, "index.ts");
  console.log(`Writing file "${outputFile}"`);
  await fs.promises.writeFile(outputFile, script, { encoding: "utf8" });
}
runAsync();
