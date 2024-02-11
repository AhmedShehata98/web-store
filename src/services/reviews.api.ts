import { ENDPOINTS, WEB_STORE } from './api';

export async function getRecentReviews(itemId: string): Promise<ReviewType> {
  try {
    const review = await WEB_STORE({
      url: `${ENDPOINTS.reviews.recent}/${itemId}`,
    });
    return review.data;
  } catch (error) {
    throw error;
  }
}

export async function addNewReview({
  itemId,
  reviewForm,
}: {
  itemId: string;
  reviewForm: ReviewFormType;
}): Promise<ReviewType> {
  try {
    const review = await WEB_STORE({
      method: 'POST',
      url: `${ENDPOINTS.reviews.root}/${itemId}`,
      data: reviewForm,
    });
    return review.data;
  } catch (error) {
    throw error;
  }
}

export async function getAllReviews({
  applicationId,
  limit = 10,
  page,
}: {
  applicationId: string;
  limit: number;
  page: number;
}): Promise<ReviewsResponseType> {
  try {
    const reviews = await WEB_STORE({
      url: `${ENDPOINTS.reviews.all}/${applicationId}`,
      params: { limit, page },
    });
    return reviews.data;
  } catch (error) {
    throw error;
  }
}

export async function deleteReview(reviewId: string) {
  try {
    const review = await WEB_STORE({
      method: 'DELETE',
      url: `${ENDPOINTS.reviews.root}/${reviewId}`,
    });
    return review.data;
  } catch (error) {
    throw error;
  }
}
