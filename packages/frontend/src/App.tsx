import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Toaster } from 'react-hot-toast';

// Components
import Layout from './components/Layout';
import ProtectedRoute from './components/ProtectedRoute';
import COPPAGate from './components/COPPAGate';

// Pages
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import StoryLibraryPage from './pages/StoryLibraryPage';
import StoryPlayerPage from './pages/StoryPlayerPage';
import CreateStoryPage from './pages/CreateStoryPage';
import ProfilePage from './pages/ProfilePage';
import ParentDashboardPage from './pages/ParentDashboardPage';
import NotFoundPage from './pages/NotFoundPage';

// Styles
import './styles/globals.css';

// Create a client
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5, // 5 minutes
      gcTime: 1000 * 60 * 30, // 30 minutes (was cacheTime in v4)
    },
  },
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <COPPAGate>
          <Layout>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/login" element={<LoginPage />} />
              
              {/* Protected Routes */}
              <Route path="/library" element={
                <ProtectedRoute>
                  <StoryLibraryPage />
                </ProtectedRoute>
              } />
              <Route path="/story/:id" element={
                <ProtectedRoute>
                  <StoryPlayerPage />
                </ProtectedRoute>
              } />
              <Route path="/create" element={
                <ProtectedRoute>
                  <CreateStoryPage />
                </ProtectedRoute>
              } />
              <Route path="/profile" element={
                <ProtectedRoute>
                  <ProfilePage />
                </ProtectedRoute>
              } />
              <Route path="/parent-dashboard" element={
                <ProtectedRoute>
                  <ParentDashboardPage />
                </ProtectedRoute>
              } />
              
              {/* Catch all route */}
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </Layout>
        </COPPAGate>
        
        {/* Toast notifications */}
        <Toaster
          position="top-right"
          toastOptions={{
            duration: 4000,
            style: {
              background: '#363636',
              color: '#fff',
            },
            success: {
              duration: 3000,
              iconTheme: {
                primary: '#4ade80',
                secondary: '#fff',
              },
            },
            error: {
              duration: 5000,
              iconTheme: {
                primary: '#ef4444',
                secondary: '#fff',
              },
            },
          }}
        />
      </Router>
    </QueryClientProvider>
  );
}

export default App;
