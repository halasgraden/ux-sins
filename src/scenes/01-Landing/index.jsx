import { useJourney } from "../../context/JourneyProvider.jsx";

export default function Landing() {
  const { advance } = useJourney();

  return (
    <main>
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
          <button className="landing-button-variant-1">Learn More</button>
          <button className="landing-button-variant-2">See Plans</button>
          <button className="landing-button-variant-1">Request Demo</button>
          <button className="landing-button-variant-2">Start Free</button>
          <button className="landing-button-variant-1" onClick={advance}>Get Started</button>
          <button className="landing-button-variant-2">Watch Demo</button>
        </section>
      </section>
    </main>
  );
}
