'use client';

import { useEffect, useState } from 'react';

import { usePathname } from 'next/navigation';

const useNavigation = () => {
  const pathname = usePathname();
  const [isHomeActive, setIsHomeActive] = useState(false);
  const [isGaleriActive, setIsGaleriActive] = useState(false);
  const [isNotificationsActive, setIsNotificationsActive] = useState(false);


  useEffect(() => {
    setIsHomeActive(false);
    setIsGaleriActive(false);
    setIsNotificationsActive(false);

    switch (pathname) {
      case '/':
        setIsHomeActive(true);
        break;
      case '/explore':
        setIsGaleriActive(true);
        break;
      case '/notifications':
        setIsNotificationsActive(true);
        break;
      default:
        // Handle any other cases here
        break;
    }
  }, [pathname]);

  return {
    isHomeActive,
    isGaleriActive,
    isNotificationsActive,
  };
};

export default useNavigation;