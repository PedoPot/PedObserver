'use client';

import * as React from 'react';
import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter();

  // Utiliser useEffect pour effectuer la redirection au chargement de la page
  React.useEffect(() => {
    // Redirection dès que la page est montée
    router.push('/suspects');
  }, [router]);

  return <></>;
}
