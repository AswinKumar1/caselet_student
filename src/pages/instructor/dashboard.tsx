import React, { useState } from 'react';
import { BarChart3, Users, BookOpen, TrendingUp, Award, Brain, Calendar, ChevronRight, Filter, Search, PieChart, LineChart, ArrowUpRight } from 'lucide-react';
import { mockStudents, mockCaselets, mockSkills } from '../../data/mock-data';
import MainLayout from '../../layouts/main-layout';
import StudentCard from '../../components/student-card';

const InstructorDashboard = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterDomain, setFilterDomain] = useState('All Domains');
  const [filterStatus, setFilterStatus] = useState('All Status');
  const [timeRange, setTimeRange] = useState('Last 30 days');
  
  // Calculate statistics
  const totalStudents = mockStudents.length;
  const totalCaselets = mockCaselets.length;
  const averageCompletion = Math.round(
    mockStudents.reduce((acc, student) => acc + student.completionRate, 0) / totalStudents
  );
  const totalAssignments = mockStudents.reduce(
    (acc, student) => acc + student.assignedCaselets.length,
    0
  );

  // Get top performing students
  const topStudents = [...mockStudents]
    .sort((a, b) => b.overallScore - a.overallScore)
    .slice(0, 5);

  // Get most challenging caselets
  const challengingCaselets = [...mockCaselets]
    .sort((a, b) => a.averageScore - b.averageScore)
    .slice(0, 5);
    
  // Filter students based on search and filters
  const filteredStudents = mockStudents.filter(student => {
    const matchesSearch = searchTerm === '' || 
                         student.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         student.email.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesDomain = filterDomain === 'All Domains' || 
                         student.topSkills.includes(filterDomain);
                         
    const matchesStatus = filterStatus === 'All Status' || 
                         student.status === filterStatus;
                         
    return matchesSearch && matchesDomain && matchesStatus;
  });

  // Get domains for filter
  const domains = ['All Domains', ...new Set(mockSkills.map(skill => skill.domain))];
  const statuses = ['All Status', 'Active', 'At Risk', 'Needs Help'];

  return (
    <MainLayout userType="instructor">
      <div className="p-6 space-y-8">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">
            Instructor Dashboard
          </h1>
          <div className="flex items-center space-x-4">
            <select 
              className="text-sm border border-gray-300 rounded-md px-3 py-1.5 bg-white"
              value={timeRange}
              onChange={(e) => setTimeRange(e.target.value)}
            >
              <option>Last 7 days</option>
              <option>Last 30 days</option>
              <option>Last 90 days</option>
              <option>All time</option>
            </select>
            <div className="flex items-center space-x-2">
              <span className="text-sm text-gray-500">Last updated:</span>
              <span className="text-sm font-medium">Today at 10:30 AM</span>
            </div>
          </div>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <StatCard
            title="Total Students"
            value={totalStudents}
            icon={<Users className="h-6 w-6 text-blue-500" />}
            trend="+12% from last month"
            positive={true}
          />
          <StatCard
            title="Total Caselets"
            value={totalCaselets}
            icon={<BookOpen className="h-6 w-6 text-indigo-500" />}
            trend="+5 new this week"
            positive={true}
          />
          <StatCard
            title="Avg. Completion Rate"
            value={`${averageCompletion}%`}
            icon={<TrendingUp className="h-6 w-6 text-green-500" />}
            trend="+3% from last week"
            positive={true}
          />
          <StatCard
            title="Active Assignments"
            value={totalAssignments}
            icon={<Calendar className="h-6 w-6 text-purple-500" />}
            trend="23 due this week"
            positive={null}
          />
        </div>

        {/* Performance Overview */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-semibold text-gray-800">Top Performing Students</h2>
              <a href="/instructor/students" className="text-blue-600 hover:text-blue-800 text-sm font-medium">
                View All
              </a>
            </div>
            <div className="space-y-4">
              {topStudents.map((student) => (
                <div key={student.id} className="flex items-center justify-between p-3 hover:bg-gray-50 rounded-lg transition-colors">
                  <div className="flex items-center space-x-3">
                    <div className="relative">
                      <img
                        src={student.avatar}
                        alt={student.name}
                        className="w-10 h-10 rounded-full object-cover border-2 border-white shadow-sm"
                      />
                      <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-white"></span>
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-900">{student.name}</h3>
                      <p className="text-sm text-gray-500">{student.email}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="text-right">
                      <span className="text-sm font-medium text-gray-900">{student.overallScore}%</span>
                      <div className="flex items-center text-xs text-gray-500">
                        <span>{student.completedCaselets.length} caselets</span>
                      </div>
                    </div>
                    <Award className={`h-5 w-5 ${student.overallScore > 90 ? 'text-yellow-500' : 'text-blue-500'}`} />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-semibold text-gray-800">Challenging Caselets</h2>
              <a href="/instructor/caselets" className="text-blue-600 hover:text-blue-800 text-sm font-medium">
                View All
              </a>
            </div>
            <div className="space-y-4">
              {challengingCaselets.map((caselet) => (
                <div key={caselet.id} className="p-3 hover:bg-gray-50 rounded-lg transition-colors">
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="font-medium text-gray-900">{caselet.title}</h3>
                    <span className="px-2 py-1 text-xs font-medium rounded-full bg-red-100 text-red-800">
                      {caselet.averageScore}% avg. score
                    </span>
                  </div>
                  <div className="flex items-center text-sm text-gray-500 mb-2">
                    <Brain className="h-4 w-4 mr-1 text-indigo-500" />
                    <span>{caselet.domain}</span>
                    <span className="mx-2">•</span>
                    <span>{caselet.difficulty}</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-gradient-to-r from-red-500 to-orange-500 h-2 rounded-full"
                      style={{ width: `${caselet.averageScore}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Analytics Overview */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100 lg:col-span-2">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-semibold text-gray-800">Performance Trends</h2>
              <div className="flex space-x-2">
                <button className="px-3 py-1 text-xs font-medium rounded-full bg-blue-100 text-blue-800">
                  Overall Score
                </button>
                <button className="px-3 py-1 text-xs font-medium rounded-full bg-gray-100 text-gray-800">
                  Completion Rate
                </button>
                <button className="px-3 py-1 text-xs font-medium rounded-full bg-gray-100 text-gray-800">
                  Active Students
                </button>
              </div>
            </div>
            <div className="h-64 flex items-center justify-center">
              {/* This would be a chart in a real implementation */}
              <div className="text-center">
                <LineChart className="h-16 w-16 text-blue-500 mx-auto mb-4" />
                <p className="text-gray-500 text-sm">Performance trend visualization would appear here</p>
                <p className="text-gray-400 text-xs mt-2">Showing data for {timeRange}</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-semibold text-gray-800">Skill Distribution</h2>
              <button className="text-blue-600 hover:text-blue-800 text-sm font-medium">
                Details
              </button>
            </div>
            <div className="h-64 flex items-center justify-center">
              {/* This would be a chart in a real implementation */}
              <div className="text-center">
                <PieChart className="h-16 w-16 text-indigo-500 mx-auto mb-4" />
                <p className="text-gray-500 text-sm">Skill distribution visualization would appear here</p>
                <div className="mt-4 grid grid-cols-2 gap-2 text-xs">
                  <div className="flex items-center">
                    <span className="w-3 h-3 bg-blue-500 rounded-full mr-2"></span>
                    <span>Data Mining (32%)</span>
                  </div>
                  <div className="flex items-center">
                    <span className="w-3 h-3 bg-indigo-500 rounded-full mr-2"></span>
                    <span>Machine Learning (28%)</span>
                  </div>
                  <div className="flex items-center">
                    <span className="w-3 h-3 bg-purple-500 rounded-full mr-2"></span>
                    <span>Data Viz (22%)</span>
                  </div>
                  <div className="flex items-center">
                    <span className="w-3 h-3 bg-green-500 rounded-full mr-2"></span>
                    <span>Statistics (18%)</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Student Management */}
        <div className="space-y-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <h2 className="text-xl font-semibold text-gray-800">Student Management</h2>
            <div className="flex flex-col sm:flex-row gap-3">
              <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center gap-2">
                <Users className="h-4 w-4" />
                <span>Add New Student</span>
              </button>
              <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors flex items-center justify-center gap-2">
                <BookOpen className="h-4 w-4" />
                <span>Bulk Assign Caselets</span>
              </button>
            </div>
          </div>

          {/* Filters */}
          <div className="flex flex-col md:flex-row gap-4">
            <div className="relative flex-grow">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <input
                type="text"
                placeholder="Search students by name or email..."
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <div className="flex gap-3">
              <select
                className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none bg-white"
                value={filterDomain}
                onChange={(e) => setFilterDomain(e.target.value)}
              >
                {domains.map((domain) => (
                  <option key={domain} value={domain}>
                    {domain}
                  </option>
                ))}
              </select>
              <select
                className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none bg-white"
                value={filterStatus}
                onChange={(e) => setFilterStatus(e.target.value)}
              >
                {statuses.map((status) => (
                  <option key={status} value={status}>
                    {status}
                  </option>
                ))}
              </select>
              <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors flex items-center gap-2">
                <Filter className="h-4 w-4" />
                <span>More Filters</span>
              </button>
            </div>
          </div>

          {/* Students Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredStudents.length > 0 ? (
              filteredStudents.slice(0, 6).map((student) => (
                <StudentCard key={student.id} student={student} />
              ))
            ) : (
              <div className="col-span-3 py-12 text-center">
                <p className="text-gray-500">No students match your search criteria.</p>
              </div>
            )}
          </div>
          
          {filteredStudents.length > 6 && (
            <div className="flex justify-center mt-6">
              <a 
                href="/instructor/students" 
                className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors flex items-center gap-2"
              >
                <span>View All Students</span>
                <ChevronRight className="h-4 w-4" />
              </a>
            </div>
          )}
        </div>

        {/* Domain Performance */}
        <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-semibold text-gray-800">Domain Performance Overview</h2>
            <select className="text-sm border border-gray-300 rounded-md px-3 py-1.5 bg-white">
              <option>Last 30 days</option>
              <option>Last 90 days</option>
              <option>All time</option>
            </select>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <DomainCard
              domain="Data Mining"
              score={78}
              students={32}
              trend="+5%"
              color="from-blue-500 to-indigo-600"
            />
            <DomainCard
              domain="Machine Learning"
              score={82}
              students={28}
              trend="+8%"
              color="from-purple-500 to-pink-600"
            />
            <DomainCard
              domain="Data Visualization"
              score={65}
              students={24}
              trend="-2%"
              color="from-orange-500 to-red-600"
              negative
            />
            <DomainCard
              domain="Statistical Analysis"
              score={71}
              students={30}
              trend="+3%"
              color="from-green-500 to-teal-600"
            />
          </div>
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
            <div className="flex items-center space-x-4 mb-4">
              <div className="p-3 rounded-lg bg-blue-100">
                <Users className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-800">Student Management</h3>
            </div>
            <p className="text-gray-600 mb-4">Manage student profiles, track progress, and assign caselets.</p>
            <div className="space-y-2">
              <ActionLink text="View all students" href="/instructor/students" />
              <ActionLink text="Add new student" href="#" />
              <ActionLink text="Manage student groups" href="#" />
            </div>
          </div>
          
          <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
            <div className="flex items-center space-x-4 mb-4">
              <div className="p-3 rounded-lg bg-purple-100">
                <BookOpen className="h-6 w-6 text-purple-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-800">Caselet Library</h3>
            </div>
            <p className="text-gray-600 mb-4">Browse, create, and manage caselets for your students.</p>
            <div className="space-y-2">
              <ActionLink text="View all caselets" href="/instructor/caselets" />
              <ActionLink text="Create new caselet" href="#" />
              <ActionLink text="Manage categories" href="#" />
            </div>
          </div>
          
          <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
            <div className="flex items-center space-x-4 mb-4">
              <div className="p-3 rounded-lg bg-green-100">
                <BarChart3 className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-800">Analytics</h3>
            </div>
            <p className="text-gray-600 mb-4">Gain insights into student performance and learning patterns.</p>
            <div className="space-y-2">
              <ActionLink text="Performance reports" href="/instructor/analytics" />
              <ActionLink text="Skill gap analysis" href="#" />
              <ActionLink text="Export data" href="#" />
            </div>
          </div>
        </div>

        {/* Recent Activity */}
        <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
          <h2 className="text-xl font-semibold text-gray-800 mb-6">Recent Activity</h2>
          <div className="space-y-6">
            {[...Array(5)].map((_, i) => (
              <div key={i} className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-white">
                  {i % 3 === 0 ? (
                    <Users className="h-5 w-5" />
                  ) : i % 3 === 1 ? (
                    <BookOpen className="h-5 w-5" />
                  ) : (
                    <Award className="h-5 w-5" />
                  )}
                </div>
                <div className="flex-1">
                  <p className="text-gray-800">
                    {i % 3 === 0
                      ? `${mockStudents[i].name} completed the "${mockCaselets[i].title}" caselet with a score of ${
                          85 + i
                        }%`
                      : i % 3 === 1
                      ? `You assigned "${mockCaselets[i + 2].title}" to ${mockStudents[i + 1].name}`
                      : `${mockStudents[i + 2].name} improved their Data Mining skill by 12%`}
                  </p>
                  <p className="text-sm text-gray-500 mt-1">
                    {i === 0 ? 'Just now' : i === 1 ? '2 hours ago' : `${i + 1} days ago`}
                  </p>
                </div>
              </div>
            ))}
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

const DomainCard = ({ domain, score, students, trend, color, negative = false }) => {
  return (
    <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100 hover:shadow-md transition-shadow">
      <h3 className="font-medium text-gray-900 mb-2">{domain}</h3>
      <div className="flex items-center justify-between mb-2">
        <span className="text-2xl font-bold">{score}%</span>
        <span className={`text-sm font-medium ${negative ? 'text-red-600' : 'text-green-600'}`}>
          {trend}
        </span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2 mb-3">
        <div
          className={`bg-gradient-to-r ${color} h-2 rounded-full`}
          style={{ width: `${score}%` }}
        ></div>
      </div>
      <p className="text-sm text-gray-500">{students} active students</p>
    </div>
  );
};

const ActionLink = ({ text, href }) => {
  return (
    <a 
      href={href} 
      className="flex items-center justify-between py-2 px-3 text-gray-700 hover:bg-gray-50 rounded-lg transition-colors"
    >
      <span>{text}</span>
      <ArrowUpRight className="h-4 w-4 text-gray-400" />
    </a>
  );
};

export default InstructorDashboard;