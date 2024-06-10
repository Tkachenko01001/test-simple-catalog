import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

type Props = {
    totalPages: number
    setCurrentPage: (page: number) => void
}

const PaginationRounded: React.FC<Props> = ({ totalPages, setCurrentPage }) => {

    const handleChange = (e: React.ChangeEvent<unknown>, page: number) => setCurrentPage(page)
    
    return (
        <Stack spacing={2} mt={10}>
            <Pagination count={totalPages} shape="rounded" onChange={handleChange} />
        </Stack>
    )
}

export default PaginationRounded