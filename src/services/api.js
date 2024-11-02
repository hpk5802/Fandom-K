import axios from 'axios';
import {endPoints} from 'constants/path';

const getIdolData = async ({cursor, pageSize = 10, keyword = ''} = {}) => {
  try {
    const queryParams = new URLSearchParams({pageSize: pageSize});
    if (keyword) queryParams.set('keyword', keyword);
    if (cursor) queryParams.set('cursor', cursor);

    const response = await axios.get(endPoints.getIdols, {
      params: queryParams,
    });

    return response.data;
  } catch (error) {
    throw new Error('데이터 불러오기 실패');
  }
};

const getDonations = async ({cursor, pageSize = 10, priorityIdolIds} = {}) => {
  try {
    const queryParams = new URLSearchParams({pageSize: pageSize});
    if (cursor) queryParams.set('cursor', cursor);
    if (priorityIdolIds) queryParams.set('priorityIdolIds', priorityIdolIds);

    const response = await axios.get(endPoints.getDonations, {
      params: queryParams,
    });

    return response.data;
  } catch (error) {
    throw new Error('데이터 불러오기 실패');
  }
};

export {getIdolData, getDonations};
