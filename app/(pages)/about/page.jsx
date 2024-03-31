import Footer from "@/app/components/Footer";
import React from "react";

const About = () => {
  return (
    <>
      <div className="2xl:container 2xl:mx-auto lg:py-16 lg:px-20 md:py-12 md:px-6 py-9 px-4">
        <div className="flex flex-col lg:flex-row justify-between gap-8">
          <div className="w-full lg:w-5/12 flex flex-col justify-center">
            <h1 className="text-3xl lg:text-4xl font-bold leading-9 text-gray-800 pb-4">About Us</h1>
            <p className="font-normal text-base leading-6 text-gray-600 ">
              We are a dedicated team of educators and blockchain experts passionate about transforming education. With a shared vision of making learning more accessible, transparent, and secure, we founded our blockchain-powered learning management system (LMS). Our mission is to empower learners, educators, and institutions worldwide by harnessing the potential of blockchain technology. Through continuous innovation and a commitment to excellence, we strive to revolutionize traditional learning paradigms and shape the future of education. Join us in our journey to redefine the way we learn, teach, and grow. Together, let's unlock the full potential of education with blockchain.
            </p>
          </div>
          <div className="w-full lg:w-8/12 ">
            <img className="w-full h-full" src="https://i.ibb.co/FhgPJt8/Rectangle-116.png" alt="A group of People" />
          </div>
        </div>

        <div className="flex lg:flex-row flex-col justify-between gap-8 pt-12">
          <div className="w-full lg:w-5/12 flex flex-col justify-center">
            <h1 className="text-3xl lg:text-4xl font-bold leading-9 text-gray-800 pb-4">Our Story</h1>
            <p className="font-normal text-base leading-6 text-gray-600 ">
              Welcome to our blockchain-powered learning management system (LMS). Founded by educators and blockchain enthusiasts, we're committed to revolutionizing education by leveraging blockchain technology. Our platform ensures transparent, secure, and immutable educational records. With features like decentralized credentialing and smart contracts, we streamline learning processes and foster peer-to-peer collaboration. Join us in shaping the future of education. Welcome to a world where learning knows no boundaries.
            </p>
          </div>
          <div className="w-full lg:w-8/12 lg:pt-8">
            <div className="grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 lg:gap-4 shadow-lg rounded-md">
              <div className="p-4 pb-6 flex justify-center flex-col items-center">
                <img className="md:block hidden" src="/person1.png" alt="Alexa featured Img" />
                <img className="md:hidden block" src="/person1.png" alt="Alexa featured Img" />
                <p className="font-medium text-xl leading-5 text-gray-800 mt-4">Gaurav</p>
              </div>
              <div className="p-4 pb-6 flex justify-center flex-col items-center">
                <img className="md:block hidden" src="/person2.png" alt="Olivia featured Img" />
                <img className="md:hidden block" src="/person2.png" alt="Olivia featured Img" />
                <p className="font-medium text-xl leading-5 text-gray-800 mt-4">Soham</p>
              </div>
              <div className="p-4 pb-6 flex justify-center flex-col items-center">
                <img className="md:block hidden" src="/person1.png" alt="Liam featued Img" />
                <img className="md:hidden block" src="/person1.png" alt="Liam featued Img" />
                <p className="font-medium text-xl leading-5 text-gray-800 mt-4">Sameer</p>
              </div>
              <div className="p-4 pb-6 flex justify-center flex-col items-center">
                <img className="md:block hidden" src="/person2.png" alt="Elijah featured img" />
                <img className="md:hidden block" src="/person2.png" alt="Elijah featured img" />
                <p className="font-medium text-xl leading-5 text-gray-800 mt-4">Yash</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default About;
