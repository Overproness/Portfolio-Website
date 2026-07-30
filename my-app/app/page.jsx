import Contact from "@/components/sections/Contact";
import Home from "@/components/sections/Home";
import Resume from "@/components/sections/Resume";
import Services from "@/components/sections/Services";
import Work from "@/components/sections/Work";

export default function HomePage() {
  return (
    <div className="flex flex-col">
      <div className="mb-24 xl:mb-40">
        <Home />
      </div>
      <div className="mb-24 xl:mb-40">
        <Services />
      </div>
      <div className="mb-24 xl:mb-40">
        <Resume />
      </div>
      <div className="mb-24 xl:mb-40">
        <Work />
      </div>
      <div className="mb-24 xl:mb-40">
        <Contact />
      </div>
    </div>
  );
}
