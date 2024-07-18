import API from "../utils/interceptor";

// export const signupWithEmail = async (payload) =>
//   await API.post(`signup`, payload);

// export const loginWithEmail = async (payload) =>
//   await API.post(`login`, payload);

// export const socialSignUp = async (payload) =>
//   await API.post(`socialSignup`, payload);

export const getProducts = async (payload) => 
    await API.get(`products`, payload);