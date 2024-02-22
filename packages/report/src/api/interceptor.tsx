import { useState, useEffect } from 'react';
import axios, { AxiosResponse } from 'axios';

export default function AxiosInterceptor() {
  const [loading, setLoading] = useState<boolean>(false);

  const client = axios.create({
    baseURL: '',
  });

  useEffect(() => {
    client.interceptors.request.use(
      (config) => {
        setLoading(true);

        if (!config.url?.endsWith('/login')) {
          const accessToken = 'Bearer ' + localStorage.getItem('access_token');
          config.headers.Authorization = accessToken;
        }

        return config;
      },
      // (error: AxiosError) => {
      //   setLoading(false);
      // },
    );

    client.interceptors.response.use(
      (config: AxiosResponse) => {
        setLoading(false);
        return config;
      },
      // (error: AxiosError) => {
      //   setLoading(false);
      // },
    );
  }, []);

  return loading ? <>...loading</> : <></>;
}
