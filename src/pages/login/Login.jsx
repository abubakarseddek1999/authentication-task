import { IoHomeOutline } from "react-icons/io5";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

export default function Login() {
    const navigate = useNavigate();

    const [userData, setUserData] = useState({
        email: "",
        password: ""
    });

    const [error, setError] = useState("");

    const onUpdateUserData = (data) => {
        setUserData((prev) => ({ ...prev, ...data }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const storedEmail = localStorage.getItem("email");
        const storedPassword = localStorage.getItem("password");
        
        if (
          storedEmail === userData.email &&
          storedPassword === userData.password
        ) {
          navigate("/profile");
        } else {
          setError("Invalid email or password!");
        }
    };


    return (
        <div>
            <div className="flex flex-col bg-[#F7F8F9] max-w-md mx-auto min-h-screen border border-gray-200">
                <div className="w-full max-w-sm mx-auto mt-5">
                    <h1 className="text-2xl font-semibold text-gray-900 mb-2">Signin to your PopX account</h1>
                    <p className="text-gray-600 mb-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>

                    <form onSubmit={handleSubmit}>
                        <div className="mb-4">
                            <label htmlFor="email" className="block text-sm font-medium text-purple-600 mb-1">
                                Email Address
                            </label>
                            <input
                                type="email"
                                id="email"
                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-purple-500"
                                placeholder="Enter email address"
                                onChange={(e) => onUpdateUserData({ email: e.target.value })}
                                required
                            />
                        </div>

                        <div className="mb-6">
                            <label htmlFor="password" className="block text-sm font-medium text-purple-600 mb-1">
                                Password
                            </label>
                            <input
                                type="password"
                                id="password"
                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-purple-500"
                                placeholder="Enter password"
                                onChange={(e) => onUpdateUserData({ password: e.target.value })}
                                required
                            />
                        </div>

                        {error && <p className="text-red-500 text-sm mb-4">{error}</p>}

                        <button
                            type="submit"
                            className="w-full bg-purple-600 text-white py-3 rounded-md font-medium hover:bg-purple-700 transition-colors"
                        >
                            Login
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}
