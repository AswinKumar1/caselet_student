import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

// Student Pages
import StudentDashboard from './pages/student/dashboard';
import Caselets from './pages/student/caselets';
import CaseletDetail from './pages/student/caselet-detail';
import CaseletResults from './pages/student/caselet-results';

// Instructor Pages
import InstructorDashboard from './pages/instructor/dashboard';
import Students from './pages/instructor/students';
import StudentDetail from './pages/instructor/student-detail';

function App() {
  return (
    <Router>
      <Routes>
        {/* Student Routes */}
        <Route path="/" element={<StudentDashboard />} />
        <Route path="/caselets" element={<Caselets />} />
        <Route path="/caselet/:id" element={<CaseletDetail />} />
        <Route path="/caselet/:id/results" element={<CaseletResults />} />
        <Route path="/skills" element={<StudentDashboard />} />
        <Route path="/ai-tutor" element={<StudentDashboard />} />
        
        {/* Instructor Routes */}
        <Route path="/instructor" element={<InstructorDashboard />} />
        <Route path="/instructor/students" element={<Students />} />
        <Route path="/instructor/student-detail/:id" element={<StudentDetail />} />
        <Route path="/instructor/caselets" element={<InstructorDashboard />} />
        <Route path="/instructor/analytics" element={<InstructorDashboard />} />
        
        {/* Settings */}
        <Route path="/settings" element={<StudentDashboard />} />
        
        {/* Fallback */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
}

export default App;