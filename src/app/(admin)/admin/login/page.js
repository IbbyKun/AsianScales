'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../../../../firebase';
import { isAdmin } from '../../../../../firebase';

export default function Home() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const router = useRouter();

  const handleLogin = async () => {
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      // Check if the logged-in user is the admin
      if (isAdmin(user.email)) {
        router.push('/admin/dashboard');
      } else {
        setError('Access denied. You are not the admin.');
      }
    } catch (err) {
      setError('Invalid credentials. Please try again.');
    }
  };

  return (
    <div className="h-screen flex flex-col items-center justify-center bg-customGray">
      <div className="w-96 p-6 bg-white rounded shadow">
        <h1 className="flex justify-center text-4xl font-bold mb-8 text-black mt-4">
          Login
        </h1>
        <p className="flex justify-center text-sm mb-6 text-gray-500 ">
          Enter your credentials
        </p>
        {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-2 border mb-4 rounded border-gray-500"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-2 border mb-4 rounded border-gray-500"
        />
        <button
          className="w-full bg-blue-500 text-white py-2 rounded"
          onClick={handleLogin}
        >
          Login
        </button>
      </div>
    </div>
  );
}
