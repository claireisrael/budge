import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import '@mantine/core/styles.css';
import AuthPage from './components/AuthPage';
import Dashboard from './components/Dashboard';
import Expenses from './components/Expenses';
import Settings from './components/Settings';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Routes>
          {/* Unauthenticated layout */}
          <Route
            path="/"
            element={
              <div className="flex flex-col w-full min-h-screen">
                <main className="flex-grow">
                  <AuthPage />
                </main>
                <Footer />
              </div>
            }
          />
          {/* Authenticated layout */}
          <Route
            path="/*"
            element={
              <div className="flex min-h-screen">
                <Sidebar />
                <div className="flex-grow ml-64 flex flex-col">
                  <main className="flex-grow bg-gray-100 p-6">
                    <Routes>
                      <Route path="dashboard" element={<Dashboard />} />
                      <Route path="expenses" element={<Expenses />} />
                      <Route path="settings" element={<Settings />} />
                      {/* Redirect to dashboard by default */}
                      <Route path="*" element={<Navigate to="/dashboard" />} />
                    </Routes>
                  </main>
                  <Footer />
                </div>
              </div>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
