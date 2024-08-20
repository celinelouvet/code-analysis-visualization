import { file } from "bun";
import path from "path";

export const doesFileExist = async (filepath: string) => {
  try {
    const searchedFile = file(filepath);
    await searchedFile.exists();

    return true;
  } catch (error) {
    return false;
  }
};

export const readFileContent = async (filepath: string) => {
  const searchedFile = file(filepath);
  return await searchedFile.text();
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
      `Couldn't obtain absolute path for path ${folderPath}: ${error}`
    );
  }
};
