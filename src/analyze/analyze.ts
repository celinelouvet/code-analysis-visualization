import { createFrequencyModifications } from "./createFrequencyModifications.ts";
import { createReport } from "./createReport.ts";
import { createReportFolder } from "./createReportFolder.ts";
import { createSummary } from "./createSummary.ts";
import { extractCoupling } from "./extractCoupling.ts";
import { extractGitHistory } from "./extractGitHistory.ts";
import { extractLinesCount } from "./extractLinesCount.ts";
import { mergeFrequenciesWithLines } from "./mergeFrequenciesWithLines.ts";
import { readArguments } from "./readArguments.ts";

export const analyze = () => {
  const givenArguments = readArguments();

  const { gitFolder, reportFolder } = givenArguments;

  createReportFolder(reportFolder);

  const maatLog = extractGitHistory(givenArguments);
  createSummary(maatLog, reportFolder);

  const maatFreqs = createFrequencyModifications(maatLog, reportFolder);
  const maatLines = extractLinesCount(gitFolder, reportFolder);

  mergeFrequenciesWithLines(maatFreqs, maatLines, reportFolder);

  createReport(maatFreqs, maatLines, reportFolder);

  extractCoupling(maatLog, reportFolder);
};
