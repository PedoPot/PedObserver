import { ColumnDef } from '@tanstack/react-table';
import { Profil } from '../schemas/Profil';
import { Button } from '@/components/ui/button';
import { ArrowUpDown, MoreHorizontal, X } from 'lucide-react';
import { FaInstagram } from 'react-icons/fa';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { useRouter } from 'next/navigation';

export const columns: ColumnDef<Profil>[] = [
  {
    accessorKey: 'username',
    header: 'Username',
    cell: ({ row }) => (
      <div className='capitalize'>{row.getValue('username')}</div>
    ),
  },
  {
    accessorKey: 'connector',
    header: ({ column }) => {
      return (
        <Button
          variant='ghost'
          onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
        >
          Connector
          <ArrowUpDown className='ml-2 h-4 w-4' />
        </Button>
      );
    },
    cell: ({ row }) => {
      const connector = row.getValue('connector') as string;

      console.log('connector:', connector); // Debug

      const renderIcon = () => {
        switch (connector.toLowerCase()) {
          case 'instagram':
            return <FaInstagram className='w-4 h-4 text-pink-500' />;
          case 'x':
            return <X className='w-4 h-4 text-black' />;
          default:
            return null;
        }
      };

      return (
        <div className='flex items-center gap-2 capitalize'>{renderIcon()}</div>
      );
    },
  },
  {
    accessorKey: 'numberOfConversations',
    header: ({ column }) => {
      return (
        <Button
          variant='ghost'
          onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
        >
          Number of Conversations
          <ArrowUpDown className='ml-2 h-4 w-4' />
        </Button>
      );
    },
    cell: ({ row }) => (
      <div className='capitalize'>{row.getValue('numberOfConversations')}</div>
    ),
  },
  {
    id: 'actions',
    enableHiding: false,
    cell: ({ row }) => {
      const router = useRouter(); // Utilisation du hook dans la cellule
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
            <DropdownMenuItem
              onClick={(e) => {
                e.stopPropagation();
                router.push(`/conversationsProfile/${row.original.id}`)
              }}
              className='cursor-pointer hover:bg-muted transition'
            >
              See Conversations
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];
