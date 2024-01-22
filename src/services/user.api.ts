import { WEB_STORE, ENDPOINTS } from './api';

export async function getProfileData(): Promise<UserType> {
  try {
    const res = await WEB_STORE.get(ENDPOINTS.user.profile);
    return res.data;
  } catch (error) {
    throw error;
  }
}
