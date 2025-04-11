import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className='bg-gray-800 text-white p-4 flex justify-between items-center'>
      <div className='flex items-center space-x-2'>
        <img
          src='/images/Epstein.jpg'
          alt='Logo'
          className='w-10 h-10 rounded-full'
        />
        <Link href='/suspects' className='text-xl font-bold'>
          PedObserver
        </Link>
      </div>

      <div className='space-x-4'>
        <Link href='/suspects' className='hover:underline'>
          Suspects
        </Link>
        <Link href='/profiles' className='hover:underline'>
          Profiles
        </Link>
        <Link href='/create-profile' className='hover:underline'>
          Profile creation
        </Link>
      </div>
    </nav>
  );
}
