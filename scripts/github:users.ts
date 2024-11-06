import { components } from "@octokit/openapi-types";
import * as fs from "node:fs";
import path from "node:path";
import { PUBLIC_FOLDER } from "@/constants";
import { env } from "@/env";
import { fetchGithubUsers } from "@/services/fetchGithubUsers";
import { wait } from "@/utils";

(async () => {
  const pages = 10;

  const types: ("user" | "organisation")[] = ["user", "organisation"];

  for (const type of types) {
    const USERS: components["schemas"]["user-search-result-item"][] = [];

    for (let page = 1; page <= pages; page++) {
      try {
        const users = await fetchGithubUsers({
          type,
          page,
          token: env.GITHUB_TOKEN,
        });

        USERS.push(...users);

        console.log(
          `${page}/${pages} fetchGithubUsers: type = ${type} current = ${users.length}, total = ${USERS.length}`,
        );
      } catch (error: any) {
        console.error(
          `${page}/${pages} fetchGithubUsers: type = ${type} ${error.message}`,
        );
      }

      await wait(1000);
    }

    fs.writeFileSync(
      path.join(PUBLIC_FOLDER, `${type.toUpperCase()}S.json`),
      JSON.stringify(USERS, null, 2),
    );
  }
})();
