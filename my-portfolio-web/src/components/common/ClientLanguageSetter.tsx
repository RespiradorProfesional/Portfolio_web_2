'use client'

import { useEffect } from 'react';
import { setLanguageCode } from '@/src/utils/languageStore';

export default function ClientLanguageSetter({ params }: { params: { locale: string } } ) {
  useEffect(() => {
    setLanguageCode(params.locale);
  }, [params.locale]);

  return null;
}