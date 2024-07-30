import { $ } from "bun";

import { absolutePath, getPythonExec } from "./utils";

const COMPLEXITY = "complexity.csv";

export const mergeFrequenciesWithLines = async (
  maatFreqs: string,
  maatLines: string,
  reportFolder: string
) => {
  try {
    console.log(`Merging frequencies with lines count into "${COMPLEXITY}"`);

    const python = await getPythonExec();

    const scriptFolder = absolutePath("./scripts");

    await $`${python} ${scriptFolder}/merge_comp_freqs.py ${maatFreqs} ${maatLines} > ${COMPLEXITY}`.cwd(
      reportFolder
    );

    console.log("\t→ Frequencies merged with lines count\n");

    return COMPLEXITY;
  } catch (error) {
    console.error(`Couldn't merge frequencies with lines count`, error);
    throw new Error(`Couldn't merge frequencies with lines count: ${error}`);
  }
};
