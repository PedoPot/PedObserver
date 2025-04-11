'use client';

import * as React from 'react';
import { useRouter } from 'next/navigation';
import {
  ColumnFiltersState,
  SortingState,
  VisibilityState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from '@tanstack/react-table';
import { Table, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { data } from './data/Conversations';
import Pagination from './_components/Pagination';
import Filters from './_components/Filters';
import TableResults from './_components/TableResults';
import { columns } from './_components/Columns';
import { ScrollArea } from '@radix-ui/react-scroll-area';
import { Avatar, AvatarFallback } from '@radix-ui/react-avatar';
import { Card, CardContent } from '@/components/ui/card';

export function DatatableConvProfile() {
  const [sorting, setSorting] = React.useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
    []
  );
  const [columnVisibility, setColumnVisibility] =
    React.useState<VisibilityState>({});
  const [rowSelection, setRowSelection] = React.useState({});
  const [messages, setMessages] = React.useState<any[]>([]); // <- maintenant dynamique

  const table = useReactTable({
    data,
    columns,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,
    state: {
      sorting,
      columnFilters,
      columnVisibility,
      rowSelection,
    },
  });

  const router = useRouter();

  return (
    <div className='flex flex-row w-full justify-between gap-8'>
      <div className='w-full'>
        <Filters table={table} />
        <div className='rounded-md border'>
          <Table>
            <TableHeader>
              {table.getHeaderGroups().map((headerGroup) => (
                <TableRow key={headerGroup.id}>
                  {headerGroup.headers.map((header) => (
                    <TableHead key={header.id}>
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                    </TableHead>
                  ))}
                </TableRow>
              ))}
            </TableHeader>
            <TableResults
              table={table}
              columns={columns}
              onConversationClick={(conversation) =>
                setMessages(conversation.messages || [])
              }
            />
          </Table>
        </div>
        <Pagination table={table} />
      </div>

      <div className='flex flex-col h-[500px] w-full max-w-md mx-auto border rounded-2xl shadow-lg mt-8'>
        <ScrollArea className='flex-1 p-4 space-y-4 overflow-y-auto'>
          {messages.length === 0 ? (
            <p className='text-center text-sm text-muted-foreground italic'>
              Cliquez sur une conversation pour l'afficher.
            </p>
          ) : (
            messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex items-start gap-2 ${
                  msg.user === 'user' ? 'justify-end' : 'justify-start'
                }`}
              >
                {msg.user !== 'user' && (
                  <Avatar>
                    <AvatarFallback>OB</AvatarFallback>
                  </Avatar>
                )}
                <Card
                  className={`max-w-xs ${
                    msg.user === 'user' ? 'bg-blue-100' : 'bg-muted'
                  }`}
                >
                  <CardContent className='text-sm'>{msg.content}</CardContent>
                </Card>
                {msg.user === 'user' && (
                  <Avatar>
                    <AvatarFallback>ME</AvatarFallback>
                  </Avatar>
                )}
              </div>
            ))
          )}
        </ScrollArea>
      </div>
    </div>
  );
}
