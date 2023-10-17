import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

const baseUrl = import.meta.env.VITE_APP_BASEURL;

export const useGetAllProducts = () => {
  return useQuery(['allProducts'], async () => {
    const res = await axios({
      method: 'GET',
      url: `${baseUrl}/api/products`,
    });

    return res.data.data;
  });
};

type GetDetailProductProps = {
  id?: string;
};

export const useGetDetailProduct = ({ id }: GetDetailProductProps) => {
  return useQuery(
    ['detailProduct', id],
    async () => {
      const res = await axios({
        method: 'GET',
        url: `${baseUrl}/api/products`,
        params: { id },
      });

      return res.data;
    },
    {
      enabled: !!id,
    }
  );
};
