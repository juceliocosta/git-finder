import axios from 'axios';

const apiRepo = axios.create({
  baseURL: 'https://api.github.com/users/'
});

export const getUserData = async (username) => {
  const { data } = await apiRepo.get(`${username}`);
  if (data.id) return data;
}

export const getUserRepos = async (username) => {
  const  { data }  = await apiRepo.get(`${username}/repos`);
  if (data?.length > 0) return data;
}