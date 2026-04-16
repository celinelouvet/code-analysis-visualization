import { absolutePath } from "./fileUtils.ts";

export * from "./clocUtils.ts";
export * from "./fileNames.ts";
export * from "./fileUtils.ts";
export * from "./javaUtils.ts";
export * from "./pythonUtils.ts";

export const LIB_FOLDER = absolutePath("./lib");
export const SCRIPT_FOLDER = absolutePath("./scripts");

export const MAAT_JAR = `${LIB_FOLDER}/code-maat-1.0.4-standalone.jar`;
