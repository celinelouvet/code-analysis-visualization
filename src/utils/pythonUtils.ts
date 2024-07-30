import { $ } from "bun";

export const getPythonExec = async () => {
  try {
    const version = await $`python3 --version`.text();
    console.log(`\t→ python version: ${version}`);

    return "python3";
  } catch (error) {
    try {
      const version = await $`python --version`.text();
      console.log(`\t→ python version: ${version}`);

      return "python";
    } catch (error) {
      throw new Error(`python3 is not installed. Please install it`);
    }
  }
};
