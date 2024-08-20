import { createReportFolder } from "./createReportFolder";
import { readArguments } from "./readArguments";

export const analyze = async () => {
  const givenArguments = readArguments();

  const { reportFolder } = givenArguments;

  await createReportFolder(reportFolder);
};
