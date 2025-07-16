export default function Stat() {
  return (
    <section className="container max-w-screen min-lg:max-w-screen h-1/5  relative flex justify-center items-center ">
      <div className=" bg-white shadow-lg rounded-xl px-6 py-4 gap-5 w-[350px] min-lg:w-[1000px] flex justify-between text-center">
        <div>
          <p className="text-sm min-lg:text-2xl text-gray-500">Land Survey</p>
          <p className="text-2xl min-lg:text-5xl p-1 min-lg:p-5 font-bold text-black">
            135
          </p>
          <p className="text-xs min-lg:text-xl text-gray-500">✓ Projects</p>
        </div>
        <div>
          <p className="text-sm min-lg:text-2xl text-gray-500">
            Photogrammetry
          </p>
          <p className="text-2xl min-lg:text-5xl p-1 min-lg:p-5 font-bold text-black">
            67
          </p>
          <p className="text-xs min-lg:text-xl text-gray-500">✓ Projects</p>
        </div>
        <div>
          <p className="text-sm min-lg:text-2xl text-gray-500">Web-GIS</p>
          <p className="text-2xl min-lg:text-5xl p-1 min-lg:p-5 font-bold text-black">
            72
          </p>
          <p className="text-xs min-lg:text-xl text-gray-500">✓ Projects</p>
        </div>
      </div>
    </section>
  );
}
