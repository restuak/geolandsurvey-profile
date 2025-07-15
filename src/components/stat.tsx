export default function Stat() {
  return (
    <section className="container max-w-screen min-lg:max-w-screen h-1/5 relative flex justify-center items-center ">
      <div className="stats shadow text-neutral-950">
        <div className="text-neutral-950 stat place-items-center">
          <div className="text-neutral-950 stat-title">Clients</div>
          <div className="text-neutral-950 stat-value">87</div>
          <div className="text-neutral-950 stat-desc">
            Since 2022
          </div>
        </div>

        <div className="stat place-items-center text-neutral-950">
          <div className="text-neutral-950 stat-title">Projects</div>
          <div className="text-neutral-950 stat-value ">396</div>
          <div className="text-neutral-950 stat-desc ">↗︎ 391 (98%)</div>
        </div>

        <div className="stat place-items-center text-neutral-950">
          <div className="text-neutral-950 stat-title">New Registers</div>
          <div className="text-neutral-950 stat-value">1,200</div>
          <div className="text-neutral-950stat-desc">↘︎ 90 (14%)</div>
        </div>
      </div>
    </section>
  );
}
