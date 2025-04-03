import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function Navbar() {
  return (
    <nav className='bg-gray-800 text-white p-4 flex justify-between items-center'>
      <div className='flex items-center space-x-2'>
        <img
          src='images/Epstein.jpg'
          alt='Logo'
          className='w-10 h-10 rounded-full'
        />
        <Link href='/' className='text-xl font-bold'>
          PedObserver
        </Link>
      </div>

      <div className='space-x-4'>
        <Link href='/conversation' className='hover:underline'>
          Prédateurs
        </Link>
        <Link href='/dashboard' className='hover:underline'>
          Profils
        </Link>
        <Link href='/create-profile' className='hover:underline'>
          Création de profil
        </Link>
      </div>

      <Button
        variant='outline'
        className='border-white text-white hover:bg-gray-700'
      >
        Se connecter
      </Button>
    </nav>
  );
}
