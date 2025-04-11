import { DatatableConvProfile } from '@/app/_features/datatableConvProfile/datatableConvProfile';
export default function ConversationsSuspect({
  params,
}: {
  params: { id: string };
}) {
  return (
    <>
      {/* <h1> Conversations du suspect {params.id}</h1> */}
      <div className='py-8 px-24 flex items-center justify-center'>
        <DatatableConvProfile />
      </div>{' '}
    </>
  );
}
