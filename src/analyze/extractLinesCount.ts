import shell from "shelljs";

import {
  checkCloc,
  getIgnoreDirs,
  hasExistingClocignore,
  MAAT_LINES,
} from "../utils/index.ts";

export const extractLinesCount = (gitFolder: string, reportFolder: string) => {
  try {
    console.log(
      `Extracting lines count into "${MAAT_LINES}". Can be slow for large repositories`,
    );

    checkCloc();
    const exists = hasExistingClocignore();

    if (exists) {
      const ignoreDirs = getIgnoreDirs();

      shell.exec(
        `cloc . --by-file --csv --quiet --exclude-dir=${ignoreDirs} --report-file="${reportFolder}/${MAAT_LINES}"`,
        { cwd: gitFolder },
      );
    } else {
      shell.exec(
        `cloc . --by-file --csv --quiet --report-file="${reportFolder}/${MAAT_LINES}"`,
        { cwd: gitFolder },
      );
    }

    console.log("\t→ Lines count extracted\n");

    return MAAT_LINES;
  } catch (error) {
    console.error(`Couldn't extract lines count`, error);
    throw new Error(`Couldn't extract lines count: ${error}`);
  }
};
