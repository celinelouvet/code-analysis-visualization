import { $ } from "bun";

import {
  checkCloc,
  getIgnoreDirs,
  hasExistingClocignore,
  MAAT_LINES,
} from "./utils";

export const extractLinesCount = async (
  gitFolder: string,
  reportFolder: string
) => {
  try {
    console.log(
      `Extracting lines count into "${MAAT_LINES}". Can be slow for large repositories`
    );

    await checkCloc();
    const exists = await hasExistingClocignore();

    if (exists) {
      const ignoreDirs = await getIgnoreDirs();

      await $`cloc . --by-file --csv --quiet --exclude-dir=${ignoreDirs} --report-file="${reportFolder}/${MAAT_LINES}"`.cwd(
        gitFolder
      );
    } else {
      await $`cloc . --by-file --csv --quiet --report-file="${reportFolder}/${MAAT_LINES}"`.cwd(
        gitFolder
      );
    }

    console.log("\t→ Lines count extracted\n");
  } catch (error) {
    console.error(`Couldn't extract lines count`, error);
    throw new Error(`Couldn't extract lines count: ${error}`);
  }
};
