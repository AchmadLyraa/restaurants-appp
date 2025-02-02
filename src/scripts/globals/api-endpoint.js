import CONFIG from './config';

const API_ENDPOINT = {
  ALL_LIST: `${CONFIG.BASE_URL}/list`,
  DETAIL: (id) => `${CONFIG.BASE_URL}/detail/${id}`,
  IMAGE_MEDIUM: (id) => `${CONFIG.IMAGE_MEDIUM}/${id}`,
  IMAGE_SMALL: (id) => `${CONFIG.IMAGE_SMALL}/${id}`,
};

export default API_ENDPOINT;
