import { GenericAbortSignal } from 'axios';
import { ENDPOINTS, WEB_STORE } from './api';

export async function addNewApplication(appData: CreateAppFormType | FormData): Promise<IApplication> {
  try {
    const { data } = await WEB_STORE({
      method: 'POST',
      url: ENDPOINTS.application.root,
      data: appData,
    });
    return data;
  } catch (error) {
    throw error;
  }
}
export async function getAllApplications({
  limit,
  page,
  signal,
}: {
  limit: number;
  page: number;
  signal?: GenericAbortSignal | undefined;
}): Promise<ApplicationsResponseType> {
  try {
    const { data } = await WEB_STORE({
      url: ENDPOINTS.application.all,
      params: { limit, page },
      signal,
    });
    return data;
  } catch (error) {
    throw error;
  }
}
export async function getApplicationById(applicationId: string): Promise<IApplication> {
  try {
    const { data } = await WEB_STORE({
      url: `${ENDPOINTS.application.root}/${applicationId}`,
    });
    return data;
  } catch (error) {
    throw error;
  }
}
export async function removeApplication(applicationId: string): Promise<IApplication> {
  try {
    const { data } = await WEB_STORE({
      method: 'DELETE',
      url: `ENDPOINTS.application.all/${applicationId}`,
    });
    return data;
  } catch (error) {
    throw error;
  }
}
export async function updateApplication({
  applicationId,
  newAppData,
}: {
  applicationId: string;
  newAppData: Partial<CreateAppFormType>;
}): Promise<IApplication> {
  try {
    const { data } = await WEB_STORE({
      method: 'PUT',
      url: `ENDPOINTS.application.all/${applicationId}`,
      data: newAppData,
    });
    return data;
  } catch (error) {
    throw error;
  }
}
