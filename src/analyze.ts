import { createFrequencyModifications } from "./createFrequencyModifications";
import { createReportFolder } from "./createReportFolder";
import { createSummary } from "./createSummary";
import { extractGitHistory } from "./extractGitHistory";
import { extractLinesCount } from "./extractLinesCount";
import { readArguments } from "./readArguments";

export const analyze = async () => {
  const givenArguments = readArguments();

  const { gitFolder, reportFolder } = givenArguments;

  await createReportFolder(reportFolder);

  const maatLog = await extractGitHistory(givenArguments);
  await createSummary(maatLog, reportFolder);
  await createFrequencyModifications(maatLog, reportFolder);
  await extractLinesCount(gitFolder, reportFolder);
};
