import Hero from "../app/components/Hero";
import BrandLogos from "../app/components/BrandLogos";
import Services from "../app/components/Services";
import Contact from "../app/components/Contact";  

export default function Home() {
  return (
    <main className="w-full">
      <Hero />

      {/* Brand Logos (Now Properly Aligned Below Hero) */}
      <div className="flex justify-center my-12 px-4 sm:px-8 md:px-16">
        <BrandLogos />
      </div>

      <Services />

      <Contact />
    </main>
  );
}
