import Contact from "@/components/sections/Contact";
import Home from "@/components/sections/Home";
import Resume from "@/components/sections/Resume";
import Services from "@/components/sections/Services";
import Work from "@/components/sections/Work";

export default function HomePage() {
  return (
    <>
      <Home />
      <Services />
      <Resume />
      <Work />
      <Contact />
    </>
  );
}
