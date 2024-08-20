import { $ } from "bun";

import { checkCloc, MAAT_LINES } from "./utils";

export const extractLinesCount = async (
  gitFolder: string,
  reportFolder: string
) => {
  try {
    console.log(
      `Extracting lines count into "${MAAT_LINES}". Can be slow for large repositories`
    );

    await checkCloc();

    await $`cloc . --by-file --csv --quiet --exclude-dir="node_modules" --report-file="${reportFolder}/${MAAT_LINES}"`.cwd(
      gitFolder
    );

    console.log("\t→ Lines count extracted\n");
  } catch (error) {
    console.error(`Couldn't extract lines count`, error);
    throw new Error(`Couldn't extract lines count: ${error}`);
  }
};
