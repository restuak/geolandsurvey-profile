import { MdAssuredWorkload } from "react-icons/md";
export default function ServiceFront() {
  return (
    <main className="w-full h-full " id="service">
      <div>
        <h2 className="text-[#0C566D] text-4xl p-5 pb-0 font-bold justify-center items-center text-center">
          OUR SERVICE
        </h2>
      </div>

      <div className="container px-5 py-5 mx-auto flex flex-wrap text-white">
        <div className="h-full p-3 lg:w-1/3 ">
          <div className=" bg-[#992b39] px-8 pt-16 pb-16 relative rounded-3xl">
            <MdAssuredWorkload className="text-2xl mb-1 w-15 h-15" />
            <h1 className="font-bold sm:text-2xl text-xl  mb-3">
              Raclette Blueberry Nextious
            </h1>
            <p className="mb-3">
              Photo booth fam kinfolk cold-pressed sriracha leggings jianbing
              microdosing tousled waistcoat.
            </p>
          </div>
        </div>
        <div className="h-full p-3 lg:w-1/3">
          <div className="bg-[#992b39] px-8 pt-16 pb-16 relative rounded-3xl">
            <MdAssuredWorkload className="text-2xl mb-1 w-15 h-15" />
            <h1 className=" sm:text-2xl text-xl  mb-3">
              Ennui Snackwave Thundercats
            </h1>
            <p className="mb-3 ">
              Photo booth fam kinfolk cold-pressed sriracha leggings jianbing
              microdosing tousled waistcoat.
            </p>
          </div>
        </div>
        <div className="h-full p-3 lg:w-1/3">
          <div className="bg-[#992b39] px-8 pt-16 pb-16 relative rounded-3xl">
            <MdAssuredWorkload className="text-2xl mb-1 w-15 h-15" />
            <h1 className=" sm:text-2xl text-xl mb-3">
              Selvage Poke Waistcoat
            </h1>
            <p className="mb-3">
              Photo booth fam kinfolk cold-pressed sriracha leggings jianbing
              microdosing tousled waistcoat.
            </p>
          </div>
        </div>
      </div>
      <div className="text-white text-xl p-5 pt-0 pb-0 font-bold justify-center items-center text-center">
        <a className="bg-[#992b39] p-4  rounded-3xl " href="/service">
          Learn More to Our Service
        </a>
      </div>
    </main>
  );
}
