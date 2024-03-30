import Link from "next/link";

const Footer = () => {
    return (
        <section className="py-10 sm:pt-16 lg:pt-24">
            <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
                <div className="grid grid-cols-2 md:col-span-3 lg:grid-cols-6 gap-y-16 gap-x-12">
                    <div className="col-span-2 md:col-span-3 lg:col-span-2 lg:pr-8">
                        <Link href="/" className="flex items-center">
                            <img src="/logo.svg" className="mr-3 h-6 sm:h-9" alt="EduChain Logo" />
                            <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">EduChain</span>
                        </Link>

                        <p className="text-base leading-relaxed text-gray-600 mt-7">Breaking Barriers in Education: A Blockchain Solution to Democratize Learning</p>

                        <ul className="flex items-center space-x-3 mt-9">
                            <li>
                                <Link href="https://twitter.com/0xgauravv" target="_blank" className="flex items-center justify-center text-white transition-all duration-200 bg-gray-800 rounded-full w-7 h-7 hover:bg-blue-600 focus:bg-blue-600">
                                    <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                                        <path
                                            d="M19.633 7.997c.013.175.013.349.013.523 0 5.325-4.053 11.461-11.46 11.461-2.282 0-4.402-.661-6.186-1.809.324.037.636.05.973.05a8.07 8.07 0 0 0 5.001-1.721 4.036 4.036 0 0 1-3.767-2.793c.249.037.499.062.761.062.361 0 .724-.05 1.061-.137a4.027 4.027 0 0 1-3.23-3.953v-.05c.537.299 1.16.486 1.82.511a4.022 4.022 0 0 1-1.796-3.354c0-.748.199-1.434.548-2.032a11.457 11.457 0 0 0 8.306 4.215c-.062-.3-.1-.611-.1-.923a4.026 4.026 0 0 1 4.028-4.028c1.16 0 2.207.486 2.943 1.272a7.957 7.957 0 0 0 2.556-.973 4.02 4.02 0 0 1-1.771 2.22 8.073 8.073 0 0 0 2.319-.624 8.645 8.645 0 0 1-2.019 2.083z"
                                        ></path>
                                    </svg>
                                </Link>
                            </li>

                            <li>
                                <Link href="https://github.com/Sohamsk/Codeshastra-koolKidzKlub" target="_blank" className="flex items-center justify-center text-white transition-all duration-200 bg-gray-800 rounded-full w-7 h-7 hover:bg-blue-600 focus:bg-blue-600">
                                    <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                                        <path
                                            fill-rule="evenodd"
                                            clip-rule="evenodd"
                                            d="M12.026 2c-5.509 0-9.974 4.465-9.974 9.974 0 4.406 2.857 8.145 6.821 9.465.499.09.679-.217.679-.481 0-.237-.008-.865-.011-1.696-2.775.602-3.361-1.338-3.361-1.338-.452-1.152-1.107-1.459-1.107-1.459-.905-.619.069-.605.069-.605 1.002.07 1.527 1.028 1.527 1.028.89 1.524 2.336 1.084 2.902.829.091-.645.351-1.085.635-1.334-2.214-.251-4.542-1.107-4.542-4.93 0-1.087.389-1.979 1.024-2.675-.101-.253-.446-1.268.099-2.64 0 0 .837-.269 2.742 1.021a9.582 9.582 0 0 1 2.496-.336 9.554 9.554 0 0 1 2.496.336c1.906-1.291 2.742-1.021 2.742-1.021.545 1.372.203 2.387.099 2.64.64.696 1.024 1.587 1.024 2.675 0 3.833-2.33 4.675-4.552 4.922.355.308.675.916.675 1.846 0 1.334-.012 2.41-.012 2.737 0 .267.178.577.687.479C19.146 20.115 22 16.379 22 11.974 22 6.465 17.535 2 12.026 2z"
                                        ></path>
                                    </svg>
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <p className="text-sm font-semibold tracking-widest text-gray-400 uppercase">Company</p>

                        <ul className="mt-6 space-y-4">
                            <li>
                                <Link href="/about" title="" className="flex text-base text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600">
                                    About
                                </Link>
                            </li>

                            <li>
                                <Link href="/browse" title="" className="flex text-base text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600">
                                    Browse Courses
                                </Link>
                            </li>

                            <li>
                                <Link href="/course/enrol" title="" className="flex text-base text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600">
                                    Buy a Course
                                </Link>
                            </li>

                            <li>
                                <Link href="/course/create" title="" className="flex text-base text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600">
                                    Create a Course
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <p className="text-sm font-semibold tracking-widest text-gray-400 uppercase">Help</p>

                        <ul className="mt-6 space-y-4">
                            <li>
                                <Link href="/" className="flex text-base text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600">
                                    Customer Support
                                </Link>
                            </li>

                            <li>
                                <Link href="/" className="flex text-base text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600">
                                    Delivery Details
                                </Link>
                            </li>

                            <li>
                                <Link href="/" className="flex text-base text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600">
                                    Terms & Conditions
                                </Link>
                            </li>

                            <li>
                                <Link href="/" className="flex text-base text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600">
                                    Privacy Policy
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div className="col-span-2 md:col-span-1 lg:col-span-2 lg:pl-8">
                        <p className="text-sm font-semibold tracking-widest text-black hover:text-indigo-600">Subscribe to newsletter</p>

                        <form action="" method="POST" className="mt-6">
                            <div>
                                <label for="email" className="sr-only">Email</label>
                                <input type="email" name="email" id="email" placeholder="Enter your email" className="block w-full p-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md focus:outline-none focus:border-blue-600 caret-blue-600" />
                            </div>

                            <button type="submit" className="inline-flex items-center justify-center px-6 py-4 mt-3 font-semibold text-black transition-all duration-200 bg-indigo-600 hover:bg-black rounded-md hover:text-white focus:bg-blue-700">Subscribe</button>
                        </form>
                    </div>
                </div>

                <hr className="mt-16 mb-10 border-gray-200" />

                <p className="text-sm text-center text-gray-600">© Copyright 2024, All Rights Reserved by EduChain</p>
            </div>
        </section>

    )
}

export default Footer;