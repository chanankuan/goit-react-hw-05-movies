import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import { theme } from 'assets/theme';
import { handleScroll } from 'helpers/scroll';
import { useSearchParams } from 'react-router-dom';

const PaginationRounded = ({ totalPages, handleChangePage }) => {
  const [searchParams] = useSearchParams();
  const page = Number(searchParams.get('page')) || 1;

  return (
    <Stack spacing={2} alignItems="center">
      <Pagination
        count={totalPages}
        onChange={handleChangePage}
        onClick={() => handleScroll('movieList')}
        color="primary"
        page={page}
        sx={{
          color: '#fff',
          '& .MuiPaginationItem-root': {
            color: '#fff',
            '&:hover': {
              backgroundColor: theme.palette.primary.main,
            },
          },
        }}
      />
    </Stack>
  );
};

export default PaginationRounded;
