import { IoHomeOutline } from "react-icons/io5"
import { Link, useNavigate } from "react-router-dom"
import { useState } from "react"

export default function Signup() {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        fullName: "",
        phoneNumber: "",
        email: "",
        password: "",
        companyName: "",
        agency: "",
    });

    const handleChange = (e) => {
        const { name, value, type } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;

        localStorage.setItem("email", email);
        localStorage.setItem("password", password);
        alert("Account created successfully!");
        // Navigate to profile or next step
        navigate("/profile");
    };


    return (
        <>
            <div className="flex flex-col  max-w-md mx-auto min-h-screen border border-gray-200">
                <div className="w-full max-w-sm mx-auto">
                    <h1 className="text-2xl mt-5 font-semibold text-gray-900 mb-6">Create your PopX account</h1>

                    <form onSubmit={handleSubmit} className="min-h-[calc(100vh-100px)]  flex flex-col justify-between">
                        <div>
                            <div className="mb-4">
                                <label htmlFor="fullName" className="block text-sm font-medium text-purple-600 mb-1">
                                    Full Name<span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="text"
                                    id="fullName"
                                    name="fullName"
                                    value={formData.fullName}
                                    onChange={handleChange}
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-purple-500"
                                    placeholder="Enter full name"
                                    required
                                />
                            </div>

                            <div className="mb-4">
                                <label htmlFor="phoneNumber" className="block text-sm font-medium text-purple-600 mb-1">
                                    Phone number<span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="tel"
                                    id="phoneNumber"
                                    name="phoneNumber"
                                    value={formData.phoneNumber}
                                    onChange={handleChange}
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-purple-500"
                                    placeholder="Enter phone number"
                                    required
                                />
                            </div>

                            <div className="mb-4">
                                <label htmlFor="email" className="block text-sm font-medium text-purple-600 mb-1">
                                    Email address<span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-purple-500"
                                    placeholder="Enter email address"
                                    required
                                />
                            </div>

                            <div className="mb-4">
                                <label htmlFor="password" className="block text-sm font-medium text-purple-600 mb-1">
                                    Password<span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="password"
                                    id="password"
                                    name="password"
                                    value={formData.password}
                                    onChange={handleChange}
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-purple-500"
                                    placeholder="Enter password"
                                    required
                                />
                            </div>

                            <div className="mb-4">
                                <label htmlFor="companyName" className="block text-sm font-medium text-purple-600 mb-1">
                                    Company name
                                </label>
                                <input
                                    type="text"
                                    id="companyName"
                                    name="companyName"
                                    value={formData.companyName}
                                    onChange={handleChange}
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-purple-500"
                                    placeholder="Enter company name"
                                />
                            </div>

                            <div className="mb-8">
                                <p className="block text-sm font-medium text-gray-700 mb-2">
                                    Are you an Agency?<span className="text-red-500">*</span>
                                </p>
                                <div className="flex items-center space-x-4">
                                    <label className="inline-flex items-center">
                                        <input
                                            type="radio"
                                            name="agency"
                                            value="Yes"
                                            checked={formData.agency === "Yes"}
                                            onChange={handleChange}
                                            className="form-radio h-5 w-5 text-purple-600"
                                        />
                                        <span className="ml-2">Yes</span>
                                    </label>
                                    <label className="inline-flex items-center">
                                        <input
                                            type="radio"
                                            name="agency"
                                            value="No"
                                            checked={formData.agency === "No"}
                                            onChange={handleChange}
                                            className="form-radio h-5 w-5 text-purple-600"
                                        />
                                        <span className="ml-2">No</span>
                                    </label>
                                </div>
                            </div>
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-purple-600 text-white py-3 rounded-md font-medium hover:bg-purple-700 transition-colors"
                        >
                            Create Account
                        </button>
                    </form>
                </div>
            </div>


        </>
    );
}
