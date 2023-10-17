import { useMutation } from '@tanstack/react-query';
import axios from 'axios';

const baseUrl = import.meta.env.VITE_APP_BASEURL;

type useRegisterProps = {
  data: {
    name: string;
    email: string;
    password: string;
  };
};

type useLoginProps = {
  data: {
    email: string;
    password: string;
  };
};

export const useRegister = () => {
  return useMutation(async ({ data }: useRegisterProps) => {
    const res = await axios.post(`${baseUrl}/api/register`, data);

    return res.data.data;
  });
};

export const useLogin = () => {
  return useMutation(async ({ data }: useLoginProps) => {
    const res = await axios.post(`${baseUrl}/api/login`, data);

    return res.data.data;
  });
};
