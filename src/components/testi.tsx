import * as React from "react";
import axios from "axios";

type User = {
  name: {
    first: string;
    last: string;
  };
  picture: {
    medium: string;
  };
};

export default async function Testi() {
  try {
    const response = await axios.get(
      "https://randomuser.me/api/?nat=us,dk,fr,gb&results=5"
    );

    const users: User[] = response.data.results;

    return (
      <main className="w-[full] h-full ">
        <div>
          <h2 className="text-[#0C566D] text-3xl min-md:text-4xl p-10 pb-0 pt-15 font-bold justify-center items-center text-center">
            THEY SAID
          </h2>
        </div>
        <div className="container  text-neutral-300  lg:w-[35%] w-full gap-5 px-5 py-5 mx-auto flex flex-wrap">
          <div className="carousel w-full">
            <div
              id="slide1"
              className="carousel-item relative w-full justify-center items-center text-center"
            >
              <div className=" bg-[#0C566D] px-8 p-5 pt-0 relative rounded-3xl justify-center items-center text-center">
                <p className="mt-5">
                  "Geoland Survey's attention to detail and professionalism set
                  them apart in the industry. Their innovative approach to
                  geospatial challenges consistently delivers outstanding
                  results. Their ability to adapt to complex project
                  requirements while maintaining high standards is remarkable."
                </p>
                {users[0] && (
                  <div key={0}>
                    <img
                      src={users[0].picture.medium}
                      alt={`${users[0].name.first} ${users[0].name.last}`}
                      className="rounded-full p-2 w-25 h-25 relative mx-auto flex flex-wrap justify-center items-center text-center"
                    />
                    <div className="font-bold sm:text-2xl text-xl pb-0">
                      {users[0].name.first} {users[0].name.last}
                    </div>
                    <div className="font-semibold text-lg p-5 pt-1">
                      CEO Akarindo Geotama
                    </div>
                  </div>
                )}
              </div>
              <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                <a href="#slide5" className="btn btn-circle">
                  ❮
                </a>
                <a href="#slide2" className="btn btn-circle">
                  ❯
                </a>
              </div>
            </div>

            <div
              id="slide2"
              className="carousel-item relative w-full justify-center items-center text-center"
            >
              <div className=" bg-[#0C566D] px-8 p-5 relative rounded-3xl justify-center items-center text-center">
                <p className="mt-5">
                  "The team's dedication to client satisfaction is evident in
                  every project they undertake. Their responsiveness and willingness to go the extra mile make
                  them a reliable partner for any geospatial needs. Geoland
                  Survey's ability to deliver on time without compromising
                  quality is truly commendable."
                </p>
                {users[1] && (
                  <div key={1}>
                    <img
                      src={users[1].picture.medium}
                      alt={`${users[1].name.first} ${users[1].name.last}`}
                      className="rounded-full p-2 w-25 h-25 relative mx-auto flex flex-wrap justify-center items-center text-center"
                    />
                    <div className="font-bold sm:text-2xl text-xl pb-0">
                      {users[1].name.first} {users[1].name.last}
                    </div>
                    <div className="font-semibold text-lg p-5 pt-1 ">
                      CEO PT Geosada Perkasa
                    </div>
                  </div>
                )}
              </div>
              <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                <a href="#slide1" className="btn btn-circle">
                  ❮
                </a>
                <a href="#slide3" className="btn btn-circle">
                  ❯
                </a>
              </div>
            </div>

            <div
              id="slide3"
              className="carousel-item relative w-full justify-center items-center text-center"
            >
              <div className=" bg-[#0C566D] px-8 p-5 relative rounded-3xl justify-center items-center text-center">
                <p className="mt-5">
                  "Their remote sensing analysis provided invaluable data that greatly
                  enhanced our project outcomes. Geoland Survey's spatial
                  analysis services are top-notch, delivering actionable
                  insights with remarkable accuracy."
                </p>
                {users[2] && (
                  <div key={2}>
                    <img
                      src={users[2].picture.medium}
                      alt={`${users[2].name.first} ${users[2].name.last}`}
                      className="rounded-full p-2 w-25 h-25 relative mx-auto flex flex-wrap justify-center items-center text-center"
                    />
                    <div className="font-bold sm:text-2xl text-xl pb-0">
                      {users[2].name.first} {users[2].name.last}
                    </div>
                    <div className="font-semibold text-lg p-5 pt-1 ">
                      Director Akasia Geomatika
                    </div>
                  </div>
                )}
              </div>
              <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                <a href="#slide2" className="btn btn-circle">
                  ❮
                </a>
                <a href="#slide4" className="btn btn-circle">
                  ❯
                </a>
              </div>
            </div>

            <div
              id="slide4"
              className="carousel-item relative w-full justify-center items-center text-center"
            >
              <div className=" bg-[#0C566D] px-8 p-5 relative rounded-3xl justify-center items-center text-center">
                <p className="mt-5">
                  "We highly recommend Geoland Survey for their exceptional
                  geospatial services and client-focused approach. Their dedication to innovation and continuous
                  improvement sets them apart as industry leaders. We look
                  forward to future collaborations."
                </p>
                {users[3] && (
                  <div key={3}>
                    <img
                      src={users[3].picture.medium}
                      alt={`${users[3].name.first} ${users[3].name.last}`}
                      className="rounded-full p-2 w-25 h-25 relative mx-auto flex flex-wrap justify-center items-center text-center"
                    />
                    <div className="font-bold sm:text-2xl text-xl pb-0">
                      {users[3].name.first} {users[3].name.last}
                    </div>
                    <div className="font-semibold text-lg p-5 pt-1 ">
                      Chief of Badan Informasi Geospasial
                    </div>
                  </div>
                )}
              </div>
              <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                <a href="#slide3" className="btn btn-circle">
                  ❮
                </a>
                <a href="#slide5" className="btn btn-circle">
                  ❯
                </a>
              </div>
            </div>

            <div
              id="slide5"
              className="carousel-item relative w-full justify-center items-center text-center"
            >
              <div className=" bg-[#0C566D] px-8 p-5 relative rounded-3xl justify-center items-center text-center">
                <p className="mt-5">
                  "Geoland Survey's comprehensive geospatial solutions have been
                  instrumental in our project's success. Their commitment to
                  excellence ensures reliable and accurate outcomes every time. The insights provided
                  by their spatial analysis have been invaluable in shaping our
                  strategies."
                </p>
                {users[4] && (
                  <div key={4}>
                    <img
                      src={users[4].picture.medium}
                      alt={`${users[4].name.first} ${users[4].name.last}`}
                      className="rounded-full p-2 w-25 h-25 relative mx-auto flex flex-wrap justify-center items-center text-center"
                    />
                    <div className="font-bold sm:text-2xl text-xl pb-0">
                      {users[4].name.first} {users[4].name.last}
                    </div>
                    <div className="font-semibold text-lg p-5 pt-1 ">
                      CEO Geodeta Akatama
                    </div>
                  </div>
                )}
              </div>
              <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                <a href="#slide3" className="btn btn-circle">
                  ❮
                </a>
                <a href="#slide1" className="btn btn-circle">
                  ❯
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
    );
  } catch (error) {
    console.error("Gagal mengambil data:", error);
    return <div>Terjadi kesalahan saat mengambil data.</div>;
  }
}
