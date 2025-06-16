
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import DashboardComponent from '@/components/Dashboard';

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <DashboardComponent />
      <Footer />
    </div>
  );
};

export default Dashboard;
