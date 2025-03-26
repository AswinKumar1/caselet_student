import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  Brain, 
  LayoutDashboard, 
  BookOpen, 
  Users, 
  Award, 
  Settings, 
  LogOut, 
  Menu, 
  X, 
  MessageSquare,
  Bell,
  ChevronDown,
  Search
} from 'lucide-react';
import ThemeToggle from '../components/ThemeToggle';

interface MainLayoutProps {
  children: React.ReactNode;
  userType?: 'student' | 'instructor';
}

const MainLayout: React.FC<MainLayoutProps> = ({ children, userType = 'student' }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const location = useLocation();
  
  const isActive = (path: string) => {
    return location.pathname === path || location.pathname.startsWith(path);
  };

  const studentNavItems = [
    { name: 'Dashboard', path: '/', icon: <LayoutDashboard className="h-5 w-5" /> },
    { name: 'Caselets', path: '/caselets', icon: <BookOpen className="h-5 w-5" /> },
    { name: 'My Skills', path: '/skills', icon: <Award className="h-5 w-5" /> },
    { name: 'AI Tutor', path: '/ai-tutor', icon: <MessageSquare className="h-5 w-5" /> },
  ];

  const instructorNavItems = [
    { name: 'Dashboard', path: '/instructor', icon: <LayoutDashboard className="h-5 w-5" /> },
    { name: 'Students', path: '/instructor/students', icon: <Users className="h-5 w-5" /> },
    { name: 'Caselets', path: '/instructor/caselets', icon: <BookOpen className="h-5 w-5" /> },
    { name: 'Analytics', path: '/instructor/analytics', icon: <Award className="h-5 w-5" /> },
  ];

  const navItems = userType === 'student' ? studentNavItems : instructorNavItems;

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex flex-col">
      {/* Header */}
      <header className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 sticky top-0 z-30 backdrop-blur-sm bg-white/90 dark:bg-gray-800/90">
        <div className="flex items-center justify-between px-4 py-3">
          <div className="flex items-center">
            <button
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="md:hidden p-2 rounded-md text-gray-500 dark:text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
            >
              {sidebarOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
            <Link to="/" className="flex items-center space-x-2">
              <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white p-2 rounded-lg">
                <Brain className="h-6 w-6" />
              </div>
              <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">
                CerebroX
              </span>
            </Link>
          </div>

          <div className="hidden md:flex items-center flex-1 max-w-md mx-8">
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <input
                type="text"
                placeholder="Search caselets, skills, students..."
                className="w-full pl-10 pr-4 py-2 text-sm border border-gray-300 dark:border-gray-600 rounded-full focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none bg-gray-50 dark:bg-gray-700 dark:text-gray-200"
              />
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <ThemeToggle />
            
            <button className="p-2 rounded-full text-gray-500 dark:text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 relative">
              <Bell className="h-5 w-5" />
              <span className="absolute top-0 right-0 block h-2 w-2 rounded-full bg-red-500 ring-2 ring-white dark:ring-gray-800"></span>
            </button>
            
            <div className="relative">
              <button className="flex items-center space-x-2 focus:outline-none">
                <div className="relative">
                  <img
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    alt="Profile"
                    className="h-8 w-8 rounded-full object-cover border border-gray-200 dark:border-gray-700"
                  />
                  <span className="absolute bottom-0 right-0 block h-2 w-2 rounded-full bg-green-500 ring-1 ring-white dark:ring-gray-800"></span>
                </div>
                <div className="hidden md:block text-left">
                  <p className="text-sm font-medium text-gray-700 dark:text-gray-200">
                    {userType === 'student' ? 'Alex Johnson' : 'Prof. Williams'}
                  </p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    {userType === 'student' ? 'Student' : 'Instructor'}
                  </p>
                </div>
                <ChevronDown className="h-4 w-4 text-gray-500 dark:text-gray-400" />
              </button>
            </div>
          </div>
        </div>
      </header>

      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar */}
        <aside
          className={`bg-white dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700 w-64 flex-shrink-0 fixed md:sticky top-[61px] h-[calc(100vh-61px)] z-20 transition-transform duration-300 transform ${
            sidebarOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'
          }`}
        >
          <div className="h-full flex flex-col overflow-y-auto py-4">
            <nav className="flex-1 px-4 space-y-1">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`flex items-center px-3 py-2 text-sm font-medium rounded-lg transition-colors ${
                    isActive(item.path)
                      ? 'bg-blue-50 dark:bg-blue-900/50 text-blue-700 dark:text-blue-300'
                      : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
                  }`}
                >
                  <span className={`mr-3 ${isActive(item.path) ? 'text-blue-600 dark:text-blue-400' : 'text-gray-500 dark:text-gray-400'}`}>
                    {item.icon}
                  </span>
                  {item.name}
                </Link>
              ))}
            </nav>

            <div className="px-4 mt-6">
              <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
                <Link
                  to="/settings"
                  className="flex items-center px-3 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  <Settings className="mr-3 h-5 w-5 text-gray-500 dark:text-gray-400" />
                  Settings
                </Link>
                <button className="flex w-full items-center px-3 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 mt-1">
                  <LogOut className="mr-3 h-5 w-5 text-gray-500 dark:text-gray-400" />
                  Sign out
                </button>
              </div>
            </div>

            {userType === 'student' && (
              <div className="px-4 mt-6">
                <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/50 dark:to-indigo-900/50 rounded-lg p-4 border border-blue-100 dark:border-blue-800">
                  <div className="flex items-center space-x-3">
                    <div className="p-2 bg-blue-100 dark:bg-blue-800 rounded-lg">
                      <MessageSquare className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-900 dark:text-gray-100">Need help?</h3>
                      <p className="text-xs text-gray-600 dark:text-gray-300 mt-1">
                        Ask our AI tutor for assistance with any caselet
                      </p>
                    </div>
                  </div>
                  <Link
                    to="/ai-tutor"
                    className="mt-3 text-sm font-medium text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 flex items-center"
                  >
                    Open AI Tutor
                    <ChevronDown className="h-4 w-4 ml-1 -rotate-90" />
                  </Link>
                </div>
              </div>
            )}
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 overflow-y-auto">
          {children}
        </main>
      </div>
    </div>
  );
};

export default MainLayout;