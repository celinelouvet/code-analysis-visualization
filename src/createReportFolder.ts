import { createFolder } from "./utils/index.ts";

export const createReportFolder = async (reportFolder: string) => {
  try {
    console.log(`Creating report folder "${reportFolder}"`);

    await createFolder(reportFolder);

    console.log("\t→ Report folder created\n");
  } catch (error) {
    console.error(`Couldn't create report folder`, error);
    throw new Error(`Couldn't create report folder: ${error}`);
  }
};
