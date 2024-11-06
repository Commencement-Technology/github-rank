import { request } from "@octokit/request";
import { Endpoints } from "@octokit/types";

export const fetchGithubUser = async ({
  username,
  token,
}: {
  username: string;
  token?: string;
}): Promise<
  Endpoints["GET /search/users"]["response"]["data"]["items"][0] | null
> => {
  const response = await request(`GET /users/${username}`, {
    headers: {
      ...(token ? { authorization: `token ${token}` } : {}),
    },
  });

  return response.data || null;
};
