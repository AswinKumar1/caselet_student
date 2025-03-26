import React from 'react';
import { useParams } from 'react-router-dom';
import MainLayout from '../../layouts/main-layout';

const CaseletResults = () => {
  const { id } = useParams();
  
  return (
    <MainLayout userType="student">
      <div className="p-6">
        <h1 className="text-3xl font-bold">Caselet Results</h1>
        <p className="mt-2 text-gray-600">Results for caselet ID: {id}</p>
      </div>
    </MainLayout>
  );
};

export default CaseletResults;