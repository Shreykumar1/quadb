import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { GlobalContext } from "../Context/GlobalState";

const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const { state, dispatch } = useContext(GlobalContext); // Access global state and dispatch
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        // Updated mock user credentials
        const mockUser = { username: "admin", password: "admin123" };

        // Validate credentials
        if (username === mockUser.username && password === mockUser.password) {
            dispatch({ type: "LOGIN_SUCCESS", payload: { username } }); // Update global state
            navigate("/"); // Redirect to home page
        } else {
            alert("Invalid username or password!");
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-green-50 to-green-100">
            <div className="bg-white p-8 rounded-lg shadow-xl w-96 border border-green-100">
                <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">Welcome Back</h2>
                <form onSubmit={handleSubmit} className="space-y-5">
                    <div>
                        <label className="block text-gray-700 text-sm font-semibold mb-2">Username</label>
                        <input
                            type="text"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            className="w-full p-3 border border-gray-300 rounded-lg mt-1 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
                            placeholder="Enter your username"
                        />
                    </div>
                    <div>
                        <label className="block text-gray-700 text-sm font-semibold mb-2">Password</label>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full p-3 border border-gray-300 rounded-lg mt-1 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
                            placeholder="Enter your password"
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 transition-all duration-200 font-semibold shadow-md hover:shadow-lg"
                    >
                        Sign In
                    </button>
                </form>
                <div className="mt-6 p-4 bg-gray-50 rounded-lg border border-gray-100">
                    <p className="text-sm text-gray-600 font-medium mb-2">Demo Credentials:</p>
                    <p className="text-sm text-gray-600"><strong>Username:</strong> admin</p>
                    <p className="text-sm text-gray-600"><strong>Password:</strong> admin123</p>
                </div>
            </div>
        </div>
    );
};

export default Login;
