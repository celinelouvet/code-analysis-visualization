import shell from "shelljs";

import { getPythonExec, SCRIPT_FOLDER } from "../utils/index.ts";

const COMPLEXITY = "complexity.csv";

export const mergeFrequenciesWithLines = (
  maatFreqs: string,
  maatLines: string,
  reportFolder: string,
) => {
  try {
    console.log(`Merging frequencies with lines count into "${COMPLEXITY}"`);

    const python = getPythonExec();

    shell.exec(
      `${python} ${SCRIPT_FOLDER}/merge_comp_freqs.py ${maatFreqs} ${maatLines} > ${COMPLEXITY}`,
      { cwd: reportFolder },
    );

    console.log("\t→ Frequencies merged with lines count\n");

    return COMPLEXITY;
  } catch (error) {
    console.error(`Couldn't merge frequencies with lines count`, error);
    throw new Error(`Couldn't merge frequencies with lines count: ${error}`);
  }
};
