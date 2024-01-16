import { WEB_STORE, ENDPOINTS } from './api';

export async function getProfileData(cb?: Function): Promise<UserType> {
  try {
    const res = await WEB_STORE.get(ENDPOINTS.user.profile);
    if (cb) cb();
    return res.data;
  } catch (error) {
    throw error;
  }
}
