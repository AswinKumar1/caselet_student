import React, { useState } from 'react';
import { Search, Filter, Brain, Clock, ChevronRight, BookOpen, Award } from 'lucide-react';
import { mockCaselets } from '../../data/mock-data';
import MainLayout from '../../layouts/main-layout';

const Caselets = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedDomain, setSelectedDomain] = useState('All Domains');
  const [selectedDifficulty, setSelectedDifficulty] = useState('All');
  const [selectedSkill, setSelectedSkill] = useState('All Skills');

  // Get unique domains and skills
  const domains = ['All Domains', ...new Set(mockCaselets.map(c => c.domain))];
  const skills = ['All Skills', ...new Set(mockCaselets.flatMap(c => c.skills))];
  const difficulties = ['All', 'Easy', 'Medium', 'Hard'];

  // Filter caselets
  const filteredCaselets = mockCaselets.filter(caselet => {
    const matchesSearch = caselet.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         caselet.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesDomain = selectedDomain === 'All Domains' || caselet.domain === selectedDomain;
    const matchesDifficulty = selectedDifficulty === 'All' || caselet.difficulty === selectedDifficulty;
    const matchesSkill = selectedSkill === 'All Skills' || caselet.skills.includes(selectedSkill);
    return matchesSearch && matchesDomain && matchesDifficulty && matchesSkill;
  });

  return (
    <MainLayout userType="student">
      <div className="p-6 space-y-6">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">
            Caselets
          </h1>
          <div className="flex items-center space-x-2">
            <span className="text-sm text-gray-500">Last updated:</span>
            <span className="text-sm font-medium">Today at 10:30 AM</span>
          </div>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
            <div className="flex items-center space-x-4">
              <div className="p-3 rounded-lg bg-gradient-to-r from-blue-500 to-indigo-600 text-white">
                <BookOpen className="h-6 w-6" />
              </div>
              <div>
                <h2 className="text-xl font-semibold text-gray-800">Available</h2>
                <p className="text-3xl font-bold text-gray-900 mt-1">{mockCaselets.length}</p>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
            <div className="flex items-center space-x-4">
              <div className="p-3 rounded-lg bg-gradient-to-r from-green-500 to-emerald-600 text-white">
                <Award className="h-6 w-6" />
              </div>
              <div>
                <h2 className="text-xl font-semibold text-gray-800">Completed</h2>
                <p className="text-3xl font-bold text-gray-900 mt-1">4</p>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
            <div className="flex items-center space-x-4">
              <div className="p-3 rounded-lg bg-gradient-to-r from-purple-500 to-pink-600 text-white">
                <Brain className="h-6 w-6" />
              </div>
              <div>
                <h2 className="text-xl font-semibold text-gray-800">In Progress</h2>
                <p className="text-3xl font-bold text-gray-900 mt-1">2</p>
              </div>
            </div>
          </div>
        </div>

        {/* Filters */}
        <div className="flex flex-col md:flex-row gap-4">
          <div className="relative flex-grow">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            <input
              type="text"
              placeholder="Search caselets..."
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <div className="flex gap-3">
            <select
              className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none bg-white"
              value={selectedDomain}
              onChange={(e) => setSelectedDomain(e.target.value)}
            >
              {domains.map(domain => (
                <option key={domain} value={domain}>{domain}</option>
              ))}
            </select>
            <select
              className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none bg-white"
              value={selectedDifficulty}
              onChange={(e) => setSelectedDifficulty(e.target.value)}
            >
              {difficulties.map(difficulty => (
                <option key={difficulty} value={difficulty}>{difficulty}</option>
              ))}
            </select>
            <select
              className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none bg-white"
              value={selectedSkill}
              onChange={(e) => setSelectedSkill(e.target.value)}
            >
              {skills.map(skill => (
                <option key={skill} value={skill}>{skill}</option>
              ))}
            </select>
            <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors flex items-center gap-2">
              <Filter className="h-4 w-4" />
              <span>More Filters</span>
            </button>
          </div>
        </div>

        {/* Caselets Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCaselets.map((caselet) => (
            <div key={caselet.id} className="bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-all">
              <div className="p-6">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-900 mb-2">{caselet.title}</h3>
                    <div className="flex items-center text-sm text-gray-500 mb-3">
                      <Brain className="h-4 w-4 mr-1 text-blue-500" />
                      <span>{caselet.domain}</span>
                      <span className="mx-2">•</span>
                      <span className={`${
                        caselet.difficulty === 'Easy' ? 'text-green-600' :
                        caselet.difficulty === 'Medium' ? 'text-yellow-600' :
                        'text-red-600'
                      }`}>
                        {caselet.difficulty}
                      </span>
                    </div>
                    <p className="text-sm text-gray-600 mb-4">{caselet.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {caselet.skills.map((skill, index) => (
                        <span 
                          key={index}
                          className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <div className="flex items-center text-gray-500">
                    <Clock className="h-4 w-4 mr-1" />
                    <span>Est. {caselet.completionTime} min</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-gray-500 mr-2">Avg. Score:</span>
                    <span className={`font-medium ${
                      caselet.averageScore >= 80 ? 'text-green-600' :
                      caselet.averageScore >= 60 ? 'text-yellow-600' :
                      'text-red-600'
                    }`}>
                      {caselet.averageScore}%
                    </span>
                  </div>
                </div>
              </div>
              <div className="px-6 py-4 bg-gray-50 border-t border-gray-100">
                <a
                  href={`/caselet/${caselet.id}`}
                  className="flex items-center justify-between text-blue-600 hover:text-blue-800 font-medium"
                >
                  <span>Start Caselet</span>
                  <ChevronRight className="h-5 w-5" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {filteredCaselets.length === 0 && (
          <div className="text-center py-12">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gray-100 mb-4">
              <Search className="h-8 w-8 text-gray-400" />
            </div>
            <h3 className="text-lg font-medium text-gray-900 mb-2">No caselets found</h3>
            <p className="text-gray-500">Try adjusting your search or filters</p>
          </div>
        )}
      </div>
    </MainLayout>
  );
};

export default Caselets;