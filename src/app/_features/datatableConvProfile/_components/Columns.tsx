import { ColumnDef } from '@tanstack/react-table';
import { Conversation } from '../schemas/Conversation';
import { Button } from '@/components/ui/button';
import { ArrowUpDown, MoreHorizontal, X } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

export const columns: ColumnDef<Conversation>[] = [
  {
    accessorKey: 'suspect',
    header: 'Suspect',
    cell: ({ row }) => (
      <div className='capitalize'>{row.getValue('suspect')}</div>
    ),
  },
  {
    accessorKey: 'numberOfMessages',
    header: ({ column }) => {
      return (
        <Button
          variant='ghost'
          onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
        >
          Number of Messages
          <ArrowUpDown className='ml-2 h-4 w-4' />
        </Button>
      );
    },
    cell: ({ row }) => (
      <div className='capitalize'>{row.getValue('numberOfMessages')}</div>
    ),
  },
  {
    id: 'actions',
    enableHiding: false,
    cell: ({ row }) => {
      const Suspect = row.original;

      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant='ghost' className='h-8 w-8 p-0'>
              <span className='sr-only'>Open menu</span>
              <MoreHorizontal />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align='end'>
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuItem className='text-red-600 hover:text-white hover:bg-red-600 focus:bg-red-600 focus:text-white font-semibold'>
              Signal
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];
