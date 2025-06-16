
import React from 'react';
import { useSEO } from '@/hooks/useSEO';

interface PageSEOProps {
  title: string;
  description: string;
  keywords?: string;
  image?: string;
  type?: 'website' | 'article';
}

const PageSEO = ({ title, description, keywords, image, type = 'website' }: PageSEOProps) => {
  const currentUrl = typeof window !== 'undefined' ? window.location.href : '';
  
  useSEO({
    title,
    description,
    keywords,
    image,
    url: currentUrl,
    type
  });

  return null;
};

export default PageSEO;
