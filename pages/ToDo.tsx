import React from "react";

const ToDo = () => {
  return (
    <section className="my-6">
      <div className="">
        <label className="block text-sm font-medium leading-6 text-gray-900">
          To Do List:
        </label>
      </div>
      <div className="">
        <div className="mt-2">
          <textarea
            id="about"
            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          ></textarea>
        </div>
        <p className="mt-3 text-sm leading-6 text-gray-600">
          Update your list as you go.
        </p>
      </div>
    </section>
  );
};

export default ToDo;
