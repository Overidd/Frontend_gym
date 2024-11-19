import AboutUs from "./components/AboutUs";
import Services from "./components/Services";
import Accordeon from "./components/Accordeon";
import Contact from "./components/Contact";
import { TestimonialUsers } from "./components/testimonialUsers";
import VideoSection from "./components/VideoSection";
import backgroundIMG from '../../assets/img/BACKGROUND_GRADIENT_RAY.png'

function Landing() {
  return (
    <>
      <VideoSection />
      <Services />
      <AboutUs />
      <TestimonialUsers />
      <section className="relative">
        <img
          alt="background_RAY"
          src={backgroundIMG}
          className="w-screen sm:h-[2360px] absolute"
        />
        <Accordeon />
        <Contact />
      </section>
    </>
  );
}

export default Landing;
