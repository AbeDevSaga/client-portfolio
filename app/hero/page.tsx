import Hero from "../components/Hero";
import { hero } from "../constants/hero";

export default function HeroSection() {
  return (
    <section id="hero" className="pt-10 bg-gray-900">
      <div className="w-full mx-auto">
        <Hero hero={hero[0]} />
      </div>
    </section>
  );
}
