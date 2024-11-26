'use client';
import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter();

  const handleLogin = () => {
    router.push('admin/dashboard'); // Navigate to blogs page after login
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
        <input
          type="email"
          placeholder="Email"
          className="w-full p-2 border mb-4 rounded border-gray-500"
        />
        <input
          type="password"
          placeholder="Password"
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
