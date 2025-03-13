import React from 'react';
import { Brain, Award, TrendingUp } from 'lucide-react';

interface StudentCardProps {
  student: {
    id: string;
    name: string;
    email: string;
    avatar: string;
    overallScore: number;
    completionRate: number;
    topSkills: string[];
    status: string;
    isActive: boolean;
  };
}

const StudentCard: React.FC<StudentCardProps> = ({ student }) => {
  return (
    <div className="bg-white rounded-xl shadow-sm overflow-hidden border border-gray-100 hover:shadow-md transition-all duration-300 transform hover:-translate-y-1">
      <div className="p-6">
        <div className="flex items-center space-x-4">
          <div className="relative flex-shrink-0">
            <img
              src={student.avatar}
              alt={student.name}
              className="h-16 w-16 rounded-full object-cover border-2 border-white shadow-sm"
            />
            <span 
              className={`absolute bottom-0 right-0 h-3.5 w-3.5 rounded-full border-2 border-white ${
                student.isActive ? 'bg-green-500' : 'bg-gray-300'
              }`}
            ></span>
          </div>
          <div className="flex-1 min-w-0">
            <h3 className="text-lg font-semibold text-gray-900 truncate">{student.name}</h3>
            <p className="text-sm text-gray-500 truncate">{student.email}</p>
            <div className="flex items-center mt-1">
              <span 
                className={`inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium ${
                  student.status === 'Active' ? 'bg-green-100 text-green-800' : 
                  student.status === 'At Risk' ? 'bg-red-100 text-red-800' : 
                  'bg-yellow-100 text-yellow-800'
                }`}
              >
                {student.status}
              </span>
            </div>
          </div>
        </div>

        <div className="mt-6 space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center text-sm text-gray-500">
              <Award className="h-4 w-4 mr-1 text-blue-500" />
              <span>Overall Score</span>
            </div>
            <div className="flex items-center">
              <div className="w-24 bg-gray-200 rounded-full h-2 mr-2">
                <div 
                  className={`h-2 rounded-full ${
                    student.overallScore >= 80 ? 'bg-gradient-to-r from-green-400 to-green-500' : 
                    student.overallScore >= 60 ? 'bg-gradient-to-r from-blue-400 to-blue-500' : 
                    'bg-gradient-to-r from-red-400 to-red-500'
                  }`}
                  style={{ width: `${student.overallScore}%` }}
                ></div>
              </div>
              <span className="text-sm font-medium text-gray-900">{student.overallScore}%</span>
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center text-sm text-gray-500">
              <TrendingUp className="h-4 w-4 mr-1 text-green-500" />
              <span>Completion</span>
            </div>
            <div className="flex items-center">
              <div className="w-24 bg-gray-200 rounded-full h-2 mr-2">
                <div 
                  className="bg-gradient-to-r from-blue-400 to-indigo-500 h-2 rounded-full"
                  style={{ width: `${student.completionRate}%` }}
                ></div>
              </div>
              <span className="text-sm font-medium text-gray-900">{student.completionRate}%</span>
            </div>
          </div>
        </div>

        <div className="mt-6">
          <div className="flex items-center justify-between mb-2">
            <h4 className="text-sm font-medium text-gray-500">Top Skills</h4>
          </div>
          <div className="flex flex-wrap gap-1.5">
            {student.topSkills.slice(0, 3).map((skill, index) => (
              <span 
                key={index} 
                className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800"
              >
                <Brain className="h-3 w-3 mr-1" />
                {skill}
              </span>
            ))}
            {student.topSkills.length > 3 && (
              <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                +{student.topSkills.length - 3}
              </span>
            )}
          </div>
        </div>
      </div>
      <div className="px-6 py-3 bg-gray-50 border-t border-gray-100 flex justify-between">
        <a 
          href={`/instructor/student-detail/${student.id}`}
          className="text-sm font-medium text-blue-600 hover:text-blue-800"
        >
          View Profile
        </a>
        <button className="text-sm font-medium text-gray-600 hover:text-gray-800">
          Assign Caselets
        </button>
      </div>
    </div>
  );
};

export default StudentCard;