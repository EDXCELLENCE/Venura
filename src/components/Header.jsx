import { useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import {
  BookOpen,
  ChevronDown,
  HelpCircle,
  Home,
  Info,
  LayoutDashboard,
  LogIn,
  LogOut,
  Menu,
  Phone,
  X,
} from 'lucide-react'
import { Link, useLocation, useNavigate } from 'react-router-dom'

export default function Header({ mobileMenuOpen, setMobileMenuOpen, handleNavClick, handleLogoClick }) {
  const navigate = useNavigate()
  const location = useLocation()

  const profileMenuRef = useRef(null)
  const mobileMenuRef = useRef(null)
  const headerRef = useRef(null)

  const [studentName, setStudentName] = useState(null)
  const [profileOpen, setProfileOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  const navItems = [
    { path: '/', label: 'Home', icon: Home },
    { path: '/programs', label: 'Programs', icon: BookOpen },
    { path: '/about', label: 'About', icon: Info },
    { path: '/faq', label: 'FAQ', icon: HelpCircle },
    { path: '/contact', label: 'Contact', icon: Phone },
  ]

  useEffect(() => {
    const updateHeaderOffset = () => {
      const headerHeight = headerRef.current?.offsetHeight ?? 64
      document.documentElement.style.setProperty('--site-header-offset', `${headerHeight}px`)
    }

    updateHeaderOffset()
    window.addEventListener('resize', updateHeaderOffset)

    return () => {
      window.removeEventListener('resize', updateHeaderOffset)
      document.documentElement.style.removeProperty('--site-header-offset')
    }
  }, [])

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10)

    handleScroll()
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const syncStudent = () => {
      const name = localStorage.getItem('studentName')
      const token = localStorage.getItem('studentToken')
      setStudentName(name && token ? name : null)
    }

    const onStorage = (event) => {
      if (!event.key || event.key === 'studentToken' || event.key === 'studentName') syncStudent()
    }

    syncStudent()
    window.addEventListener('storage', onStorage)
    window.addEventListener('studentLoginStatusChanged', syncStudent)

    return () => {
      window.removeEventListener('storage', onStorage)
      window.removeEventListener('studentLoginStatusChanged', syncStudent)
    }
  }, [])

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (profileMenuRef.current && !profileMenuRef.current.contains(event.target)) {
        setProfileOpen(false)
      }

      if (mobileMenuRef.current && !mobileMenuRef.current.contains(event.target) && mobileMenuOpen) {
        setMobileMenuOpen(false)
      }
    }

    document.addEventListener('mousedown', handleOutsideClick)
    return () => document.removeEventListener('mousedown', handleOutsideClick)
  }, [mobileMenuOpen, setMobileMenuOpen])

  useEffect(() => {
    setProfileOpen(false)
    setMobileMenuOpen(false)
  }, [location.pathname, setMobileMenuOpen])

  const handleStudentLogout = () => {
    localStorage.removeItem('studentToken')
    localStorage.removeItem('studentName')
    window.dispatchEvent(new Event('studentLoginStatusChanged'))
    setStudentName(null)
    setProfileOpen(false)
    setMobileMenuOpen(false)
    navigate('/')
  }

  const handleStudentLogin = () => {
    setProfileOpen(false)
    setMobileMenuOpen(false)
    window.open('https://venuratech.com/dashboard/student/login', '_blank', 'noopener,noreferrer')
  }

  const handleStudentDashboard = () => {
    setProfileOpen(false)
    setMobileMenuOpen(false)
    window.open('https://venuratech.com/dashboard/student', '_blank', 'noopener,noreferrer')
  }

  const handleMobileItemClick = () => {
    if (handleNavClick) handleNavClick()
    setMobileMenuOpen(false)
  }

  return (
    <header ref={headerRef} className="fixed block w-full z-50">
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.3 }}
        className={`transition-all duration-300 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-lg border-b border-gray-300 shadow-lg'
            : 'bg-white/95 backdrop-blur-sm border-b border-gray-300'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 md:px-0">
          <div className="flex items-center justify-between h-16">
            <Link to="/" className="flex items-center space-x-3 group" onClick={handleLogoClick}>
              <img className="md:h-8 h-8 w-auto object-contain" src="/logoicon.png" alt="Venura Icon" />
              <img className="md:h-8 h-8 w-auto object-contain" src="/logoname.png" alt="Venura" />
            </Link>

            <div className="hidden md:flex items-center space-x-1">
              {navItems.map((item) => {
                const active = location.pathname === item.path
                const Icon = item.icon

                return (
                  <Link
                    key={item.path}
                    to={item.path}
                    className={`flex ${item.bgColor || ''} items-center px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                      active ? 'text-blue-600 bg-blue-50' : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
                    }`}
                  >
                    <span className="mr-2">
                      <Icon size={16} />
                    </span>
                    {item.label}
                  </Link>
                )
              })}

              <div className="relative ml-2" ref={profileMenuRef}>
                {studentName ? (
                  <>
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => setProfileOpen((prev) => !prev)}
                      className="flex items-center space-x-3 bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-100 rounded-xl px-4 py-2 hover:shadow-md transition-shadow"
                    >
                      <div className="relative">
                        <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center">
                          <span className="text-white font-medium text-sm">{studentName.charAt(0).toUpperCase()}</span>
                        </div>
                        <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-green-500 rounded-full border-2 border-white" />
                      </div>

                      <div className="text-left">
                        <p className="text-sm font-medium text-gray-900 truncate max-w-[120px]">{studentName}</p>
                        <p className="text-xs text-gray-500">Student</p>
                      </div>

                      <ChevronDown className={`text-gray-400 transition-transform duration-200 ${profileOpen ? 'rotate-180' : ''}`} size={16} />
                    </motion.button>

                    <AnimatePresence>
                      {profileOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: 10, scale: 0.95 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: 10, scale: 0.95 }}
                          transition={{ duration: 0.2 }}
                          className="absolute right-0 mt-2 w-64 bg-white rounded-xl shadow-xl border border-gray-200 z-50 overflow-hidden"
                        >
                          <div className="p-4 border-b border-gray-100 bg-gradient-to-r from-blue-50 to-indigo-50">
                            <div className="flex items-center space-x-3">
                              <div>
                                <p className="font-medium text-gray-900">{studentName}</p>
                                <p className="text-xs text-blue-600">Student Portal</p>
                              </div>
                            </div>
                          </div>

                          <div className="p-2">
                            <motion.button
                              whileHover={{ x: 5 }}
                              onClick={handleStudentDashboard}
                              className="flex w-full items-center px-4 py-3 text-sm text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
                            >
                              <LayoutDashboard className="mr-3 text-gray-400" size={16} />
                              Dashboard
                            </motion.button>

                            <motion.button
                              whileHover={{ x: 5 }}
                              onClick={handleStudentLogout}
                              className="flex w-full items-center px-4 py-3 text-sm text-red-600 rounded-lg hover:bg-red-50 transition-colors"
                            >
                              <LogOut className="mr-3" size={16} />
                              Sign Out
                            </motion.button>
                          </div>

                          <div className="border-t border-gray-100 p-3 bg-gray-50">
                            <p className="text-xs text-gray-500 text-center">Secure session - v2.0</p>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </>
                ) : (
                  <button
                    type="button"
                    onClick={handleStudentLogin}
                    className="flex items-center bg-black rounded-3xl text-white px-5 py-2.5 font-medium"
                  >
                    <LogIn className="mr-2" size={16} />
                    Student LogIn
                  </button>
                )}
              </div>
            </div>

            <div className="md:hidden flex items-center">
              {studentName && (
                <div className="mr-3">
                  <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center">
                    <span className="text-white font-medium text-xs">{studentName.charAt(0).toUpperCase()}</span>
                  </div>
                </div>
              )}

              <motion.button
                whileTap={{ scale: 0.95 }}
                onClick={() => setMobileMenuOpen((prev) => !prev)}
                className="p-2 text-gray-700 hover:text-blue-600 rounded-lg hover:bg-gray-100"
              >
                {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </motion.button>
            </div>
          </div>
        </div>

        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              ref={mobileMenuRef}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.2 }}
              className="md:hidden bg-white border-t border-gray-200 shadow-xl"
            >
              <div className="px-4 py-3">
                {studentName && (
                  <div className="mb-6 p-4 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl">
                    <div className="flex items-center space-x-3">
                      <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center">
                        <span className="text-white font-medium text-lg">{studentName.charAt(0).toUpperCase()}</span>
                      </div>
                      <div>
                        <p className="font-medium text-gray-900">{studentName}</p>
                        <p className="text-sm text-blue-600">Student Account</p>
                      </div>
                    </div>
                  </div>
                )}

                <div className="space-y-1">
                  {navItems.map((item) => {
                    const active = location.pathname === item.path
                    const Icon = item.icon

                    return (
                      <motion.div key={item.path} whileTap={{ scale: 0.98 }}>
                        <Link
                          to={item.path}
                          onClick={handleMobileItemClick}
                          className={`flex items-center px-4 py-3 rounded-lg text-sm font-medium ${
                            active ? 'text-blue-600 bg-blue-50' : 'text-gray-700 hover:bg-gray-50'
                          }`}
                        >
                          <span className="mr-3">
                            <Icon size={16} />
                          </span>
                          {item.label}
                        </Link>
                      </motion.div>
                    )
                  })}
                </div>

                <div className="mt-6 pt-6 border-t border-gray-200 space-y-2">
                  {studentName ? (
                    <>
                      <motion.button
                        whileTap={{ scale: 0.98 }}
                        onClick={handleStudentDashboard}
                        className="flex w-full items-center justify-center px-4 py-3 bg-gradient-to-r from-blue-50 to-indigo-50 text-blue-700 rounded-lg font-medium"
                      >
                        <LayoutDashboard className="mr-2" size={16} />
                        Go to Dashboard
                      </motion.button>

                      <motion.button
                        whileTap={{ scale: 0.98 }}
                        onClick={handleStudentLogout}
                        className="flex w-full items-center justify-center px-4 py-3 bg-gradient-to-r from-red-50 to-pink-50 text-red-600 rounded-lg font-medium"
                      >
                        <LogOut className="mr-2" size={16} />
                        Sign Out
                      </motion.button>
                    </>
                  ) : (
                    <motion.div whileTap={{ scale: 0.98 }}>
                      <button
                        type="button"
                        onClick={handleStudentLogin}
                        className="flex items-center justify-center px-4 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-lg font-medium shadow-sm"
                      >
                        <LogIn className="mr-2" size={16} />
                        Student Login
                      </button>
                    </motion.div>
                  )}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </header>
  )
}
