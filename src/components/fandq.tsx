import { Badge } from "@/components/ui/badge";

export interface FaqItem {
  question: string;
  answer: string;
}

export interface Faq5Props {
  badge?: string;
  heading?: string;
  description?: string;
  faqs?: FaqItem[];
}

const defaultFaqs: FaqItem[] = [
  {
    question: "What services does your surveying and mapping company offer?",
    answer:
      " We offer a wide range of services including topographic surveys,drone mapping, boundary surveys, hydrographic surveys, and GIS dataprocessing. Our solutions support construction, mining, land planning, and infrastructure projects.",
  },
  {
    question:
      "Are the survey results and maps compliant with industry standards?",
    answer:
      "Yes, all of our deliverables adhere to both national (BIG, BPN) and international standards. We use advanced technologies such as GNSS, UAV (drones), and professional mapping software to ensure high accuracy and quality.",
  },
  {
    question: "How long does a typical survey project take to complete?",
    answer:
      "The duration depends on the area size and survey type. Small-scale projects usually take 1–3 days, while larger or more complex projects will be assessed and scheduled after an initial consultation and site evaluation.",
  },
  {
    question: "Can I receive the map results in digital format?",
    answer:
      "Absolutely. We provide survey outputs in various digital formats such as DWG, SHP, GeoTIFF, or PDF, depending on your needs—whether it's for design, GIS integration, or presentations.",
  },
];

const FandQ = ({
  badge = "FAQ",
  heading = "Questions & Answers",
  description = "Find out all the essential details about our platform and how it can serve your needs.",
  faqs = defaultFaqs,
}: Faq5Props) => {
  return (
    <section className="py-32 pb-5 pt-5 flex items-center justify-center">
      <div className="container p-10 min-lg:p-5">
        <div className="text-center">
          <Badge className="text-xs font-medium">{badge}</Badge>
          <h1 className="mt-4 text-4xl font-semibold">{heading}</h1>
          <p className="mt-6 font-medium text-muted-foreground">
            {description}
          </p>
        </div>
        <div className="mx-auto mt-14 max-w-xl">
          {faqs.map((faq, index) => (
            <div key={index} className="mb-8 flex gap-4">
              <div className="collapse collapse-arrow bg-neutral-300  border border-base-300">
                <input type="radio" name="my-accordion-2" />
                <div className="collapse-title font-semibold text-[16px] lg:text-lg">
                  {faq.question}
                </div>
                <div className="collapse-content text-[16px] lg:text-lg">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FandQ;
