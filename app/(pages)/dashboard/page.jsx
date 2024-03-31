"use client";

import Link from "next/link";

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { CardContent, Card, CardTitle, CardDescription, CardHeader } from "@/components/ui/card";

import { UserButton, useAuth, useUser } from "@clerk/nextjs";

const Dashboard = () => {

  const { userId } = useAuth();
  const { isLoaded, isSignedIn, user } = useUser();

  if (!isLoaded || !isSignedIn || !userId) {
    return null;
  }


  return (
    <div className="grid min-h-screen lg:grid-cols-[280px_1fr]">
      <div className="hidden border-r bg-gray-100/40 lg:block dark:bg-gray-800/40">
        <div className="flex h-full max-h-screen flex-col gap-2">
          <div className="flex h-[60px] items-center border-b px-6">
            <Link className="flex items-center gap-2 font-semibold" href="/">
              <Package2Icon className="h-6 w-6" />
              <span className="">EduChain</span>
            </Link>
          </div>
          <div className="flex-1 overflow-auto py-2">
            <nav className="grid items-start px-4 text-sm font-medium">
              <Link
                className="flex items-center gap-3 rounded-lg bg-gray-100 px-3 py-2 text-gray-900  transition-all hover:text-gray-900 dark:bg-gray-950 dark:text-gray-50 dark:hover:text-gray-50"
                href="/dashboard"
              >
                <HomeIcon className="h-4 w-4" />
                Home
              </Link>
              <Link
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                href="/orders"
              >
                <ShoppingCartIcon className="h-4 w-4" />
                Orders
              </Link>
              <Link
                className="flex items-center gap-3 rounded-lg bg-gray-100 px-3 py-2 text-gray-900  transition-all hover:text-gray-900"
                href="/browse"
              >
                <PackageIcon className="h-4 w-4" />
                Courses
              </Link>
            </nav>
          </div>
        </div>
      </div>
      <div className="flex flex-col">
        <header className="flex h-14 lg:h-[60px] items-center gap-4 border-b bg-gray-100/40 px-6 dark:bg-gray-800/40">
          <Link className="lg:hidden flex items-center gap-2 font-semibold" href="#">
            <Package2Icon className="h-6 w-6" />
            <span className="">EduChain</span>
          </Link>
          <div className="w-full flex-1">
            <form>
              <div className="relative">
                <SearchIcon className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500 dark:text-gray-400" />
                <Input
                  className="w-full bg-white shadow-none appearance-none pl-8 md:w-2/3 lg:w-1/3 dark:bg-gray-950"
                  placeholder="Search courses..."
                  type="search"
                />
              </div>
            </form>
          </div>
          <Button
            className="rounded-full w-8 h-8"
            size="icon"
            variant="ghost"
          >
            <UserButton afterSignOutUrl="/" />

          </Button>
        </header>
        <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-6">
          <Card className="p-4 md:grid md:grid-cols-[200px_1fr] lg:grid-cols-[200px_1fr]">
            <CardContent className="flex items-center gap-4 md:col-start-2 md:pl-4 lg:col-start-2 lg:pl-4">
              <div className="grid gap-1.5">
                <h1 className="font-bold text-2xl text-center">
                  {user.fullName}
                </h1>
                <p className="text-md text-black hover:text-indigo-600 text-center font-semibold">
                  Enthusiastic learner interested in blockchain technology
                </p>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="text-center">Recommended Courses</CardTitle>
              <CardDescription className="text-center text-black">Explore these courses to enhance your knowledge</CardDescription>
            </CardHeader>
            <CardContent className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              <Card>
                <CardContent className="flex flex-col gap-2">

                  <CardTitle className="mt-2">Introduction to Blockchain Technology</CardTitle>
                  <CardDescription className="text-black">
                    Learn the basics of blockchain, its applications, and its impact on various industries.
                  </CardDescription>
                  <Link href="/course/enrol" asChild>
                    <Button className="w-full bg-black hover:bg-indigo-600">Enroll</Button>
                  </Link>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="flex flex-col gap-2">

                  <CardTitle className="mt-2">Decentralized Finance Explained</CardTitle>
                  <CardDescription className="text-black">
                    Understand the world of DeFi, including lending, borrowing, and yield farming.
                  </CardDescription>
                  <Link href="/course/enrol" asChild>
                    <Button className="w-full bg-black hover:bg-indigo-600">Enroll</Button>
                  </Link>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="flex flex-col gap-2">

                  <CardTitle className="mt-2">Decentralized Finance Explained</CardTitle>
                  <CardDescription className="text-black">
                    Understand the world of DeFi, including lending, borrowing, and yield farming.
                  </CardDescription>
                  <Link href="/course/enrol" asChild>
                    <Button className="w-full bg-black hover:bg-indigo-600">Enroll</Button>
                  </Link>
                </CardContent>
              </Card>
            </CardContent>
          </Card>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;


function HomeIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
      <polyline points="9 22 9 12 15 12 15 22" />
    </svg>
  )
}



function Package2Icon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M3 9h18v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9Z" />
      <path d="m3 9 2.45-4.9A2 2 0 0 1 7.24 3h9.52a2 2 0 0 1 1.8 1.1L21 9" />
      <path d="M12 3v6" />
    </svg>
  )
}


function PackageIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m7.5 4.27 9 5.15" />
      <path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z" />
      <path d="m3.3 7 8.7 5 8.7-5" />
      <path d="M12 22V12" />
    </svg>
  )
}


function SearchIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  )
}


function ShoppingCartIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="8" cy="21" r="1" />
      <circle cx="19" cy="21" r="1" />
      <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
    </svg>
  )
}