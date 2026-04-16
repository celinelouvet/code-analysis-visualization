import shell from "shelljs";

import type { Arguments } from "../types.ts";
import { MAAT_LOG } from "../utils/index.ts";

export const extractGitHistory = ({
  gitFolder,
  reportFolder,
  startDate,
  endDate,
}: Arguments) => {
  try {
    console.log(`Extracting git history from folder "${gitFolder}"`);

    shell.exec(
      `git log --pretty=format:'[%h] %an %ad %s' --date=short --numstat --after="${startDate}" --before=${endDate} > "${reportFolder}/${MAAT_LOG}"`,
      { cwd: gitFolder },
    );
    console.log("\t→ Git history extracted\n");

    return `${reportFolder}/${MAAT_LOG}`;
  } catch (error) {
    console.error(`Couldn't extract git history`, error);
    throw new Error(`Couldn't extract git history: ${error}`);
  }
};
