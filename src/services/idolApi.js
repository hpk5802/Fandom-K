import axios from 'axios';
import {endPoints} from 'constants/path';

export const fetchIdols = async ({cursor, pageSize = 10, keyword = ''} = {}) => {
  const queryParams = new URLSearchParams({pageSize});
  if (keyword) queryParams.set('keyword', keyword);
  if (cursor) queryParams.set('cursor', cursor);

  const response = await axios.get(endPoints.getIdols, {params: queryParams});
  return response.data;
};

export const voteForIdol = async ({idolId}) => {
  const response = await axios.post(`${endPoints.getIdols}/votes`, {idolId: idolId});
  return response.data;
};
