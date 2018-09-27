import axios from 'axios';

import { API_URL } from './constants';

const API = axios.create({
  baseURL: API_URL
});

const AUTH_ENDPOINT = '/auth';
const SIGNIN_ENDPOINT = `${AUTH_ENDPOINT}/signin`;
const SIGNUP_ENDPOINT = `${AUTH_ENDPOINT}/signup`;
const USER_ENDPOINT = '/user';

export default {
  getUserByToken: token => API.get(`${AUTH_ENDPOINT}/decode-token/${token}`),
  login: user => API.post(SIGNIN_ENDPOINT, user),
  signup: user => API.post(SIGNUP_ENDPOINT, user),

  getUserById: userId => API.get(`${USER_ENDPOINT}/${userId}`).then(response => response.data)
};
