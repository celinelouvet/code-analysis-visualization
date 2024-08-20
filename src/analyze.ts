import { createReportFolder } from "./createReportFolder";
import { extractGitHistory } from "./extractGitHistory";
import { readArguments } from "./readArguments";

export const analyze = async () => {
  const givenArguments = readArguments();

  const { reportFolder } = givenArguments;

  await createReportFolder(reportFolder);

  await extractGitHistory(givenArguments);
};
