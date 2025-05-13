// import { FaHome } from "react-icons/fa";
// import { IoHomeOutline } from "react-icons/io5";
import { IoHomeOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

export default function Home() {
    return (
        <div>
            <div className="flex flex-col bg-[#F7F8F9] justify-end max-w-md mx-auto min-h-screen border border-gray-200 ">
                <div className="rounded-lg p-8 w-full flex flex-col items-center">
                    <div className="w-full max-w-sm mx-auto">
                        <h1 className="text-2xl font-semibold text-gray-900 mb-2">Welcome to PopX</h1>
                        <p className="text-gray-600 mb-8">This is a demo application for showcasing features.</p>

                        <Link to="/signup">
                            <button
                                className="w-full bg-purple-600 text-white py-3 rounded-md font-medium mb-3 hover:bg-purple-700 transition-colors"
                            >
                                Create Account
                            </button>
                        </Link>
                        <Link to="/login">
                            <button
                                className="w-full bg-purple-200 text-purple-800 py-3 rounded-md font-medium hover:bg-purple-300 transition-colors"
                            >
                                Already Registered? Login
                            </button>
                        </Link>
                    </div>
                </div>

            </div>
            {/* <div className="flex justify-center items-center gap-2">
                <div className="flex justify-center items-center gap-2 mt-4">
                    <Link to="/">
                        <IoHomeOutline className="text-3xl" />
                    </Link>
                    <span className="text-xl"> 1 of 4</span>
                </div>
            </div> */}
        </div>
    )
}