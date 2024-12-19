import React, { useState } from 'react';
    import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
    import Home from './pages/Home.jsx';
    import Listings from './pages/Listings.jsx';
    import Contact from './pages/Contact.jsx';
    import Navbar from './components/Navbar.jsx';
    import Login from './pages/Login.jsx';
    import Register from './pages/Register.jsx';
    import Profile from './pages/Profile.jsx';
    import PostProperty from './pages/PostProperty.jsx';
    import Chat from './pages/Chat.jsx';
    import AdminDashboard from './pages/AdminDashboard.jsx';
    import Payment from './pages/Payment.jsx';

    function App() {
      const [user, setUser] = useState(null);
      const [properties, setProperties] = useState([]);

      const handleLogin = (userData) => {
        setUser(userData);
      };

      const handleRegister = (userData) => {
        setUser(userData);
      };

      const handlePostProperty = (property) => {
        setProperties(prevProperties => [...prevProperties, property]);
      };

      return (
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/listings" element={<Listings properties={properties} />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/login" element={<Login onLogin={handleLogin} />} />
            <Route path="/register" element={<Register onRegister={handleRegister} />} />
            <Route path="/profile" element={<Profile user={user} />} />
            <Route path="/post-property" element={<PostProperty onPost={handlePostProperty} />} />
            <Route path="/chat" element={<Chat user={user} agent="Agent A" />} />
            <Route path="/admin" element={<AdminDashboard />} />
            <Route path="/payment" element={<Payment />} />
          </Routes>
        </Router>
      );
    }

    export default App;
