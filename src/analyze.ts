import { createFrequencyModifications } from "./createFrequencyModifications";
import { createReportFolder } from "./createReportFolder";
import { createSummary } from "./createSummary";
import { extractGitHistory } from "./extractGitHistory";
import { extractLinesCount } from "./extractLinesCount";
import { mergeFrequenciesWithLines } from "./mergeFrequenciesWithLines";
import { readArguments } from "./readArguments";

export const analyze = async () => {
  const givenArguments = readArguments();

  const { gitFolder, reportFolder } = givenArguments;

  await createReportFolder(reportFolder);

  const maatLog = await extractGitHistory(givenArguments);
  await createSummary(maatLog, reportFolder);

  const maatFreqs = await createFrequencyModifications(maatLog, reportFolder);
  const maatLines = await extractLinesCount(gitFolder, reportFolder);

  await mergeFrequenciesWithLines(maatFreqs, maatLines, reportFolder);
};
