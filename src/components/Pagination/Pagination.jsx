import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import { useSearchParams } from 'react-router-dom';

const PaginationRounded = ({ totalPages, handleChangePage }) => {
  const [searchParams] = useSearchParams();
  const page = Number(searchParams.get('page')) || 1;

  return (
    <Stack spacing={2} alignItems="center">
      <Pagination
        count={totalPages}
        variant="outlined"
        shape="rounded"
        onChange={handleChangePage}
        color="primary"
        page={page}
      />
    </Stack>
  );
};

export default PaginationRounded;
