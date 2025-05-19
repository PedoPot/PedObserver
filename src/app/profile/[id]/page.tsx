import { ManualProfileModify } from '@/app/_features/form/_components/ManualProfileModifyForm';

export default function Home({ params: { id } }: { params: { id: string } }) {
  return <ManualProfileModify  id={id} />;
}
