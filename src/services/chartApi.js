import axios from 'axios';
import {endPoints} from 'constants/path';

export const fetchCharts = async ({gender, pageSize = 10} = {}) => {
  const queryParams = new URLSearchParams({gender, pageSize});

  const response = await axios(`${endPoints.getCharts}/${gender}`, {params: queryParams});
  return response.data;
};
