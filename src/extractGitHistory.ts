import { $ } from "bun";

import type { Arguments } from "./types";
import { MAAT_LOG } from "./utils";

export const extractGitHistory = async ({
  gitFolder,
  reportFolder,
  startDate,
  endDate,
}: Arguments) => {
  try {
    console.log(`Extracting git history from folder "${gitFolder}"`);

    await $`git log --pretty=format:'[%h] %an %ad %s' --date=short --numstat --after="${startDate}" --before=${endDate} > "${reportFolder}/${MAAT_LOG}"`.cwd(
      gitFolder
    );
    console.log("\t→ Git history extracted\n");
  } catch (error) {
    console.error(`Couldn't extract git history`, error);
    throw new Error(`Couldn't extract git history: ${error}`);
  }
};
