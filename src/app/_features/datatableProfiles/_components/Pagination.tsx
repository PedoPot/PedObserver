import { Table } from '@tanstack/react-table';
import { Profil } from '../schemas/Profil';
import { Button } from '@/components/ui/button';

type PaginationProps = {
  table: Table<Profil>;
};

export default function Pagination({ table }: PaginationProps) {
  return (
    <div className='flex items-center justify-center space-x-2 py-4'>
        <Button
          variant='outline'
          size='sm'
          onClick={() => table.previousPage()}
          disabled={!table.getCanPreviousPage()}
        >
          Previous
        </Button>
        <p>
          {table.getState().pagination.pageIndex + 1} / {table.getPageCount()}
        </p>
        <Button
          variant='outline'
          size='sm'
          onClick={() => table.nextPage()}
          disabled={!table.getCanNextPage()}
        >
          Next
        </Button>
    </div>
  );
}
