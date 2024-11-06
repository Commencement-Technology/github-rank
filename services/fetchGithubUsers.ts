import { request } from "@octokit/request";

export const fetchGithubUsers = async ({
  type,
  page = 1,
  location,
  token,
}: {
  type: "user" | "organisation";
  page?: number;
  location?: string;
  token?: string;
}) => {
  const response = await request("GET /search/users", {
    headers: {
      ...(token ? { authorization: `token ${token}` } : {}),
    },
    q: `followers:>1000+type:${type}${location ? `+location:${location}` : ""}`,
    order: "desc",
    sort: "followers",
    page,
    per_page: 100,
  });

  return response?.data?.items || [];
};
