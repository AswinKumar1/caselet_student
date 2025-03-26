import React, { useState } from 'react';
import { Brain, Award, BookOpen, TrendingUp, BarChart3, Database, LineChart, Table, GitBranch, Network, Workflow, Search, Filter, ChevronDown, CheckCircle, Clock } from 'lucide-react';
import MainLayout from '../../layouts/main-layout';

const Skills = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedLevel, setSelectedLevel] = useState('All');
  const [selectedStatus, setSelectedStatus] = useState('All');

  const skillCategories = [
    {
      title: "Data Scientist",
      badges: [
        { name: "Data Cleaning", level: "Advanced", icon: Table, progress: 92, color: "from-purple-500 to-indigo-500", status: "Completed", completedDate: "2025-03-15" },
        { name: "Data Wrangling", level: "Advanced", icon: GitBranch, progress: 88, color: "from-blue-500 to-cyan-500", status: "Completed", completedDate: "2025-03-10" },
        { name: "Clustering", level: "Expert", icon: Network, progress: 95, color: "from-indigo-500 to-purple-500", status: "Completed", completedDate: "2025-03-01" },
        { name: "Machine Learning", level: "Advanced", icon: Brain, progress: 85, color: "from-green-500 to-emerald-500", status: "In Progress" },
        { name: "Deep Learning", level: "Intermediate", icon: Network, progress: 75, color: "from-blue-500 to-indigo-500", status: "In Progress" }
      ]
    },
    {
      title: "Data Analyst",
      badges: [
        { name: "Data Visualization", level: "Expert", icon: BarChart3, progress: 90, color: "from-amber-500 to-orange-500", status: "Completed", completedDate: "2025-02-28" },
        { name: "Statistical Analysis", level: "Advanced", icon: LineChart, progress: 87, color: "from-green-500 to-teal-500", status: "Completed", completedDate: "2025-02-20" },
        { name: "Data Modeling", level: "Intermediate", icon: Database, progress: 78, color: "from-purple-500 to-pink-500", status: "In Progress" },
        { name: "Business Intelligence", level: "Advanced", icon: BarChart3, progress: 88, color: "from-blue-500 to-indigo-500", status: "In Progress" }
      ]
    },
    {
      title: "Data Engineer",
      badges: [
        { name: "ETL Pipeline", level: "Intermediate", icon: Workflow, progress: 82, color: "from-orange-500 to-red-500", status: "In Progress" },
        { name: "Data Warehousing", level: "Advanced", icon: Database, progress: 85, color: "from-cyan-500 to-blue-500", status: "Completed", completedDate: "2025-02-15" },
        { name: "Big Data", level: "Intermediate", icon: Database, progress: 76, color: "from-purple-500 to-indigo-500", status: "In Progress" }
      ]
    }
  ];

  // Calculate completed badges count
  const completedBadges = skillCategories.reduce((count, category) => 
    count + category.badges.filter(badge => badge.status === "Completed").length, 0
  );

  const filteredCategories = skillCategories
    .map(category => ({
      ...category,
      badges: category.badges.filter(badge => {
        const matchesSearch = badge.name.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesCategory = selectedCategory === 'All' || category.title === selectedCategory;
        const matchesLevel = selectedLevel === 'All' || badge.level === selectedLevel;
        const matchesStatus = selectedStatus === 'All' || badge.status === selectedStatus;
        return matchesSearch && matchesCategory && matchesLevel && matchesStatus;
      })
    }))
    .filter(category => category.badges.length > 0);

  return (
    <MainLayout userType="student">
      <div className="p-6 space-y-6">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">
            My Skills
          </h1>
          <div className="flex items-center space-x-2">
            <span className="text-sm text-gray-500">Last updated:</span>
            <span className="text-sm font-medium">Today at 10:30 AM</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
            <div className="flex items-center space-x-4">
              <div className="p-3 rounded-lg bg-gradient-to-r from-blue-500 to-indigo-600 text-white">
                <Award className="h-6 w-6" />
              </div>
              <div>
                <h2 className="text-xl font-semibold text-gray-800">Total Skills</h2>
                <p className="text-3xl font-bold text-gray-900 mt-1">12</p>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
            <div className="flex items-center space-x-4">
              <div className="p-3 rounded-lg bg-gradient-to-r from-green-500 to-emerald-600 text-white">
                <CheckCircle className="h-6 w-6" />
              </div>
              <div>
                <h2 className="text-xl font-semibold text-gray-800">Completed</h2>
                <p className="text-3xl font-bold text-gray-900 mt-1">{completedBadges}</p>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
            <div className="flex items-center space-x-4">
              <div className="p-3 rounded-lg bg-gradient-to-r from-purple-500 to-pink-600 text-white">
                <TrendingUp className="h-6 w-6" />
              </div>
              <div>
                <h2 className="text-xl font-semibold text-gray-800">Avg. Progress</h2>
                <p className="text-3xl font-bold text-gray-900 mt-1">85%</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-100">
          <div className="p-6 border-b border-gray-100">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <h2 className="text-xl font-semibold text-gray-800">Skills Overview</h2>
              <div className="flex flex-col sm:flex-row gap-3">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                  <input
                    type="text"
                    placeholder="Search skills..."
                    className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none w-full"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </div>
                <select
                  className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none bg-white"
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                >
                  <option value="All">All Categories</option>
                  {skillCategories.map(category => (
                    <option key={category.title} value={category.title}>{category.title}</option>
                  ))}
                </select>
                <select
                  className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none bg-white"
                  value={selectedLevel}
                  onChange={(e) => setSelectedLevel(e.target.value)}
                >
                  <option value="All">All Levels</option>
                  <option value="Expert">Expert</option>
                  <option value="Advanced">Advanced</option>
                  <option value="Intermediate">Intermediate</option>
                </select>
                <select
                  className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none bg-white"
                  value={selectedStatus}
                  onChange={(e) => setSelectedStatus(e.target.value)}
                >
                  <option value="All">All Status</option>
                  <option value="Completed">Completed</option>
                  <option value="In Progress">In Progress</option>
                </select>
              </div>
            </div>
          </div>

          <div className="p-6 space-y-8">
            {filteredCategories.map((category, idx) => (
              <div key={idx} className="space-y-4">
                <h3 className="text-lg font-medium text-gray-700 flex items-center">
                  <span>{category.title}</span>
                  <span className="ml-2 px-2 py-0.5 text-xs font-medium bg-gray-100 text-gray-600 rounded-full">
                    {category.badges.length} skills
                  </span>
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {category.badges.map((badge, badgeIdx) => (
                    <div 
                      key={badgeIdx}
                      className="relative group cursor-pointer"
                    >
                      <div className="bg-white rounded-lg border border-gray-200 p-4 transition-all duration-300 hover:shadow-lg hover:border-blue-300">
                        <div className="flex items-start space-x-4">
                          <div className={`p-3 rounded-lg bg-gradient-to-r ${badge.color}`}>
                            <badge.icon className="h-6 w-6 text-white" />
                          </div>
                          <div className="flex-1">
                            <div className="flex items-start justify-between">
                              <h4 className="font-medium text-gray-900">{badge.name}</h4>
                              <span className={`inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium ${
                                badge.status === 'Completed' 
                                  ? 'bg-green-100 text-green-800' 
                                  : 'bg-blue-100 text-blue-800'
                              }`}>
                                {badge.status === 'Completed' ? (
                                  <CheckCircle className="h-3 w-3 mr-1" />
                                ) : (
                                  <Clock className="h-3 w-3 mr-1" />
                                )}
                                {badge.status}
                              </span>
                            </div>
                            <div className="flex items-center mt-1">
                              <span className={`text-sm ${
                                badge.level === 'Expert' ? 'text-purple-600' :
                                badge.level === 'Advanced' ? 'text-blue-600' :
                                'text-green-600'
                              }`}>
                                {badge.level}
                              </span>
                              {badge.completedDate && (
                                <>
                                  <span className="mx-2 text-gray-300">•</span>
                                  <span className="text-xs text-gray-500">
                                    Completed {new Date(badge.completedDate).toLocaleDateString()}
                                  </span>
                                </>
                              )}
                            </div>
                            <div className="mt-3">
                              <div className="w-full bg-gray-200 rounded-full h-2">
                                <div 
                                  className={`h-2 rounded-full bg-gradient-to-r ${badge.color}`}
                                  style={{ width: `${badge.progress}%` }}
                                ></div>
                              </div>
                              <div className="flex justify-between items-center mt-1">
                                <span className="text-xs text-gray-500">Progress</span>
                                <span className="text-xs font-medium text-gray-700">{badge.progress}%</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 absolute -top-12 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white text-xs py-1 px-2 rounded whitespace-nowrap">
                        Click to view details
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}

            {filteredCategories.length === 0 && (
              <div className="text-center py-12">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gray-100 mb-4">
                  <Search className="h-8 w-8 text-gray-400" />
                </div>
                <h3 className="text-lg font-medium text-gray-900 mb-2">No skills found</h3>
                <p className="text-gray-500">Try adjusting your search or filters</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default Skills;