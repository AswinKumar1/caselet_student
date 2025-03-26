import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { 
  ArrowLeft, Brain, Award, BookOpen, CheckCircle, XCircle, 
  BarChart3, TrendingUp, Clock, AlertTriangle, Plus, Send, Search
} from 'lucide-react';
import { mockStudents, mockCaselets } from '../../data/mock-data';
import MainLayout from '../../layouts/main-layout';

const StudentDetailPage = () => {
  const { id } = useParams();
  const [activeTab, setActiveTab] = useState('overview');
  const [selectedCaselets, setSelectedCaselets] = useState([]);
  const [message, setMessage] = useState('');

  // Find student by ID (in a real app, you'd fetch this from an API)
  const student = mockStudents.find(s => s.id === id) || mockStudents[0];
  
  // Get completed and assigned caselets
  const completedCaselets = mockCaselets.filter(c => 
    student.completedCaselets.includes(c.id)
  );
  
  const assignedCaselets = mockCaselets.filter(c => 
    student.assignedCaselets.includes(c.id)
  );
  
  // Get available caselets (not completed or assigned)
  const availableCaselets = mockCaselets.filter(c => 
    !student.completedCaselets.includes(c.id) && 
    !student.assignedCaselets.includes(c.id)
  );

  // Toggle caselet selection
  const toggleCaseletSelection = (caseletId) => {
    if (selectedCaselets.includes(caseletId)) {
      setSelectedCaselets(selectedCaselets.filter(id => id !== caseletId));
    } else {
      setSelectedCaselets([...selectedCaselets, caseletId]);
    }
  };

  // Assign selected caselets
  const assignCaselets = () => {
    alert(`Assigned ${selectedCaselets.length} caselets to ${student.name}`);
    setSelectedCaselets([]);
  };

  // Send message
  const sendMessage = () => {
    if (message.trim()) {
      alert(`Message sent to ${student.name}: ${message}`);
      setMessage('');
    }
  };

  return (
    <MainLayout userType="instructor">
      <div className="p-6 space-y-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div className="flex items-center gap-3">
            <a href="/instructor/students" className="p-2 rounded-full hover:bg-gray-100">
              <ArrowLeft className="h-5 w-5 text-gray-500" />
            </a>
            <h1 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">
              Student Profile
            </h1>
          </div>
          <div className="flex gap-3">
            <button 
              className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors flex items-center justify-center gap-2"
              onClick={() => setMessage(`Hi ${student.name}, I wanted to check in on your progress...`)}
            >
              <Send className="h-4 w-4" />
              <span>Message</span>
            </button>
            <button 
              className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center gap-2"
              onClick={() => setActiveTab('assign')}
            >
              <Plus className="h-4 w-4" />
              <span>Assign Caselets</span>
            </button>
          </div>
        </div>

        {/* Student Profile */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left Column - Student Info */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
              <div className="flex flex-col items-center text-center mb-6">
                <div className="relative mb-4">
                  <img 
                    src={student.avatar} 
                    alt={student.name} 
                    className="w-24 h-24 rounded-full object-cover border-4 border-white shadow-md"
                  />
                  <span className={`absolute bottom-1 right-1 w-5 h-5 ${
                    student.status === 'Active' ? 'bg-green-500' : 
                    student.status === 'At Risk' ? 'bg-red-500' : 'bg-yellow-500'
                  } rounded-full border-2 border-white`}></span>
                </div>
                <h2 className="text-xl font-bold text-gray-900">{student.name}</h2>
                <p className="text-gray-500">{student.email}</p>
                <div className="mt-3 flex items-center justify-center">
                  <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                    student.status === 'Active' ? 'bg-green-100 text-green-800' : 
                    student.status === 'At Risk' ? 'bg-red-100 text-red-800' : 
                    'bg-yellow-100 text-yellow-800'
                  }`}>
                    {student.status === 'Active' ? (
                      <CheckCircle className="h-3 w-3 mr-1" />
                    ) : student.status === 'At Risk' ? (
                      <XCircle className="h-3 w-3 mr-1" />
                    ) : (
                      <AlertTriangle className="h-3 w-3 mr-1" />
                    )}
                    {student.status}
                  </span>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex justify-between items-center pb-3 border-b border-gray-100">
                  <span className="text-gray-500">Overall Score</span>
                  <span className="font-semibold text-gray-900">{student.overallScore}%</span>
                </div>
                <div className="flex justify-between items-center pb-3 border-b border-gray-100">
                  <span className="text-gray-500">Completion Rate</span>
                  <span className="font-semibold text-gray-900">{student.completionRate}%</span>
                </div>
                <div className="flex justify-between items-center pb-3 border-b border-gray-100">
                  <span className="text-gray-500">Caselets Completed</span>
                  <span className="font-semibold text-gray-900">{student.completedCaselets.length}</span>
                </div>
                <div className="flex justify-between items-center pb-3 border-b border-gray-100">
                  <span className="text-gray-500">Caselets Assigned</span>
                  <span className="font-semibold text-gray-900">{student.assignedCaselets.length}</span>
                </div>
                <div className="flex justify-between items-center pb-3 border-b border-gray-100">
                  <span className="text-gray-500">Last Active</span>
                  <span className="font-semibold text-gray-900">2 hours ago</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-500">Joined</span>
                  <span className="font-semibold text-gray-900">Mar 15, 2025</span>
                </div>
              </div>

              <div className="mt-6">
                <h3 className="text-sm font-medium text-gray-500 mb-3">Top Skills</h3>
                <div className="flex flex-wrap gap-2">
                  {student.topSkills.map((skill, index) => (
                    <span 
                      key={index} 
                      className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800"
                    >
                      <Brain className="h-3 w-3 mr-1" />
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-6">
                <h3 className="text-sm font-medium text-gray-500 mb-3">Send Message</h3>
                <div className="flex flex-col space-y-3">
                  <textarea
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none resize-none"
                    rows={3}
                    placeholder="Type your message here..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                  ></textarea>
                  <button 
                    className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center gap-2"
                    onClick={sendMessage}
                  >
                    <Send className="h-4 w-4" />
                    <span>Send Message</span>
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Tabs */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
              {/* Tabs */}
              <div className="flex border-b border-gray-200">
                <button
                  className={`px-6 py-3 text-sm font-medium ${
                    activeTab === 'overview' 
                      ? 'text-blue-600 border-b-2 border-blue-600' 
                      : 'text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  }`}
                  onClick={() => setActiveTab('overview')}
                >
                  Overview
                </button>
                <button
                  className={`px-6 py-3 text-sm font-medium ${
                    activeTab === 'skills' 
                      ? 'text-blue-600 border-b-2 border-blue-600' 
                      : 'text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  }`}
                  onClick={() => setActiveTab('skills')}
                >
                  Skills Matrix
                </button>
                <button
                  className={`px-6 py-3 text-sm font-medium ${
                    activeTab === 'caselets' 
                      ? 'text-blue-600 border-b-2 border-blue-600' 
                      : 'text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  }`}
                  onClick={() => setActiveTab('caselets')}
                >
                  Caselets
                </button>
                <button
                  className={`px-6 py-3 text-sm font-medium ${
                    activeTab === 'assign' 
                      ? 'text-blue-600 border-b-2 border-blue-600' 
                      : 'text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  }`}
                  onClick={() => setActiveTab('assign')}
                >
                  Assign
                </button>
              </div>

              {/* Tab Content */}
              <div className="p-6">
                {/* Overview Tab */}
                {activeTab === 'overview' && (
                  <div className="space-y-6">
                    {/* Performance Stats */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <StatCard 
                        title="Overall Performance" 
                        value={`${student.overallScore}%`} 
                        trend="+5% from last month" 
                        icon={<BarChart3 className="h-5 w-5 text-blue-500" />}
                        positive={true}
                      />
                      <StatCard 
                        title="Completion Rate" 
                        value={`${student.completionRate}%`} 
                        trend="+2% from last month" 
                        icon={<TrendingUp className="h-5 w-5 text-green-500" />}
                        positive={true}
                      />
                      <StatCard 
                        title="Avg. Completion Time" 
                        value="32 min" 
                        trend="-5 min from average" 
                        icon={<Clock className="h-5 w-5 text-purple-500" />}
                        positive={true}
                      />
                    </div>

                    {/* Performance Prediction */}
                    <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-4 border border-blue-100">
                      <div className="flex items-start space-x-4">
                        <div className="p-2 bg-blue-100 rounded-lg">
                          <Brain className="h-6 w-6 text-blue-600" />
                        </div>
                        <div>
                          <h3 className="font-medium text-gray-900">ML Performance Prediction</h3>
                          <p className="text-sm text-gray-600 mt-1">
                            Based on current performance patterns, this student is predicted to improve by <span className="font-medium text-blue-600">12%</span> in Data Mining skills over the next 30 days with consistent engagement.
                          </p>
                          <div className="mt-3 flex items-center">
                            <div className="w-full bg-white rounded-full h-2 mr-2">
                              <div className="bg-gradient-to-r from-blue-500 to-indigo-600 h-2 rounded-full" style={{ width: '65%' }}></div>
                            </div>
                            <span className="text-xs font-medium text-gray-700">65% confidence</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Recent Activity */}
                    <div>
                      <h3 className="text-lg font-medium text-gray-900 mb-4">Recent Activity</h3>
                      <div className="space-y-4">
                        {[...Array(5)].map((_, i) => (
                          <div key={i} className="flex items-start space-x-3">
                            <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-white">
                              {i % 3 === 0 ? (
                                <BookOpen className="h-4 w-4" />
                              ) : i % 3 === 1 ? (
                                <Award className="h-4 w-4" />
                              ) : (
                                <Brain className="h-4 w-4" />
                              )}
                            </div>
                            <div className="flex-1">
                              <p className="text-sm text-gray-800">
                                {i % 3 === 0
                                  ? `Completed "${mockCaselets[i].title}" caselet with a score of ${85 + i}%`
                                  : i % 3 === 1
                                  ? `Earned a badge in ${student.topSkills[i % student.topSkills.length]}`
                                  : `Improved ${student.topSkills[i % student.topSkills.length]} skill by ${5 + i}%`}
                              </p>
                              <p className="text-xs text-gray-500 mt-1">
                                {i === 0 ? 'Just now' : i === 1 ? '2 hours ago' : `${i + 1} days ago`}
                              </p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                {/* Skills Matrix Tab */}
                {activeTab === 'skills' && (
                  <div className="space-y-6">
                    <h3 className="text-lg font-medium text-gray-900 mb-4">Skills Matrix</h3>
                    
                    {/* Domain Skills */}
                    <div className="space-y-6">
                      {['Data Mining', 'Machine Learning', 'Data Visualization', 'Statistical Analysis'].map((domain, i) => (
                        <div key={domain} className="space-y-3">
                          <h4 className="font-medium text-gray-800">{domain}</h4>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {[...Array(4)].map((_, j) => {
                              const skillName = `${domain} ${['Fundamentals', 'Analysis', 'Implementation', 'Advanced'][j]}`;
                              const skillScore = 40 + Math.floor(Math.random() * 55);
                              return (
                                <div key={j} className="bg-white rounded-lg border border-gray-200 p-4">
                                  <div className="flex justify-between items-center mb-2">
                                    <span className="text-sm font-medium text-gray-800">{skillName}</span>
                                    <span className="text-sm font-medium text-gray-900">{skillScore}%</span>
                                  </div>
                                  <div className="w-full bg-gray-200 rounded-full h-2">
                                    <div 
                                      className={`h-2 rounded-full ${
                                        skillScore >= 80 ? 'bg-green-500' : 
                                        skillScore >= 60 ? 'bg-blue-500' : 
                                        skillScore >= 40 ? 'bg-yellow-500' : 'bg-red-500'
                                      }`}
                                      style={{ width: `${skillScore}%` }}
                                    ></div>
                                  </div>
                                  <div className="mt-2 flex justify-between items-center text-xs text-gray-500">
                                    <span>Based on {2 + j} caselets</span>
                                    <span className="text-blue-600">
                                      {skillScore > 50 ? `+${skillScore - 50}%` : `${skillScore - 50}%`} from baseline
                                    </span>
                                  </div>
                                </div>
                              );
                            })}
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Skill Recommendations */}
                    <div className="bg-gray-50 rounded-lg p-4 border border-gray-200 mt-6">
                      <h4 className="font-medium text-gray-800 mb-3">Skill Development Recommendations</h4>
                      <ul className="space-y-2">
                        <li className="flex items-start space-x-2">
                          <div className="p-1 bg-blue-100 rounded-full mt-0.5">
                            <Brain className="h-4 w-4 text-blue-600" />
                          </div>
                          <span className="text-sm text-gray-700">Focus on improving <span className="font-medium">Data Mining Analysis</span> skills with intermediate caselets</span>
                        </li>
                        <li className="flex items-start space-x-2">
                          <div className="p-1 bg-blue-100 rounded-full mt-0.5">
                            <Brain className="h-4 w-4 text-blue-600" />
                          </div>
                          <span className="text-sm text-gray-700">Strengthen <span className="font-medium">Statistical Analysis Fundamentals</span> before advancing to implementation</span>
                        </li>
                        <li className="flex items-start space-x-2">
                          <div className="p-1 bg-blue-100 rounded-full mt-0.5">
                            <Brain className="h-4 w-4 text-blue-600" />
                          </div>
                          <span className="text-sm text-gray-700">Ready to advance to <span className="font-medium">Advanced Machine Learning</span> caselets</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                )}

                {/* Caselets Tab */}
                {activeTab === 'caselets' && (
                  <div className="space-y-6">
                    {/* Completed Caselets */}
                    <div>
                      <h3 className="text-lg font-medium text-gray-900 mb-4">Completed Caselets</h3>
                      <div className="space-y-3">
                        {completedCaselets.length > 0 ? (
                          completedCaselets.map((caselet) => (
                            <div key={caselet.id} className="bg-white rounded-lg border border-gray-200 p-4 hover:shadow-sm transition-shadow">
                              <div className="flex justify-between items-start">
                                <div>
                                  <h4 className="font-medium text-gray-900">{caselet.title}</h4>
                                  <div className="flex items-center text-sm text-gray-500 mt-1">
                                    <Brain className="h-4 w-4 mr-1 text-blue-500" />
                                    <span>{caselet.domain}</span>
                                    <span className="mx-2">•</span>
                                    <span>{caselet.difficulty}</span>
                                  </div>
                                </div>
                                <div className="flex items-center">
                                  <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                                    student.scores[caselet.id] >= 80 ? 'bg-green-100 text-green-800' : 
                                    student.scores[caselet.id] >= 60 ? 'bg-blue-100 text-blue-800' : 
                                    'bg-red-100 text-red-800'
                                  }`}>
                                    Score: {student.scores[caselet.id] || 0}%
                                  </span>
                                </div>
                              </div>
                              <div className="mt-3">
                                <div className="w-full bg-gray-200 rounded-full h-2">
                                  <div 
                                    className={`h-2 rounded-full ${
                                      student.scores[caselet.id] >= 80 ? 'bg-green-500' : 
                                      student.scores[caselet.id] >= 60 ? 'bg-blue-500' : 
                                      'bg-red-500'
                                    }`}
                                    style={{ width: `${student.scores[caselet.id] || 0}%` }}
                                  ></div>
                                </div>
                              </div>
                              <div className="mt-3 flex justify-between items-center text-xs text-gray-500">
                                <span>Completed on Mar 15, 2025</span>
                                <span>Time taken: 28 minutes</span>
                              </div>
                            </div>
                          ))
                        ) : (
                          <p className="text-gray-500 text-sm">No completed caselets yet.</p>
                        )}
                      </div>
                    </div>

                    {/* Assigned Caselets */}
                    <div>
                      <h3 className="text-lg font-medium text-gray-900 mb-4">Assigned Caselets</h3>
                      <div className="space-y-3">
                        {assignedCaselets.length > 0 ? (
                          assignedCaselets.map((caselet) => (
                            <div key={caselet.id} className="bg-white rounded-lg border border-gray-200 p-4 hover:shadow-sm transition-shadow">
                              <div className="flex justify-between items-start">
                                <div>
                                  <h4 className="font-medium text-gray-900">{caselet.title}</h4>
                                  <div className="flex items-center text-sm text-gray-500 mt-1">
                                    <Brain className="h-4 w-4 mr-1 text-blue-500" />
                                    <span>{caselet.domain}</span>
                                    <span className="mx-2">•</span>
                                    <span>{caselet.difficulty}</span>
                                  </div>
                                </div>
                                <div className="flex items-center">
                                  <span className="px-2 py-1 text-xs font-medium rounded-full bg-yellow-100 text-yellow-800">
                                    Due in 3 days
                                  </span>
                                </div>
                              </div>
                              <div className="mt-3 flex justify-between items-center text-xs text-gray-500">
                                <span>Assigned on Mar 12, 2025</span>
                                <span>Est. completion time: 30 minutes</span>
                              </div>
                            </div>
                          ))
                        ) : (
                          <p className="text-gray-500 text-sm">No assigned caselets.</p>
                        )}
                      </div>
                    </div>
                  </div>
                )}

                {/* Assign Tab */}
                {activeTab === 'assign' && (
                  <div className="space-y-6">
                    <div className="flex justify-between items-center">
                      <h3 className="text-lg font-medium text-gray-900">Assign New Caselets</h3>
                      <button 
                        className={`px-4 py-2 rounded-lg transition-colors ${
                          selectedCaselets.length > 0 
                            ? 'bg-blue-600 text-white hover:bg-blue-700' 
                            : 'bg-gray-100 text-gray-400 cursor-not-allowed'
                        }`}
                        disabled={selectedCaselets.length === 0}
                        onClick={assignCaselets}
                      >
                        Assign Selected ({selectedCaselets.length})
                      </button>
                    </div>
                    
                    <div className="relative">
                      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                      <input
                        type="text"
                        placeholder="Search caselets..."
                        className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                      />
                    </div>

                    <div className="space-y-3 max-h-[500px] overflow-y-auto pr-2">
                      {availableCaselets.map((caselet) => (
                        <div 
                          key={caselet.id} 
                          className={`bg-white rounded-lg border p-4 hover:shadow-sm transition-all cursor-pointer ${
                            selectedCaselets.includes(caselet.id) 
                              ? 'border-blue-500 bg-blue-50' 
                              : 'border-gray-200'
                          }`}
                          onClick={() => toggleCaseletSelection(caselet.id)}
                        >
                          <div className="flex items-start">
                            <input
                              type="checkbox"
                              className="h-5 w-5 text-blue-600 rounded border-gray-300 focus:ring-blue-500 mr-3 mt-1"
                              checked={selectedCaselets.includes(caselet.id)}
                              onChange={() => {}}
                            />
                            <div className="flex-1">
                              <div className="flex justify-between items-start">
                                <div>
                                  <h4 className="font-medium text-gray-900">{caselet.title}</h4>
                                  <div className="flex items-center text-sm text-gray-500 mt-1">
                                    <Brain className="h-4 w-4 mr-1 text-blue-500" />
                                    <span>{caselet.domain}</span>
                                    <span className="mx-2">•</span>
                                    <span>{caselet.difficulty}</span>
                                  </div>
                                </div>
                                <div className="flex items-center">
                                  <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                                    caselet.difficulty === 'Easy' ? 'bg-green-100 text-green-800' : 
                                    caselet.difficulty === 'Medium' ? 'bg-yellow-100 text-yellow-800' : 
                                    'bg-red-100 text-red-800'
                                  }`}>
                                    {caselet.difficulty}
                                  </span>
                                </div>
                              </div>
                              <p className="text-sm text-gray-600 mt-2">{caselet.description}</p>
                              <div className="mt-3 flex flex-wrap gap-2">
                                {caselet.skills.map((skill, i) => (
                                  <span 
                                    key={i} 
                                    className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800"
                                  >
                                    {skill}
                                  </span>
                                ))}
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

const StatCard = ({ title, value, trend, icon, positive }) => {
  return (
    <div className="bg-white rounded-lg shadow-sm p-4 border border-gray-100 hover:shadow-md transition-shadow">
      <div className="flex items-center justify-between mb-3">
        <h3 className="text-gray-500 text-sm font-medium">{title}</h3>
        <div className="p-1.5 rounded-lg bg-blue-50">{icon}</div>
      </div>
      <div className="flex items-end justify-between">
        <div>
          <p className="text-xl font-bold text-gray-900">{value}</p>
          <p className={`text-xs font-medium flex items-center ${positive ? 'text-green-600' : 'text-red-600'}`}>
            <span className="inline-block mr-1">{positive ? '↑' : '↓'}</span>
            {trend}
          </p>
        </div>
      </div>
    </div>
  );
};

export default StudentDetailPage;