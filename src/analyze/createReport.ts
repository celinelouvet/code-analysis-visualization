import shell from "shelljs";

import { getPythonExec, SCRIPT_FOLDER } from "../utils/index.ts";

const REPORT = "report.json";

export const createReport = (
  maatFreqs: string,
  maatLines: string,
  reportFolder: string,
) => {
  try {
    console.log("Creating report for visualization");

    const python = getPythonExec();

    shell.exec(
      `${python} ${SCRIPT_FOLDER}/csv_as_enclosure_json.py --structure ${maatLines} --weights ${maatFreqs} --weightcolumn 1 > ${REPORT}`,
      { cwd: reportFolder },
    );

    console.log("\t→ Report created\n");

    return REPORT;
  } catch (error) {
    console.error(`Couldn't create report for visualization`, error);
    throw new Error(`Couldn't create report for visualization: ${error}`);
  }
};
