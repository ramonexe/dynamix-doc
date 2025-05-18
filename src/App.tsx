import { Routes, Route, useLocation } from 'react-router-dom';
import { Layout } from './components/layout/Layout';
import { ContentArea } from './components/layout/ContentArea';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import ButtonDoc from './pages/ButtonDoc';
import Home from './pages/Home';

function App() {
  const location = useLocation();

  return (
    <Layout>
      {location.pathname !== '/' && <Sidebar />}
      <div>
        <Header />
        <ContentArea>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/button" element={<ButtonDoc />} />
          </Routes>
        </ContentArea>
      </div>
    </Layout>
  );
}

export default App;