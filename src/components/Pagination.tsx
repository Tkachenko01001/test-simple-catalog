'use client'

import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import { useRouter } from 'next/navigation';

type Props = {
  totalPages: number;
  currentPage: number;
};

const PaginationRounded: React.FC<Props> = ({ totalPages, currentPage }) => {
  const router = useRouter();

  const handlePageChange = (event: React.ChangeEvent<unknown>, page: number) => {
    const searchParams = new URLSearchParams(window.location.search);
    searchParams.set('page', page.toString());
    router.replace(`/?${searchParams.toString()}`);
  };

  return (
    <Stack spacing={2} mt={10}>
      <Pagination
        count={totalPages}
        shape="rounded"
        page={currentPage}
        onChange={handlePageChange}
      />
    </Stack>
  );
};

export default PaginationRounded;