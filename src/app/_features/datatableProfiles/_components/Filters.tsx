import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ChevronDown, Plus, X } from 'lucide-react';
import { FaInstagram } from 'react-icons/fa';
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Table } from '@tanstack/react-table';
import { Profil } from '../schemas/Profil';
import { AppRouterInstance } from 'next/dist/shared/lib/app-router-context.shared-runtime';
type FiltersProps = {
  table: Table<Profil>;
  router: AppRouterInstance;
};
export default function Filters({ table, router }: FiltersProps) {
  return (
    <div className='flex items-center py-4'>
      <Input
        placeholder='Filter username...'
        value={(table.getColumn('username')?.getFilterValue() as string) ?? ''}
        onChange={(event: any) =>
          table.getColumn('username')?.setFilterValue(event.target.value)
        }
        className='max-w-sm'
      />
      <Select
        onValueChange={(value: string) =>
          table.getColumn('connector')?.setFilterValue(value)
        }
      >
        <SelectTrigger className='w-[180px]'>
          <SelectValue placeholder='Select a connector' />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>Connectors</SelectLabel>
            <SelectItem value='x'>
              <X className='w-4 h-4 mr-2' />
            </SelectItem>
            <SelectItem value='instagram'>
              <FaInstagram className='w-4 h-4 mr-2' />
            </SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
      <Button
        onClick={() => router.push('/create-profile')}
        className='cursor-pointer'
        style={{ backgroundColor: 'grey', marginLeft: '2px' }}
      >
        <Plus className='mr-2' size={16} />
        Create Profile
      </Button>

      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant='outline' className='ml-auto'>
            Columns <ChevronDown />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align='end'>
          {table
            .getAllColumns()
            .filter((column) => column.getCanHide())
            .map((column) => {
              return (
                <DropdownMenuCheckboxItem
                  key={column.id}
                  className='capitalize'
                  checked={column.getIsVisible()}
                  onCheckedChange={(value) => column.toggleVisibility(!!value)}
                >
                  {column.id}
                </DropdownMenuCheckboxItem>
              );
            })}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
