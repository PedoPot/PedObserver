import { DatatableProfiles } from '../_features/datatableProfiles/datatable';

export default function Profiles() {
  return (
    <>
      {/* <h1> Conversations du suspect {params.id}</h1> */}
      <div className='py-8 px-24 flex items-center justify-center'>
        <DatatableProfiles />
      </div>{' '}
    </>
  );
}
