import Image from 'next/image';
import { DataTable } from '../_features/datable/datatable';

export default function Home() {
  return (
    <div className='py-8 px-24 flex items-center justify-center'>
      <DataTable />
    </div>
  );
}
