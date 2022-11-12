import axios from 'axios';

export const instance = axios.create({
  withCredentials: true,
  headers: {"API-KEY": "367e63e1-9fd9-42b4-9056-9af4c7346df6"},
  baseURL: "https://social-network.samuraijs.com/api/1.0/"
});

export const profileApi = {
    getProfileData(userId) {
      instance.get(`profile/${userId}`)
    },
    getProfileStatus(userId) {
      instance.get(`profile/status/${userId}`);
    },
    putProfileStatus(userId) {
      instance.put(`profile/status/${userId}`);
    },
}