import { ColumnDef, Table, flexRender } from '@tanstack/react-table';
import { Profil } from '../schemas/Profil';
import { TableBody, TableCell, TableRow } from '@/components/ui/table';
import { AppRouterInstance } from 'next/dist/shared/lib/app-router-context.shared-runtime';
type TableResultsProps = {
  table: Table<Profil>;
  router: AppRouterInstance;
  columns: ColumnDef<Profil>[];
};
export default function TableResults({
  table,
  router,
  columns,
}: TableResultsProps) {
  return (
    <TableBody>
      {table.getRowModel().rows?.length ? (
        table.getRowModel().rows.map((row) => (
          <TableRow
            key={row.id}
            data-state={row.getIsSelected() && 'selected'}
            onClick={() => router.push(`/profile/${row.original.id}`)}
            className='cursor-pointer hover:bg-muted transition'
          >
            {row.getVisibleCells().map((cell) => (
              <TableCell key={cell.id}>
                {flexRender(cell.column.columnDef.cell, cell.getContext())}
              </TableCell>
            ))}
          </TableRow>
        ))
      ) : (
        <TableRow>
          <TableCell colSpan={columns.length} className='h-24 text-center'>
            No results.
          </TableCell>
        </TableRow>
      )}
    </TableBody>
  );
}
