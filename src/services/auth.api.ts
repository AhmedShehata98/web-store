import { WEB_STORE, ENDPOINTS } from './api';

export async function login(loginData: { email: string; password: string }) {
  try {
    const res = await WEB_STORE({
      method: 'POST',
      data: loginData,
      url: ENDPOINTS.auth.login,
    });
    return res.data;
  } catch (error: any) {
    console.log(error);
    throw error.response.data;
  }
}

export async function signup(signupFormData: SignupFormType) {
  try {
    const res = await WEB_STORE({
      method: 'POST',
      url: ENDPOINTS.auth.signup,
      data: signupFormData,
    });
    return res.data;
  } catch (error: any) {
    throw error;
  }
}

export async function requestResetPassword(email: string) {
  try {
    const res = await WEB_STORE({
      method: 'POST',
      url: ENDPOINTS.auth.requestResetPassword,
      data: { email },
    });
    return res.data;
  } catch (error: any) {
    throw error.response;
  }
}

export async function resetPassword(resetPassData: { otpCode: string; newPassword: string }) {
  try {
    const res = await WEB_STORE({
      method: 'POST',
      url: ENDPOINTS.auth.resetPassword,
      data: resetPassData,
    });
    return res.data;
  } catch (error: any) {
    throw error.response;
  }
}

export async function logout() {
  try {
    const res = await WEB_STORE({
      method: 'GET',
      url: ENDPOINTS.auth.logout,
    });
    return res.data;
  } catch (error) {
    throw error;
  }
}
