import { absolutePath } from "./fileUtils";

export * from "./clocUtils";
export * from "./fileNames";
export * from "./fileUtils";
export * from "./javaUtils";
export * from "./pythonUtils";

export const LIB_FOLDER = absolutePath("./lib");
export const SCRIPT_FOLDER = absolutePath("./scripts");

export const MAAT_JAR = `${LIB_FOLDER}/code-maat-1.0.4-standalone.jar`;
