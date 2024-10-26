import axios from 'axios';
import {endPoints} from 'constants/path';

export const fetchDonations = async ({cursor, pageSize = 10, priorityIdolIds} = {}) => {
  const queryParams = new URLSearchParams({pageSize});
  if (cursor) queryParams.set('cursor', cursor);
  if (priorityIdolIds) queryParams.set('priorityIdolIds', priorityIdolIds);

  const response = await axios.get(endPoints.getDonations, {params: queryParams});
  return response.data;
};
