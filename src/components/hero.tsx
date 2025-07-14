
export default function Hero () {
    return (
      <div
        className="hero h-screen"
        style={{
          backgroundImage: "url(../2.jpg)",
        }}
      >
        <div className="hero-overlay"></div>
        <div className="hero-content text-neutral-content text-center">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">GEOLAND SURVEY</h1>
            <p className="mb-5">
              Let's talk about geospatial and solve your problem together.
            </p>
            <button className="btn btn-primary bg-[#992b39] border-[#0C566D] ">
              <a href="/#service">OUR SERVICE</a>
            </button>
          </div>
        </div>
      </div>
    );
}
