import { BtnContainer } from './LoadMore.styled';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

const LoadMore = ({ loadMore, onPageChange }) => {
  return (
    <BtnContainer>
      <Stack spacing={2}>
        <Pagination
          count={10}
          color="primary"
          size="large"
          onChange={onPageChange}
        />
      </Stack>
    </BtnContainer>
  );
};

export default LoadMore;
