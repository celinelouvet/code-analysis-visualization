import { $ } from "bun";

export const checkCloc = async () => {
  try {
    const version = await $`cloc --version`.text();
    console.log(`\t→ cloc version: ${version}`);
  } catch (error) {
    throw new Error(
      `cloc is not installed. Please install it "https://github.com/AlDanial/cloc/releases/latest"`
    );
  }
};
