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
import { ChevronDown, X } from 'lucide-react';
import { FaInstagram } from 'react-icons/fa';
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Table } from '@tanstack/react-table';
import { Profil } from '../schemas/Profil';
type FiltersProps = {
  table: Table<Profil>;
};
export default function Filters({ table }: FiltersProps) {
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
