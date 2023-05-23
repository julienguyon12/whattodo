import React from 'react';
import axios from 'axios';
import { useQuery } from 'react-query';

const useFetch = (url) => {
  const { data, refetch, isError, isLoading } = useQuery(['activity'], () => {
    return axios.get(url).then((res) => res.data);
  });
  return { data, refetch, isError, isLoading };
};

export default useFetch;
