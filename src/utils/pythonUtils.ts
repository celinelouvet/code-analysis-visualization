import shell from "shelljs";

export const getPythonExec = () => {
  try {
    const version = shell.exec("python3 --version", { silent: true }).stdout;
    console.log(`\t→ python version: ${version}`);

    return "python3";
  } catch (error) {
    try {
      const version = shell.exec("python --version", { silent: true }).stdout;
      console.log(`\t→ python version: ${version}`);

      return "python";
    } catch (error) {
      throw new Error(`python3 is not installed. Please install it`);
    }
  }
};
