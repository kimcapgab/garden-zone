import apiUrls from "./apiConfig";

export const signUp = async (credentials) => {
  
  try {
    const res = await apiUrls.post("/user/signup/", credentials);
    localStorage.setItem("token", res.data.access);
    localStorage.setItem("refresh", res.data.refresh);
    console.log(res);
    return res;
  } catch (error) {
    throw error;
  }
};




export const logIn = async (credentials) => {
  try {
    const res = await apiUrls.post("/api/token/", credentials);
    localStorage.setItem("token", res.data.access);
    localStorage.setItem("refresh", res.data.refresh);
    console.log(res);
    return res;
  } catch (error) {
    throw error;
  }
};

export const logOut = async () => {
  try {
    localStorage.removeItem("token");
    localStorage.removeItem("refresh");
    return true;
  } catch (error) {
    throw error;
  }
};

export const verifyUser = async () => {
  const refresh = localStorage.getItem("refresh");
  if (refresh) {
    const res = await apiUrls.post("/api/token/refresh/", { refresh });
    localStorage.setItem("token", res.data.access);
    console.log(res);
    return res;
  }
  return false;
};