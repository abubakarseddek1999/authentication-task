import { useEffect, useState } from "react";
import image from "../../assets/image.jpg"

export default function Profile() {
    const [user, setUser] = useState({ name: "", email: "" });

    useEffect(() => {
        const storedName = localStorage.getItem("name");
        const storedEmail = localStorage.getItem("email");

        if (storedName && storedEmail) {
            setUser({ name: storedName, email: storedEmail });
        }
    }, []);

    return (
        <div className="flex flex-col max-w-md mx-auto min-h-screen border bg-[#F7F8F9] border-gray-200">
            <div className="w-full">
                <div className="p-4 border-b border-gray-200 bg-white">
                    <h1 className="text-xl mt-5 font-semibold text-gray-900">Account Settings</h1>
                </div>

                <div className="bg-[#F7F8F9]">
                    <div className="p-4 flex items-start space-x-4">
                        <div className="relative">
                            <div className="h-16 w-16 rounded-full overflow-hidden bg-gray-200">
                                <img
                                    src={image}
                                    alt="Profile"
                                    width={64}
                                    height={64}
                                    className="h-full w-full object-cover"
                                />
                            </div>
                            <div className="absolute -bottom-1 -right-1 bg-purple-600 rounded-full p-1">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-4 w-4 text-white"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                >
                                    <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
                                </svg>
                            </div>
                        </div>

                        <div>
                            <h2 className="font-medium text-gray-900">{user.name}</h2>
                            <p className="text-gray-600 text-sm">{user.email}</p>
                        </div>
                    </div>

                    <div className=" ">
                        <div className="py-5 px-2 border-t border-gray-200">
                            <p className="text-gray-700 text-sm mb-5">
                                Welcome to your profile page! Here you can view and manage your account details, update your personal information, and customize your settings for a better experience.
                            </p>
                        </div>

                    </div>

                    <div className="border-t border-dashed border-gray-300 h-40"></div>
                    {/* <div className="border-t border-dashed border-gray-200 h-40"></div> */}
                </div>
            </div>
        </div>
    );
}
