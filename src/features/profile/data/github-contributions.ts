import type { Activity } from "@/components/ui/contribution-graph";
import { GITHUB_USERNAME } from "@/config/site";
import fallbackContributions from "./github-contributions-cache.json";

type GitHubContributionsResponse = {
  contributions: Activity[];
};

export async function getGitHubContributions(): Promise<Activity[]> {
  try {
    const res = await fetch(
      `https://github-contributions-api.jogruber.de/v4/${GITHUB_USERNAME}?y=last`,
      {
        next: { revalidate: 86400 }, // Cache for 1 day
      }
    );
    if (!res.ok) {
      return fallbackContributions as Activity[];
    }
    const data = (await res.json()) as GitHubContributionsResponse;
    if (Array.isArray(data?.contributions) && data.contributions.length > 0) {
      return data.contributions;
    }
    return fallbackContributions as Activity[];
  } catch {
    return fallbackContributions as Activity[];
  }
}
