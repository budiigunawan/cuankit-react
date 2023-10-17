import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

const baseUrl = import.meta.env.VITE_APP_BASEURL;

export const useGetAllCategories = () => {
  return useQuery(['allCategories'], async () => {
    const res = await axios({
      method: 'GET',
      url: `${baseUrl}/api/categories`,
    });

    return res.data.data;
  });
};

type GetDetailCategoryProps = {
  id?: string;
};

export const useGetDetailCategory = ({ id }: GetDetailCategoryProps) => {
  return useQuery(['detailCategory', id], async () => {
    const res = await axios({
      method: 'GET',
      url: `${baseUrl}/api/categories`,
      params: { id },
    });

    return res.data;
  });
};
