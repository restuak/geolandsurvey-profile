import { MdAssuredWorkload } from "react-icons/md";
export default function ServiceFront() {
  return (
    <main className="w-full h-full " id="service">
      <div>
        <h2 className="text-[#0C566D] text-4xl p-5 pb-0 font-bold justify-center items-center text-center">
          OUR SERVICE
        </h2>
      </div>

      <div className="container px-5 py-5 mx-auto flex flex-wrap text-#0a0a0a">
        <div className="h-full p-3 lg:w-1/3 ">
          <div className=" bg-[#d4d4d4] px-8 pt-16 pb-16 relative rounded-3xl">
            <MdAssuredWorkload className="text-2xl mb-1 w-15 h-15" />
            <h1 className="font-bold sm:text-2xl text-xl  mb-3">
              GIS (Geographic Information System) or Web-GIS
            </h1>
            <p className="mb-3">
              A system used to manage, analyze, and visualize spatial data.
              Examples include mapping infrastructure, land zoning, or
              identifying flood-prone areas.
            </p>
          </div>
        </div>
        <div className="h-full p-3 lg:w-1/3">
          <div className="bg-[#d4d4d4] px-8 pt-16 pb-16 relative rounded-3xl">
            <MdAssuredWorkload className="text-2xl mb-1 w-15 h-15" />
            <h1 className=" font-bold sm:text-2xl text-xl  mb-3">
              Land Survey
            </h1>
            <p className="mb-3 ">
              Accurate measurement and mapping of land positions using tools
              like total stations or GNSS. Commonly used for construction
              planning, land ownership boundaries, or spatial development.
            </p>
          </div>
        </div>
        <div className="h-full p-3 lg:w-1/3">
          <div className="bg-[#d4d4d4] px-8 pt-16 pb-16 relative rounded-3xl">
            <MdAssuredWorkload className="text-2xl mb-1 w-15 h-15" />
            <h1 className=" font-bold sm:text-2xl text-xl mb-3">
              Photogrammetry
            </h1>
            <p className="mb-3">
              A technique for creating maps or 3D models from aerial or drone
              imagery. Ideal for topographic mapping, mining volume
              calculations, or large-scale area documentation efficiently.
            </p>
          </div>
        </div>
      </div>
      <div className="text-#0a0a0a text-xl p-5 pt-0 pb-0 font-bold justify-center items-center text-center">
        <a className="bg-[#d4d4d4] p-4  rounded-3xl " href="/service">
          Learn More to Our Service
        </a>
      </div>
    </main>
  );
}
