import { components } from "@octokit/openapi-types";
import * as fs from "node:fs";
import path from "node:path";
import { PUBLIC_FOLDER } from "@/constants";
import { env } from "@/env";
import { fetchGithubRepositories } from "@/services/fetchGithubRepositories";
import { wait } from "@/utils";

(async () => {
  const pages = 10;

  const REPOSITORIES: components["schemas"]["repo-search-result-item"][] = [];

  for (let page = 1; page <= pages; page++) {
    try {
      const repositories = await fetchGithubRepositories({
        page,
        token: env.GITHUB_TOKEN,
      });

      REPOSITORIES.push(...repositories);

      console.log(
        `${page}/${pages} fetchGithubUsers: current = ${repositories.length}, total = ${REPOSITORIES.length}`,
      );
    } catch (error: any) {
      console.error(`${page}/${pages} fetchGithubUsers: ${error.message}`);
    }

    await wait(1000);
  }

  fs.writeFileSync(
    path.join(PUBLIC_FOLDER, `REPOSITORIES.json`),
    JSON.stringify(REPOSITORIES, null, 2),
  );
})();
