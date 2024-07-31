import { $ } from "bun";
import { checkJava, checkJar, MAAT_JAR } from "./utils";

const MAAT_COUPLING = "coupling.csv";

export const extractCoupling = async (
  maatLog: string,
  reportFolder: string
) => {
  try {
    console.log(`Extracting files' coupling into "${MAAT_COUPLING}"`);

    await checkJava();
    await checkJar(MAAT_JAR);

    await $`java -jar ${MAAT_JAR} -c git -l "${maatLog}"  -a coupling > "${MAAT_COUPLING}"`.cwd(
      reportFolder
    );
    console.log("\t→ Coupling created\n");
  } catch (error) {
    console.error(`Couldn't create coupling`, error);
    throw new Error(`Couldn't create coupling: ${error}`);
  }
};
