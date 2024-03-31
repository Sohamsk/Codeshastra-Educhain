"use client"
import { PhotoIcon, UserCircleIcon } from '@heroicons/react/24/solid';
import axios from 'axios';
import { useState } from 'react';

const CreateCoursePage = () => {
  const [body, setBody] = useState({
    title: "",
    price: 0,
    about: ""
  })

 async function handleSubmit(e) {
    e.preventDefault()
    await axios.post('/api/courses/upload', body)
  }
  return (
    <>
    <form className='mb-16' onSubmit={ handleSubmit } encType='multipart/form-data'>
      <div className="mt-4 lg:max-w-2xl sm:max-w-xl">
        <div className="border-b border-gray-900/10 pb-12">
          <h2 className="text-2xl font-bold text-center leading-7 text-black">
            Upload a new course
          </h2>
          <p className="mt-1 text-md leading-6 text-black text-center">
            Add a PDF as the course content. Make sure the course is structured & well designed for all learners.
          </p>

          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="sm:col-span-4">
              <label htmlFor="title" className="block text-sm font-medium leading-6 text-black">
                Course Title
              </label>
              <div className="mt-2">
                <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                  <span className="flex select-none items-center pl-3 text-black sm:text-sm">

                  </span>
                  <input
                    type="text"
                    name="title"
                    id="title"
                    autoComplete="title"
                    className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-black placeholder:text-black focus:ring-0 sm:text-sm sm:leading-6"
                    placeholder="Fullstack Web3 Developer Bootcamp" onChange={e => setBody({...body, title: e.target.value})} required
                  />
                </div>
              </div>
            </div>

            <div className="sm:col-span-4">
              <label htmlFor="price" className="block text-sm font-medium leading-6 text-black">
                Course Price (MATIC)
              </label>
              <div className="mt-2">
                <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                  <span className="flex select-none items-center pl-3 text-black sm:text-sm">

                  </span>
                  <input
                    type="number"
                    name="price"
                    id="price"
                    autoComplete="price"
                    className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-black placeholder:text-black focus:ring-0 sm:text-sm sm:leading-6"
                    placeholder="1 MATIC" onChange={e => setBody({...body,price: e.target.value})} required
                  />
                </div>
              </div>
            </div>

            <div className="col-span-full">
              <label htmlFor="about" className="block text-sm font-medium leading-6 text-black">
                About
              </label>
              <div className="mt-2">
                <textarea
                  id="about"
                  name="about"
                  rows={3}
                  className="block w-full rounded-md border-0 py-1.5 text-black shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-black focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  defaultValue={''} onChange={e => setBody({...body,about: e.target.value})} required
                />
              </div>
              <p className="mt-3 text-sm leading-6 text-black">
                List the objectives, requirements and any other relevant information about this course
              </p>
            </div>


            <div className="col-span-full">
              <label htmlFor="cover-photo" className="block text-sm font-medium leading-6 text-black">
                Course Content
              </label>
              <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
                <div className="text-center">
                  <PhotoIcon className="mx-auto h-12 w-12 text-black" aria-hidden="true" />
                  <div className="mt-4 flex text-sm leading-6 text-black">
                    <label
                      htmlFor="file-upload"
                      className="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
                    >
                      <span>Upload a file</span>
                      <input id="file-upload" name="file-upload" accept="application/pdf" type="file" className="sr-only" />
                    </label>
                    <p className="pl-1">or drag and drop</p>
                  </div>
                  <p className="text-xs leading-5 text-black">PDF only</p>
                </div>
              </div>
            </div>

            <div className="col-span-full">
              <label htmlFor="cover-photo" className="block text-sm font-medium leading-6 text-black">
                Cover Photo
              </label>
              <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
                <div className="text-center">
                  <PhotoIcon className="mx-auto h-12 w-12 text-black" aria-hidden="true" />
                  <div className="mt-4 flex text-sm leading-6 text-black">
                    <label
                      htmlFor="file-upload"
                      className="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
                    >
                      <span>Upload a file</span>
                      <input id="file-upload" name="file-upload" type="image" accept="image/*" className="sr-only" />
                    </label>
                    <p className="pl-1">or drag and drop</p>
                  </div>
                  <p className="text-xs leading-5 text-black">PNG/JPG/JPEG</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-6 flex items-center justify-end gap-x-6">
        <button type="button" className="rounded-md w-full px-3 py-2 text-sm font-semibold text-white shadow-sm hover:text-white bg-indigo-600 hover:bg-black">
          Cancel
        </button>
        <button
          type="submit"
          className="rounded-md w-full px-3 py-2 text-sm font-semibold text-white shadow-sm hover:text-white bg-indigo-600 hover:bg-black"
        >
          Save
        </button>
      </div>
    </form>
    </>
  );
};

export default CreateCoursePage;
