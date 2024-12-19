import React, { useState } from 'react';

    function Register({ onRegister }) {
      const [email, setEmail] = useState('');
      const [password, setPassword] = useState('');
      const [confirmPassword, setConfirmPassword] = useState('');

      const handleSubmit = (e) => {
        e.preventDefault();
        if (password === confirmPassword) {
          onRegister({ email, password });
        } else {
          alert('Passwords do not match');
        }
      };

      return (
        <form onSubmit={handleSubmit}>
          <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
          <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
          <input type="password" placeholder="Confirm Password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} required />
          <button type="submit">Register</button>
        </form>
      );
    }

    export default Register;
