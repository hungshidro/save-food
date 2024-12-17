import {AxiosService} from 'api/axiosServie';
import {endpoints} from 'api/enpoints';

export const exampleApi = {
  callApi: async () => {
    return AxiosService.get(endpoints.example);
  },
};
