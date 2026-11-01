export type GoogleReview = {
  name: string;
  timeAgo: string;
  text: string;
  rating: number;
};

export type GoogleReviewsData = {
  rating: number;
  reviewCount: number;
  reviews: GoogleReview[];
};

const PLACES_ENDPOINT = "https://places.googleapis.com/v1/places";
const REVALIDATE_SECONDS = 60 * 60 * 24; // once a day

export async function getGoogleReviews(): Promise<GoogleReviewsData | null> {
  const apiKey = process.env.GOOGLE_PLACES_API_KEY;
  const placeId = process.env.GOOGLE_PLACE_ID;

  if (!apiKey || !placeId) return null;

  try {
    const res = await fetch(`${PLACES_ENDPOINT}/${placeId}`, {
      headers: {
        "X-Goog-Api-Key": apiKey,
        "X-Goog-FieldMask": "rating,userRatingCount,reviews",
      },
      next: { revalidate: REVALIDATE_SECONDS },
    });

    if (!res.ok) {
      console.error("Google Places API error:", res.status, await res.text());
      return null;
    }

    const data: {
      rating?: number;
      userRatingCount?: number;
      reviews?: Array<{
        authorAttribution?: { displayName?: string };
        relativePublishTimeDescription?: string;
        text?: { text?: string };
        rating?: number;
      }>;
    } = await res.json();

    const reviews: GoogleReview[] = (data.reviews ?? []).map((r) => ({
      name: r.authorAttribution?.displayName ?? "Google user",
      timeAgo: r.relativePublishTimeDescription ?? "",
      text: r.text?.text ?? "",
      rating: r.rating ?? 5,
    }));

    return {
      rating: data.rating ?? 5,
      reviewCount: data.userRatingCount ?? 0,
      reviews,
    };
  } catch (error) {
    console.error("Failed to fetch Google reviews:", error);
    return null;
  }
}
