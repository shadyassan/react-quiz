import axios from 'axios';
import { handleResponse, handleError } from './apiUtils';

export function fetchQuizById(id) {
  return axios.get(`/data/${id}.json`).then(handleResponse).catch(handleError);
}
