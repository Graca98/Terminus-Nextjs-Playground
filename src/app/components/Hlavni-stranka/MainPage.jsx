import Informace from "./Informace";
import Pravidla from "./Pravidla";
import Download from "./Download";

const MainPage = () => {
  return <div className="">
    <div className="p-6 md:p-16">
      <div className="border-y-4 border-black bg-gray-400 text-center py-2 my-12">Next page</div>
      <Informace></Informace>
      <div className="border-y-4 border-black bg-gray-400 text-center py-2 my-12">Next page</div>
      <Pravidla></Pravidla>
      <div className="border-y-4 border-black bg-gray-400 text-center py-2 my-12">Next page</div>
      <Download></Download>
    </div>
  </div>
}

export default MainPage