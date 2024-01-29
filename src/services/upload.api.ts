import { ENDPOINTS, WEB_STORE } from './api';

export async function uploadImage(image: FormData): Promise<UploadResponse> {
  try {
    const { data } = await WEB_STORE({
      method: 'POST',
      url: ENDPOINTS.upload.images,
      data: image,
    });
    return data;
  } catch (error) {
    throw error;
  }
}
