import { Main } from "next/document";

export default function FandQ() {
  return (
    <main className="w-full h-full ">
      <div>
        <h2 className="text-[#0C566D] text-4xl p-5 pb-0 font-bold justify-center items-center text-center">
          FAQ
        </h2>
      </div>

      <div className="container  text-white text-xl lg:w-[35%] w-full gap-5 px-5 py-5 mx-auto flex flex-wrap">
        <div className="collapse collapse-arrow bg-[#992b39] border border-base-300">
          <input type="radio" name="my-accordion-2" defaultChecked />
          <div className="collapse-title font-semibold">
            What services does your surveying and mapping company offer?
          </div>
          <div className="collapse-content text-lg">
            We offer a wide range of services including topographic surveys,
            drone mapping, boundary surveys, hydrographic surveys, and GIS data
            processing. Our solutions support construction, mining, land
            planning, and infrastructure projects.
          </div>
        </div>
        <div className="collapse collapse-arrow bg-[#992b39]  border border-base-300">
          <input type="radio" name="my-accordion-2" />
          <div className="collapse-title font-semibold">
            Are the survey results and maps compliant with industry standards?
          </div>
          <div className="collapse-content text-lg">
            Yes, all of our deliverables adhere to both national (BIG, BPN) and
            international standards. We use advanced technologies such as GNSS,
            UAV (drones), and professional mapping software to ensure high
            accuracy and quality.
          </div>
        </div>
        <div className="collapse collapse-arrow bg-[#992b39]  border border-base-300">
          <input type="radio" name="my-accordion-2" />
          <div className="collapse-title font-semibold">
            How long does a typical survey project take to complete?
          </div>
          <div className="collapse-content text-lg">
            The duration depends on the area size and survey type. Small-scale
            projects usually take 1–3 days, while larger or more complex
            projects will be assessed and scheduled after an initial
            consultation and site evaluation.
          </div>
        </div>
        <div className="collapse collapse-arrow bg-[#992b39]  border border-base-300">
          <input type="radio" name="my-accordion-2" />
          <div className="collapse-title font-semibold">
            Can I receive the map results in digital format?
          </div>
          <div className="collapse-content text-lg">
            Absolutely. We provide survey outputs in various digital formats
            such as DWG, SHP, GeoTIFF, or PDF, depending on your needs—whether
            it's for design, GIS integration, or presentations.
          </div>
        </div>
      </div>
    </main>
  );
}
