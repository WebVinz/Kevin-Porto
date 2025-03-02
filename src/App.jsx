import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Comp1 from './pages/Comp1';
import Comp2 from './pages/Comp2';
import Comp3 from './pages/Comp3';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pages/Comp1" element={<Comp1 />} />
        <Route path="/pages/Comp2" element={<Comp2 />} />
        <Route path="/pages/Comp3" element={<Comp3 />} />
      </Routes>
    </Router>
  );
}

export default App;
