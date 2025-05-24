import { Routes, Route, useLocation } from 'react-router-dom';
import { Layout } from './components/layout/Layout';
import { ContentArea } from './components/layout/ContentArea';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import ButtonDoc from './pages/ButtonDoc';
import Home from './pages/Home';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const location = useLocation();

  if (location.pathname === '/') {
    return (
      <>
        <Header />
        <Home />
        <ToastContainer />
      </>
    );
  }

  return (
    <Layout>
      <Sidebar />
      <div>
        <Header />
        <ContentArea>
          <Routes>
            <Route path="/button" element={<ButtonDoc />} />
          </Routes>
        </ContentArea>
      </div>
      <ToastContainer />
    </Layout>
  );
}

export default App;