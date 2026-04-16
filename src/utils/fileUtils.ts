import path from "path";
import shell from "shelljs";

export const createFolder = (folderPath: string) =>
  shell.mkdir("-p", folderPath);

export const doesFileExist = (filepath: string) => {
  const searchedFile = shell.test("-f", filepath);
  return searchedFile;
};

export const readFileContent = (filepath: string) => {
  const searchedFile = shell.cat(filepath);
  return searchedFile.stdout;
};

export const absolutePath = (folderPath: string) => {
  try {
    if (path.isAbsolute(folderPath)) {
      return folderPath;
    }

    const replacedPath = folderPath.replace(/~/g, process.env.HOME ?? "");
    return path.resolve(replacedPath);
  } catch (error: unknown) {
    throw new Error(
      `Couldn't obtain absolute path for path ${folderPath}: ${error}`,
    );
  }
};
