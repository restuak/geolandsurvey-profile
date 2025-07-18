import axios from "axios";

type User = {
  name: {
    first: string;
    last: string;
  };
  email: string;
  picture: {
    thumbnail: string;
  };
  location: {
    state: string;
    country: string;
  };
  phone: string;
};
export default async function DataTeam() {
  const teamMan = await axios.get(
    "https://randomuser.me/api/?nat=dk&results=1"
  );
  const manteam: User[] = teamMan.data.results;

  const teamOp = await axios.get(
    "https://randomuser.me/api/?nat=us,dk,fr,gb&results=4"
  );
  const opteam: User[] = teamOp.data.results;

  const teamSurvey = await axios.get(
    "https://randomuser.me/api/?nat=fr,gb&results=12"
  );
  const surveyteam: User[] = teamSurvey.data.results;

  return (
    <main className="pb-20 w-full h-full ">
      <div>
        <h2 className="text-[#0C566D] text-3xl min-md:text-4xl p-3  pb-0 font-bold justify-center items-center text-center">
          MEET OUR TEAM
        </h2>
      </div>
      <div className="container  text-white  sm:w-full gap-5 px-5 py-5 mx-auto flex flex-wrap ">
        <p className=" p-10 pt-3 pb-0  text-lg min-md:text-2xl mb-4 text-black justify-center-safe">
          Our geodetic survey team specializes in providing precise and reliable
          surveying solutions. With a commitment to excellence, we ensure
          accurate data collection and analysis for all your geospatial needs.
        </p>
        <h2 className="text-black font-bold text-2xl min-md:text-3xl p-5 pb-0 relative mx-auto flex flex-wrap justify-center items-center text-center">
          DIRECTOR
        </h2>
        <div className="container p-6 max-sm:p-5 grid grid-cols-0 md:grid-cols-0 lg:grid-cols-0 justify-center items-center text-center">
          {manteam.map((manTeam, index) => (
            <li key={index} className="border p-4 rounded shadow">
              <img
                src={manTeam.picture.thumbnail}
                alt={`${manTeam.name.first} ${manTeam.name.last}`}
                className="rounded-full p-2 w-25 h-25 relative mx-auto flex flex-wrap justify-center items-center text-center"
              />
              <div className="font-semibold text-lg text-[#0C566D]">
                {manTeam.name.first} {manTeam.name.last}
              </div>
              <div className="text-sm font-semibold text-neutral-950">
                {manTeam.location.state}-{manTeam.location.country}
              </div>
              <div className="text-sm font-normal text-neutral-950 text-center">
                {manTeam.email}
              </div>
              <div className="text-sm font-normal text-neutral-950">
                {manTeam.phone}
              </div>
            </li>
          ))}{" "}
        </div>
        <div className="font-semibold text-lg text-[#0C566D]"></div>

        <h2 className="text-black font-bold text-2xl min-md:text-3xl p-5 pb-0 relative mx-auto flex flex-wrap justify-center items-center text-center">
          OPERASIONAL TEAM
        </h2>
        <div className="container p-3 min-md:p-10 gap-5 grid grid-cols-0 min-md:grid-cols-4 justify-center items-center text-center">
          {opteam.map((opTeam, index) => (
            <li key={index} className="border p-4 rounded shadow">
              <img
                src={opTeam.picture.thumbnail}
                alt={`${opTeam.name.first} ${opTeam.name.last}`}
                className="rounded-full p-2 w-25 h-25 relative mx-auto flex flex-wrap justify-center items-center text-center"
              />
              <div className="font-semibold text-lg text-[#0C566D]">
                {opTeam.name.first} {opTeam.name.last}
              </div>
              <div className="text-sm font-semibold text-neutral-950">
                {opTeam.location.state}-{opTeam.location.country}
              </div>
              <div className="text-sm font-normal text-neutral-950 text-center">
                {opTeam.email}
              </div>
              <div className="text-sm font-normal text-neutral-950">
                {opTeam.phone}
              </div>
            </li>
          ))}{" "}
        </div>

        <h2 className="text-black font-bold text-2xl min-md:text-3xl p-5 pb-0 relative mx-auto flex flex-wrap justify-center items-center text-center">
          SURVEY TEAM
        </h2>
        <div className="container p-3 min-md:p-10 gap-5 grid grid-cols-2 min-md:grid-cols-4 justify-center items-center text-center">
          {surveyteam.map((surveyTeam, index) => (
            <li key={index} className="border p-4 rounded shadow">
              <img
                src={surveyTeam.picture.thumbnail}
                alt={`${surveyTeam.name.first} ${surveyTeam.name.last}`}
                className="rounded-full p-2 w-25 h-25 relative mx-auto flex flex-wrap justify-center items-center text-center"
              />
              <div className="font-semibold text-lg text-[#0C566D]">
                {surveyTeam.name.first} {surveyTeam.name.last}
              </div>
              <div className="text-sm font-semibold text-neutral-950">
                {surveyTeam.location.state}-{surveyTeam.location.country}
              </div>
              <div className="text-sm font-normal text-neutral-950">
                {surveyTeam.phone}
              </div>
            </li>
          ))}{" "}
        </div>
      </div>
    </main>
  );
}
