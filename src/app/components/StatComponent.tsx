import { FaUserCheck } from "react-icons/fa";
import { FaUserXmark } from "react-icons/fa6";
import { GiTeacher } from "react-icons/gi";
import { PiStudentFill } from "react-icons/pi";

export default function StatComponent() {
  return (
    <section className="text-gray-700 body-font">
      <div className="container px-5 py-2 mx-auto">
        <div className="flex flex-wrap -m-4 text-center">
          <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
            <div className="border-2 border-gray-600 px-4 py-6 rounded-lg transform transition duration-500 ">
              <PiStudentFill className="text-indigo-500 w-12 h-12 mb-3 inline-block" />
              <h2 className="title-font font-medium text-3xl text-gray-900">
                2.7K
              </h2>
              <p className="leading-relaxed">Học sinh</p>
            </div>
          </div>
          <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
            <div className="border-2 border-gray-600 px-4 py-6 rounded-lg transform transition duration-500 ">
              <GiTeacher className="text-indigo-500 w-12 h-12 mb-3 inline-block" />
              <h2 className="title-font font-medium text-3xl text-gray-900">
                1.3K
              </h2>
              <p className="leading-relaxed">GLV</p>
            </div>
          </div>
          <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
            <div className="border-2 border-gray-600 px-4 py-6 rounded-lg transform transition duration-500 ">
              <FaUserCheck className="text-indigo-500 w-12 h-12 mb-3 inline-block" />
              <h2 className="title-font font-medium text-3xl text-gray-900">
                74
              </h2>
              <p className="leading-relaxed">Files</p>
            </div>
          </div>
          <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
            <div className="border-2 border-gray-600 px-4 py-6 rounded-lg transform transition duration-500 ">
              <FaUserXmark className="text-indigo-500 w-12 h-12 mb-3 inline-block" />
              <h2 className="title-font font-medium text-3xl text-gray-900">
                46
              </h2>
              <p className="leading-relaxed">Places</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
