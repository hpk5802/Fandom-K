import axios from 'axios';
import {endPoints} from 'constants/path';

export const fetchDonations = async ({cursor, pageSize = 10, priorityIdolIds} = {}) => {
  try {
    const queryParams = new URLSearchParams({pageSize});
    if (cursor) queryParams.set('cursor', cursor);
    if (priorityIdolIds) queryParams.set('priorityIdolIds', priorityIdolIds);

    const response = await axios.get(endPoints.getDonations, {params: queryParams});
    if (response.status === 200) return response.data;
    else throw new Error(`후원 데이터 불러오기 실패. 다시 시도해주세요`);
  } catch (e) {
    throw new Error(`후원 데이터 불러오기 실패. 다시 시도해주세요`);
  }
};

export const updateDonation = async ({id, amount} = {}) => {
  const response = await axios.put(`${endPoints.updateDonations}/${id}/contribute`, {amount: amount});
  if (response.status === 200) return response.data;
  else throw new Error(`데이터 업데이트 실패: ${response.status}`);
};
