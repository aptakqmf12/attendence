import { useState, useEffect } from 'react';
import axios, { AxiosResponse } from 'axios';

export default function AxiosInterceptor() {
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const accessToken = localStorage.getItem('access_token');

    if (!accessToken) {
      return;
    }

    axios.interceptors.request.use(
      (config) => {
        setLoading(true);

        // if (!config.url?.endsWith('/login')) {
        //   config.headers.Authorization = 'Bearer ' + accessToken;
        // }

        return config;
      },
      // (error: AxiosError) => {
      //   setLoading(false);
      // },
    );

    axios.interceptors.response.use(
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
