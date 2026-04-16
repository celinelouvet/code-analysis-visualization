import { createFrequencyModifications } from "./createFrequencyModifications.ts";
import { createReport } from "./createReport.ts";
import { createReportFolder } from "./createReportFolder.ts";
import { createSummary } from "./createSummary.ts";
import { extractCoupling } from "./extractCoupling.ts";
import { extractGitHistory } from "./extractGitHistory.ts";
import { extractLinesCount } from "./extractLinesCount.ts";
import { mergeFrequenciesWithLines } from "./mergeFrequenciesWithLines.ts";
import { readArguments } from "./readArguments.ts";

export const analyze = async () => {
  const givenArguments = readArguments();

  const { gitFolder, reportFolder } = givenArguments;

  await createReportFolder(reportFolder);

  const maatLog = await extractGitHistory(givenArguments);
  await createSummary(maatLog, reportFolder);

  const maatFreqs = await createFrequencyModifications(maatLog, reportFolder);
  const maatLines = await extractLinesCount(gitFolder, reportFolder);

  await mergeFrequenciesWithLines(maatFreqs, maatLines, reportFolder);

  await createReport(maatFreqs, maatLines, reportFolder);

  await extractCoupling(maatLog, reportFolder);
};
