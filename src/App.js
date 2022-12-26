import { Routes, Route } from 'react-router-dom';
import './style.css';
import CardList from './components/CardList/CardList'
import Home from './components/Home/Home'
import CardD from './components/CardD/CardD';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />}> </Route>
      <Route path="/store" element={<CardList />}> </Route>
      <Route path="/product/:id" element={<CardD />}> </Route>
    </Routes>
  );
}

export default App;
