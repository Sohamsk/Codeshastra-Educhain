import { Button } from "@/components/ui/button"

const EnrolToCourse = () => {
  return (
    <div className="w-full space-y-6 mb-8">
      <div className="mx-auto container flex flex-col items-center space-y-2 lg:max-w-6xl lg:space-y-4">
        <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl md:text-6xl">Courses</h1>
        <p className="text-black hover:text-indigo-600">Enhance your skills with our expertly curated courses.</p>
      </div>
      <div className="mx-auto grid max-w-4xl gap-6 lg:max-w-6xl lg:grid-cols-2 xl:gap-8">
        <div className="flex flex-col rounded-lg border">
          <img
            alt="Course"
            className="object-cover aspect-[16/9] rounded-t-lg"
            height="350"
            src="/cta.png"
            width="600"
          />
          <div className="p-6 flex-1">
            <div className="space-y-2">
              <h2 className="text-xl font-bold tracking-tight">
                The Complete Web3 Development Bootcamp 2024
              </h2>
              <p className="text-sm text-black">
                Progress from learning basics to advanced concepts of Web3 Development & get a job as fullstack blockchain developer !!
              </p>
            </div>
            <div className="mt-auto flex items-end justify-between">
              <div className="space-y-2 text-right">
                <div className="text-sm font-semibold">Price: 1 ETH</div>

              </div>
              <Button className="h-10" variant="outline">
                Buy Now
              </Button>
            </div>
          </div>
        </div>
        <div className="flex flex-col rounded-lg border">
          <img
            alt="Course"
            className="object-cover aspect-[16/9] rounded-t-lg"
            height="350"
            src="/cta.png"
            width="600"
          />
          <div className="p-6 flex-1">
            <div className="space-y-2">
              <h2 className="text-xl font-bold tracking-tight">Mastering Tailwind CSS</h2>
              <p className="text-sm text-black">
                Learn advanced techniques for styling your web apps. Learn to use NextJS apps & build fast applications. Designed for beginners!
              </p>
            </div>
            <div className="mt-auto flex items-end justify-between">
              <div className="space-y-2 text-right">
                <div className="text-sm font-semibold">Price: 1.5 ETH</div>

              </div>
              <Button className="h-10" variant="outline">
                Buy Now
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EnrolToCourse;

