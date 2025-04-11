import { TableBody, TableCell, TableRow } from "@/components/ui/table";
import { Conversation } from "../schemas/Conversation";
import { ColumnDef, flexRender, Table } from "@tanstack/react-table";

type TableResultsProps = {
  table: Table<Conversation>;
  columns: ColumnDef<Conversation>[];
  onConversationClick: (conversation: Conversation) => void;
};

export default function TableResults({
  table,
  columns,
  onConversationClick,
}: TableResultsProps) {
  return (
    <TableBody>
      {table.getRowModel().rows?.length ? (
        table.getRowModel().rows.map((row) => (
          <TableRow
            key={row.id}
            data-state={row.getIsSelected() && 'selected'}
            onClick={() => onConversationClick(row.original)}
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
