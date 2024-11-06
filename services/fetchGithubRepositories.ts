import { request } from "@octokit/request";

export const fetchGithubRepositories = async ({
  page = 1,
  location,
  token,
}: {
  page?: number;
  location?: string;
  token?: string;
}) => {
  const response = await request("GET /search/repositories", {
    headers: {
      ...(token ? { authorization: `token ${token}` } : {}),
    },
    q: `stars:>1000${location ? `+location:${location}` : ""}`,
    order: "desc",
    sort: "stars",
    page,
    per_page: 100,
  });

  return response?.data?.items || [];
};
