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
        <div className="font-[sans-serif]">
            <div className="p-6 lg:max-w-7xl max-w-2xl max-lg:mx-auto">
                <div className="grid items-start grid-cols-1 lg:grid-cols-5 gap-12">
                    <div className="lg:col-span-3 w-full lg:sticky top-0 text-center p-8">
                        <img src="/cta.png" alt="Product" className="w-4/5 rounded object-cover" />
                    </div>
                    <div className="lg:col-span-2">
                        <h2 className="text-2xl font-extrabold text-gray-800">
                            Intro to Web3 Development
                        </h2>
                        <div className="flex flex-wrap gap-4 mt-4">
                            <p className="text-gray-800 text-xl font-bold">1 ETH</p>
                            <p className="text-gray-400 text-xl"><strike>1.5 ETH</strike></p>
                        </div>
                        <div className="mt-8">
                            <h3 className="text-lg font-bold text-gray-800">About the course</h3>
                            <ul className="space-y-3 list-disc mt-4 pl-4 text-sm text-gray-800">
                                <li>Best suited for beginners entering the web3 space.</li>
                                <li>Gain theoretical as well as practical knowledge from industry experts.</li>
                                <li>Solve assigments & get them checked by the course instructor on real time basis.</li>
                                <li>Be job ready by the end of the course & gain valuable insights into how decentralized applications work.</li>
                            </ul>
                        </div>
                        <div className="mt-8 max-w-md">
                            <button type="button" className="w-full mt-8 px-4 py-2 bg-transparent border-2 bg-black text-white font-bold rounded">Buy Now</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CourseNoPage;