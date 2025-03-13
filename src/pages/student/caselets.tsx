import React from 'react';
import MainLayout from '../../layouts/main-layout';

const Caselets = () => {
  return (
    <MainLayout userType="student">
      <div className="p-6">
        <h1 className="text-3xl font-bold">Caselets</h1>
        <p className="mt-2 text-gray-600">Browse and complete caselets</p>
      </div>
    </MainLayout>
  );
};

export default Caselets;