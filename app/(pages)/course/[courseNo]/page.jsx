// "use client";

// import React, { useState, useEffect } from 'react';
// import { useRouter } from 'next/navigation';
// import Image from 'next/image';
// import { ethers } from "ethers"

// // Replace this with your actual data fetching logic
// async function fetchCourseData(courseNo) {
//     // Fetch course data from your source (API, database, etc.)
//     return {
//         // Course data structure
//     };
// }

// const CourseNoPage = () => {
//     const router = useRouter();
//     const courseNo = router.query;

//     const [courseData, setCourseData] = useState(null);
//     const [isConnected, setIsConnected] = useState(false);

//     const connectToMetaMask = async () => {
//         if (typeof window.ethereum !== 'undefined') {
//             const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
//             setIsConnected(accounts.length > 0);
//         } else {
//             console.error('Please install MetaMask!');
//         }
//     };

//     const performTransaction = async () => {
//         // Implement your transaction logic using ethers library and course data
//         console.log('Performing transaction...');
//       };

//     useEffect(() => {
//         const fetchData = async () => {
//             const data = await fetchCourseData(courseNo);
//             setCourseData(data);
//         };

//         connectToMetaMask();
//         fetchData();
//     }, [courseNo, fetchCourseData]);

//     return (
//         <div className="container mx-auto px-4">
//             <h1 className="text-2xl font-bold mb-4">Course No: {courseNo}</h1>
//             {courseData ? (
//                 <>
//                     <div className="flex items-center mb-4">
//                         <Image
//                             src="/cta.png"
//                             alt={courseData.title}
//                             width={350}
//                             height={250}
//                             className="rounded-lg"
//                         />
//                         <div className="ml-4">
//                             <h2 className="text-xl font-semibold">{courseData.title}</h2>
//                             <p className="text-gray-700">{courseData.description}</p>
//                             <div className="flex items-center mt-4">
//                                 <span className="font-bold mr-2">Price:</span>
//                                 <span className="text-lg">{courseData.price}</span>
//                             </div>
//                             <div className="mt-4">
//                                 <h3 className="font-semibold">Reviews:</h3>
//                                 {/* Render reviews here, e.g., using a loop */}
//                             </div>
//                             <button
//                                 className={`
//                       py-2 px-4 bg-blue-500 hover:bg-blue-700 text-white font-bold rounded-md 
//                       ${!isConnected && 'disabled opacity-50 cursor-not-allowed'}
//                     `}
//                                 onClick={isConnected ? performTransaction : connectToMetaMask}
//                                 disabled={!isConnected} // Disable button if not connected
//                             >
//                                 {isConnected ? 'Buy Now' : 'Connect MetaMask'}
//                             </button>
//                         </div>
//                     </div>
//                     {/* ...Other course content */}
//                 </>
//             ) : (
//                 <div className="flex justify-center items-center h-screen">
//                     <div className="text-4xl font-bold">Loading course...</div>
//                 </div>
//             )}
//         </div>
//     );
// }

// export default CourseNoPage;


const CourseNoPage = () => {
    return (
        <div class="font-[sans-serif]">
            <div class="p-6 lg:max-w-7xl max-w-2xl max-lg:mx-auto">
                <div class="grid items-start grid-cols-1 lg:grid-cols-5 gap-12">
                    <div class="lg:col-span-3 w-full lg:sticky top-0 text-center p-8">
                        <img src="/cta.png" alt="Product" class="w-4/5 rounded object-cover" />
                    </div>
                    <div class="lg:col-span-2">
                        <h2 class="text-2xl font-extrabold text-gray-800">Espresso Elegante | Coffee</h2>
                        <div class="flex flex-wrap gap-4 mt-4">
                            <p class="text-gray-800 text-xl font-bold">1 ETH</p>
                            <p class="text-gray-400 text-xl"><strike>1.5 ETH</strike></p>
                        </div>
                        <div class="mt-8">
                            <h3 class="text-lg font-bold text-gray-800">About the coffee</h3>
                            <ul class="space-y-3 list-disc mt-4 pl-4 text-sm text-gray-800">
                                <li>A cup of coffee is a beverage essential because of its timeless appeal</li>
                                <li>Easy to prepare. It can be brewed using various methods, from drip machines to manual pour-overs.</li>
                                <li>Available in various sizes, from a standard espresso shot to a large Americano, catering to different preferences.</li>
                                <li>You can customize your coffee by adding cream, sugar, or flavorings to suit your taste preferences.</li>
                            </ul>
                        </div>
                        <div class="mt-8 max-w-md">
                            <h3 class="text-lg font-bold text-gray-800">Reviews(10)</h3>
                            <div class="space-y-3 mt-4">
                                <div class="flex items-center">
                                    <p class="text-sm text-gray-800 font-bold">5.0</p>
                                    <svg class="w-5 fill-gray-800 ml-1" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                                    </svg>
                                    <div class="bg-gray-300 rounded w-full h-2 ml-3">
                                        <div class="w-2/3 h-full rounded bg-gray-800"></div>
                                    </div>
                                    <p class="text-sm text-gray-800 font-bold ml-3">66%</p>
                                </div>
                                <div class="flex items-center">
                                    <p class="text-sm text-gray-800 font-bold">4.0</p>
                                    <svg class="w-5 fill-gray-800 ml-1" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                                    </svg>
                                    <div class="bg-gray-300 rounded w-full h-2 ml-3">
                                        <div class="w-1/3 h-full rounded bg-gray-800"></div>
                                    </div>
                                    <p class="text-sm text-gray-800 font-bold ml-3">33%</p>
                                </div>
                                <div class="flex items-center">
                                    <p class="text-sm text-gray-800 font-bold">3.0</p>
                                    <svg class="w-5 fill-gray-800 ml-1" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                                    </svg>
                                    <div class="bg-gray-300 rounded w-full h-2 ml-3">
                                        <div class="w-1/6 h-full rounded bg-gray-800"></div>
                                    </div>
                                    <p class="text-sm text-gray-800 font-bold ml-3">16%</p>
                                </div>
                                <div class="flex items-center">
                                    <p class="text-sm text-gray-800 font-bold">2.0</p>
                                    <svg class="w-5 fill-gray-800 ml-1" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                                    </svg>
                                    <div class="bg-gray-300 rounded w-full h-2 ml-3">
                                        <div class="w-1/12 h-full rounded bg-gray-800"></div>
                                    </div>
                                    <p class="text-sm text-gray-800 font-bold ml-3">8%</p>
                                </div>
                                <div class="flex items-center">
                                    <p class="text-sm text-gray-800 font-bold">1.0</p>
                                    <svg class="w-5 fill-gray-800 ml-1" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                                    </svg>
                                    <div class="bg-gray-300 rounded w-full h-2 ml-3">
                                        <div class="w-[6%] h-full rounded bg-gray-800"></div>
                                    </div>
                                    <p class="text-sm text-gray-800 font-bold ml-3">6%</p>
                                </div>
                            </div>
                            <div class="flex items-start mt-8">
                                <img src="https://readymadeui.com/team-2.webp" class="w-12 h-12 rounded-full border-2 border-white" />
                                <div class="ml-3">
                                    <h4 class="text-sm font-bold">John Doe</h4>
                                    <div class="flex space-x-1 mt-1">
                                        <svg class="w-4 fill-gray-800" viewBox="0 0 14 13" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                                        </svg>
                                        <svg class="w-4 fill-gray-800" viewBox="0 0 14 13" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                                        </svg>
                                        <svg class="w-4 fill-gray-800" viewBox="0 0 14 13" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                                        </svg>
                                        <svg class="w-4 fill-[#CED5D8]" viewBox="0 0 14 13" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                                        </svg>
                                        <svg class="w-4 fill-[#CED5D8]" viewBox="0 0 14 13" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                                        </svg>
                                        <p class="text-xs !ml-2 font-semibold">2 mins ago</p>
                                    </div>
                                    <p class="text-xs mt-4">The service was amazing. I never had to wait that long for my food. The staff was friendly and attentive, and the delivery was impressively prompt.</p>
                                </div>
                            </div>
                            <button type="button" class="w-full mt-8 px-4 py-2 bg-transparent border-2 border-gray-800 text-gray-800 font-bold rounded">Read all reviews</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CourseNoPage;