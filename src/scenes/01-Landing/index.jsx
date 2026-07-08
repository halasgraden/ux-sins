import Testimonial from "../../components/Testimonial.jsx";
import { useJourney } from "../../context/JourneyProvider.jsx";

export default function Landing() {
  const { advance } = useJourney();

  return (
    <main className="landing-main-container">
      <header className="landing-unclear-nav">
        <ul>
          <li>Home</li>
          <li>Features</li>
          <li>Solutions</li>
          <li>Integrations</li>
          <li>Pricing</li>
          <li>Enterprise</li>
          <li>Resources</li>
          <li>Blog</li>
          <li>About</li>
          <li>Support</li>
          <li>Contact</li>
        </ul>
      </header>
      <section className="landing-container">
        <section className="obscure-text">
            <h1>UX Sins</h1>
          <p>
            An interactive experience exploring bad UX design decisions to teach you what makes good UX design.
          </p>
        </section>
        <section className="too-many-ctas">
          <button className="landing-button-variant">Learn More</button>
          <button className="landing-button-variant">See Plans</button>
          <button className="landing-button-variant">Request Demo</button>
          <button className="landing-button-variant">Start Free</button>
          <button className="landing-button-variant" onClick={advance}>Get Started</button>
          <button className="landing-button-variant">Watch Demo</button>
        </section>
      </section>
      <section className="testimonials-landing-container">
        <h4>Loved by <u>everyone</u></h4>
        <Testimonial
        quote="“This site helped me synergize my workflow.”"
        author="Smith Atlas, Product Manager"
        />
        <Testimonial
        quote="“My team would be lost without it.”"
        author="Sarah Mandi, CEO"
        />
        <Testimonial
        quote="“I genuinely have no idea what I’m looking at.”"
        author="John Doe, Farmer"
        />
      </section>
    </main>
  );
}
