
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CourseDetailPage from '@/components/CourseDetailPage';

const CourseDetail = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <CourseDetailPage />
      <Footer />
    </div>
  );
};

export default CourseDetail;
