import React from 'react';
import { Brain, Award, BookOpen, TrendingUp, BarChart3, Calendar, ChevronRight, Clock } from 'lucide-react';
import { mockCaselets, mockLearningPath, mockRecommendations, mockActivityData } from '../../data/mock-data';
import MainLayout from '../../layouts/main-layout';

const StudentDashboard = () => {
  const upcomingCaselets = mockCaselets.slice(0, 3);
  const recentActivity = mockActivityData.slice(-5);
  const completedItems = mockLearningPath.filter(item => item.status === 'completed').length;
  const totalItems = mockLearningPath.length;
  const completionPercentage = Math.round((completedItems / totalItems) * 100);

  return (
    <MainLayout userType="student">
      <div className="p-6 space-y-8">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">
            Student Dashboard
          </h1>
          <div className="flex items-center space-x-2">
            <span className="text-sm text-gray-500">Last updated:</span>
            <span className="text-sm font-medium">Today at 10:30 AM</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <StatCard
            title="Overall Score"
            value="92%"
            icon={<Award className="h-6 w-6 text-blue-500" />}
            trend="+5% from last month"
            positive={true}
          />
          <StatCard
            title="Caselets Completed"
            value="8"
            icon={<BookOpen className="h-6 w-6 text-indigo-500" />}
            trend="+2 this week"
            positive={true}
          />
          <StatCard
            title="Learning Path"
            value={`${completionPercentage}%`}
            icon={<TrendingUp className="h-6 w-6 text-green-500" />}
            trend="On track"
            positive={null}
          />
          <StatCard
            title="Active Caselets"
            value="3"
            icon={<Calendar className="h-6 w-6 text-purple-500" />}
            trend="Due this week"
            positive={null}
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-semibold text-gray-800">Learning Path</h2>
                <div className="flex items-center text-sm text-gray-500">
                  <span className="font-medium text-blue-600">{completionPercentage}%</span>
                  <span className="mx-2">completed</span>
                </div>
              </div>
              <div className="relative">
                <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gray-200 z-0"></div>
                <div className="space-y-6 relative z-10">
                  {mockLearningPath.map((item, index) => (
                    <div key={index} className="flex items-start">
                      <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center ${
                        item.status === 'completed' ? 'bg-green-500' : 
                        item.status === 'in-progress' ? 'bg-blue-500' : 'bg-gray-300'
                      } text-white`}>
                        {item.status === 'completed' ? (
                          <CheckIcon />
                        ) : item.status === 'in-progress' ? (
                          index + 1
                        ) : (
                          <LockIcon />
                        )}
                      </div>
                      <div className="ml-4 flex-1">
                        <div className={`font-medium ${
                          item.status === 'locked' ? 'text-gray-400' : 'text-gray-900'
                        }`}>
                          {item.title}
                        </div>
                        <div className="mt-1 flex items-center">
                          {item.status === 'completed' && (
                            <>
                              <span className="text-sm text-green-600 font-medium">Completed</span>
                              <span className="mx-2 text-gray-300">•</span>
                              <span className="text-sm text-gray-500">Score: {item.score}%</span>
                            </>
                          )}
                          {item.status === 'in-progress' && (
                            <span className="text-sm text-blue-600 font-medium">In Progress</span>
                          )}
                          {item.status === 'locked' && (
                            <span className="text-sm text-gray-400">Locked</span>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-semibold text-gray-800">Upcoming Caselets</h2>
                <a href="/caselets" className="text-blue-600 hover:text-blue-800 text-sm font-medium">
                  View All
                </a>
              </div>
              <div className="space-y-4">
                {upcomingCaselets.map((caselet) => (
                  <div key={caselet.id} className="flex items-start p-3 hover:bg-gray-50 rounded-lg transition-colors">
                    <div className="flex-shrink-0 p-2 rounded-lg bg-blue-100 text-blue-600">
                      <caselet.icon className="h-6 w-6" />
                    </div>
                    <div className="ml-4 flex-1">
                      <div className="flex justify-between">
                        <h3 className="font-medium text-gray-900">{caselet.title}</h3>
                        <span className={`px-2 py-0.5 text-xs font-medium rounded-full ${
                          caselet.difficulty === 'Easy' ? 'bg-green-100 text-green-800' : 
                          caselet.difficulty === 'Medium' ? 'bg-yellow-100 text-yellow-800' : 
                          'bg-red-100 text-red-800'
                        }`}>
                          {caselet.difficulty}
                        </span>
                      </div>
                      <p className="text-sm text-gray-500 mt-1">{caselet.domain}</p>
                      <div className="mt-2 flex items-center justify-between">
                        <div className="flex items-center text-xs text-gray-500">
                          <Clock className="h-3 w-3 mr-1" />
                          <span>Est. {caselet.completionTime} min</span>
                        </div>
                        <a 
                          href={`/caselet/${caselet.id}`}
                          className="text-sm font-medium text-blue-600 hover:text-blue-800 flex items-center"
                        >
                          Start
                          <ChevronRight className="h-4 w-4 ml-1" />
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">AI Recommendations</h2>
              <div className="space-y-4">
                {mockRecommendations.map((rec) => (
                  <div key={rec.id} className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-4 border border-blue-100">
                    <div className="flex items-start space-x-3">
                      <div className="p-2 bg-blue-100 rounded-lg">
                        <Brain className="h-5 w-5 text-blue-600" />
                      </div>
                      <div>
                        <h3 className="font-medium text-gray-900">{rec.title}</h3>
                        <p className="text-xs text-gray-600 mt-1">
                          {rec.reason}
                        </p>
                        <div className="mt-2 flex items-center justify-between">
                          <div className="flex items-center text-xs">
                            <span className="text-gray-500">{rec.domain}</span>
                            <span className="mx-1 text-gray-300">•</span>
                            <span className={`${
                              rec.difficulty === 'Easy' ? 'text-green-600' : 
                              rec.difficulty === 'Medium' ? 'text-yellow-600' : 
                              'text-red-600'
                            }`}>
                              {rec.difficulty}
                            </span>
                          </div>
                          <a 
                            href={`/caselet/${rec.caseletId}`}
                            className="text-xs font-medium text-blue-600 hover:text-blue-800"
                          >
                            View Caselet
                          </a>
                        </div>
                        <div className="mt-2 flex items-center">
                          <div className="w-full bg-white rounded-full h-1.5 mr-2">
                            <div className="bg-gradient-to-r from-blue-500 to-indigo-600 h-1.5 rounded-full" style={{ width: `${rec.confidence}%` }}></div>
                          </div>
                          <span className="text-xs font-medium text-gray-700">{rec.confidence}% match</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">Activity</h2>
              <div className="grid grid-cols-7 gap-1">
                {[...Array(7)].map((_, weekIndex) => (
                  <div key={weekIndex} className="space-y-1">
                    {[...Array(7)].map((_, dayIndex) => {
                      const intensity = Math.floor(Math.random() * 5);
                      return (
                        <div 
                          key={dayIndex}
                          className={`w-full aspect-square rounded-sm ${
                            intensity === 0 ? 'bg-gray-100' :
                            intensity === 1 ? 'bg-blue-100' :
                            intensity === 2 ? 'bg-blue-200' :
                            intensity === 3 ? 'bg-blue-300' :
                            'bg-blue-400'
                          }`}
                          title={`${intensity} activities`}
                        ></div>
                      );
                    })}
                  </div>
                ))}
              </div>
              <div className="mt-3 flex items-center justify-between text-xs text-gray-500">
                <span>Less</span>
                <div className="flex space-x-1">
                  <div className="w-3 h-3 bg-gray-100 rounded-sm"></div>
                  <div className="w-3 h-3 bg-blue-100 rounded-sm"></div>
                  <div className="w-3 h-3 bg-blue-200 rounded-sm"></div>
                  <div className="w-3 h-3 bg-blue-300 rounded-sm"></div>
                  <div className="w-3 h-3 bg-blue-400 rounded-sm"></div>
                </div>
                <span>More</span>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">Recent Activity</h2>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-green-500 flex items-center justify-center text-white">
                    <CheckIcon />
                  </div>
                  <div>
                    <p className="text-sm text-gray-800">Completed "Customer Segmentation Analysis" caselet</p>
                    <p className="text-xs text-gray-500 mt-1">Today at 9:42 AM</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center text-white">
                    <BookOpen className="h-4 w-4" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-800">Started "Sales Forecasting Model" caselet</p>
                    <p className="text-xs text-gray-500 mt-1">Yesterday at 3:15 PM</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-purple-500 flex items-center justify-center text-white">
                    <Award className="h-4 w-4" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-800">Earned "Data Mining Expert" badge</p>
                    <p className="text-xs text-gray-500 mt-1">2 days ago</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

const StatCard = ({ title, value, icon, trend, positive }) => {
  return (
    <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100 hover:shadow-md transition-shadow">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-gray-500 text-sm font-medium">{title}</h3>
        <div className="p-2 rounded-lg bg-blue-50">{icon}</div>
      </div>
      <div className="flex items-end justify-between">
        <div>
          <p className="text-2xl font-bold text-gray-900">{value}</p>
          <p className={`text-xs font-medium flex items-center ${positive === true ? 'text-green-600' : positive === false ? 'text-red-600' : 'text-gray-500'}`}>
            {positive !== null && (
              <span className={`inline-block mr-1 ${positive ? 'text-green-600' : 'text-red-600'}`}>
                {positive ? '↑' : '↓'}
              </span>
            )}
            {trend}
          </p>
        </div>
      </div>
    </div>
  );
};

const CheckIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
  </svg>
);

const LockIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
  </svg>
);

export default StudentDashboard;