# code-analysis-visualization

This project is a simple code analysis visualization tool that uses scripts written by [Adam Tornhill](https://github.com/adamtornhill).

It uses:

- java
- [cloc](https://github.com/AlDanial/cloc)
- python3
- node 25.5.0
- pnpm 10.33.0

## To run

1. If you need to ignore a folder (like `node_modules`), add it to [`.clocignore`](.clocignore).
2. Install Node: `nvm use 25.5.0`
3. Install dependencies: `pnpm install`
4. Run: `pnpm analyze --gitFolder='~/Workspace/core-banking' --reportFolder='./core-banking' --startDate='2024-01-01'`
5. Run: `pnpm serve`
6. Open `http://localhost:3000?project=core-banking&startDate=2024-01-01&endDate=2026-04-16` in your browser
