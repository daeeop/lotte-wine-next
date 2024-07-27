'use client';

import { useMedia } from 'react-use';

export default function useMobile() {
  const isMobile = useMedia('(max-width: 768px)');
  return { isMobile };
}
