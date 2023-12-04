import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

const PaginationRounded = ({ totalPages, handleChangePage }) => {
  return (
    <Stack spacing={2} alignItems="center">
      <Pagination
        count={totalPages}
        variant="outlined"
        shape="rounded"
        onChange={handleChangePage}
      />
    </Stack>
  );
};

export default PaginationRounded;
