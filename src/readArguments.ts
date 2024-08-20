import { parseArgs } from "util";

import type { Arguments } from "./types";
import { absolutePath } from "./utils";

export const readArguments = () => {
  try {
    const { values } = parseArgs({
      args: Bun.argv,
      options: {
        gitFolder: {
          type: "string",
        },
        reportFolder: {
          type: "string",
        },
        startDate: {
          type: "string",
        },
        endDate: {
          type: "string",
        },
      },
      strict: true,
      allowPositionals: true,
    });

    const { startDate } = values as Arguments;
    const endDate = values.endDate ?? new Date().toISOString().split("T")[0];

    const reportFolder = buildReportPath(
      startDate,
      endDate,
      values.reportFolder
    );

    const absoluteGitFolder = asAbsolutePath(values.gitFolder);
    const absoluteReportFolder = asAbsolutePath(reportFolder);

    const args = {
      gitFolder: absoluteGitFolder,
      reportFolder: absoluteReportFolder,
      startDate,
      endDate,
    } satisfies Arguments;

    printArguments(args);

    return args;
  } catch (error) {
    console.error(`Couldn't read arguments`, error);
    throw new Error(`Couldn't read arguments: ${error}`);
  }
};

const asAbsolutePath = (folderPath?: string) => {
  if (!folderPath) {
    throw new Error("Path is required");
  }
  return absolutePath(folderPath);
};

const printArguments = ({
  gitFolder,
  reportFolder,
  startDate,
  endDate,
}: Arguments) => {
  console.log("Running with arguments: ");
  console.log("\tgitFolder\t", gitFolder);
  console.log("\treportFolder\t", reportFolder);
  console.log("\tstartDate\t", startDate);
  console.log("\tendDate\t\t", endDate);
  console.log("");
};

const buildReportPath = (
  startDate: string,
  endDate: string,
  reportFolder?: string
) => {
  if (!reportFolder) {
    throw new Error("Report folder is required");
  }
  return `reports/${reportFolder}/${startDate}-${endDate}`;
};
