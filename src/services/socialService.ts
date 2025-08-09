// Service for retrieving social media metrics
// These functions return mock data now, but can be replaced with real API integrations.

export interface SocialMetrics {
  platform: string;
  followers: number;
  engagementRate: number;
  impressions: number;
}

/**
 * Fetch metrics for supported social media platforms.
 * Replace this implementation with API calls to Meta Marketing API,
 * Instagram Graph API, LinkedIn API, etc. when available.
 */
export async function getSocialMetrics(): Promise<SocialMetrics[]> {
  return [
    {
      platform: 'Instagram',
      followers: 4800,
      engagementRate: 0.073,
      impressions: 45200,
    },
    {
      platform: 'Facebook',
      followers: 23800,
      engagementRate: 0.058,
      impressions: 23800,
    },
    {
      platform: 'LinkedIn',
      followers: 16200,
      engagementRate: 0.067,
      impressions: 16200,
    },
  ];
}

/**
 * Example placeholder for retrieving recent posts.
 * You can extend this service to return lists of posts or stories with
 * engagement metrics. Replace with real API requests later on.
 */
export interface SocialPost {
  id: string;
  platform: string;
  title: string;
  publishedAt: string;
  likes: number;
  comments: number;
}

export async function getRecentPosts(): Promise<SocialPost[]> {
  return [
    {
      id: '1',
      platform: 'Instagram',
      title: 'Making waves in design',
      publishedAt: new Date().toISOString(),
      likes: 120,
      comments: 15,
    },
    {
      id: '2',
      platform: 'Facebook',
      title: 'Our latest campaign results',
      publishedAt: new Date().toISOString(),
      likes: 80,
      comments: 8,
    },
  ];
}
