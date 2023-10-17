import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

const baseUrl = import.meta.env.VITE_APP_BASEURL;

type GetUserProps = {
  tokenType: string;
  accessToken: string;
};

export const useGetDetailUser = ({ tokenType, accessToken }: GetUserProps) => {
  return useQuery(
    ['detailUser', tokenType, accessToken],
    async () => {
      const res = await axios.get(`${baseUrl}/api/user`, {
        headers: {
          Authorization: `${tokenType} ${accessToken}`,
        },
      });

      return res.data.data;
    },
    {
      enabled: !!tokenType && !!accessToken,
    }
  );
};
