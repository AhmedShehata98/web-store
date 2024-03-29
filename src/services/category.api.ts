import { ENDPOINTS, WEB_STORE } from './api';

export async function getAllCategories({
  limit,
  page,
}: {
  limit: number;
  page: number;
}): Promise<CategoriesResponseType> {
  try {
    const { data } = await WEB_STORE({
      url: ENDPOINTS.categories.all,
      params: { limit, page },
    });
    return data;
  } catch (error) {
    throw error;
  }
}

export async function getCategoryById(id: string | undefined): Promise<ICategory> {
  try {
    const { data } = await WEB_STORE({
      url: `${ENDPOINTS.categories.root}/${id}`,
    });
    return data;
  } catch (error) {
    throw error;
  }
}
