import { Routes, Route } from 'react-router-dom';
import { createContext, useState, useContext } from 'react';
import './style.css';
import CardList from './components/CardList/CardList'
import Home from './components/Home/Home'
import CardD from './components/CardD/CardD';
import Navigation from './components/Navigation/Navigation';
import LoginForm from './components/LoginForm/LoginForm';
const UserContext = createContext();
function App() {
  const [username, setUsername] = useState(null);
  return (
    <UserContext.Provider value={{ setUsername, username }}>
    <Navigation/>
    <Routes>
      <Route path="/" element={<Home />}> </Route>
      <Route path="/store" element={<CardList />}> </Route>
      <Route path="/product/:id" element={<CardD />}> </Route>
      <Route path="/login" element={<LoginForm />}> </Route>
    </Routes>
    </UserContext.Provider>
  );
}
export const useUser = () => useContext(UserContext);

export default App;
