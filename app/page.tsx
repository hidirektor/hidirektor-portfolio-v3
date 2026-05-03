import Header from "./components/Header";

const featuredWorks = [
  {
    title: "TitanX",
    category: "Sales Technology, US",
    description:
      "Results-first brand and web direction that repositioned the platform around measurable pipeline impact.",
  },
  {
    title: "Metapic",
    category: "Technology, SE",
    description:
      "A modern identity and website refresh to align market-leading product traction with a stronger story.",
  },
  {
    title: "QDT",
    category: "Technology, CA",
    description:
      "Enterprise-focused messaging and UX to make complex AI offerings clearer for executive buyers.",
  },
];

const services = [
  "Website Design",
  "Branding",
  "UX/UI Design",
  "Motion Design",
  "SEO",
  "Content Creation",
  "Landing Pages",
  "Web Development",
];

const testimonials = [
  {
    quote:
      "They handled our rebrand and website end-to-end with speed, quality, and real business thinking.",
    author: "Joseph Moreton",
    role: "Managing Director",
  },
  {
    quote:
      "Clear communication, strong creative direction, and a site that finally performs as good as it looks.",
    author: "Tayler Scharman",
    role: "Founder",
  },
];

export default function Home() {
  return (
    <main id="top" className="min-h-screen bg-white text-zinc-950">
      <Header />

      <section className="hero-section">
        <div className="page-container hero-grid">
          <p className="section-dot">Design & branding studio</p>
          <h1 className="hero-title">
            Design and branding studio for scaling B2B tech companies.
          </h1>
          <p className="hero-copy">
            We help tech leaders shape the brand and digital presence that
            drives the next stage of growth.
          </p>
          <div className="hero-actions">
            <a href="#contact" className="btn btn-primary">
              Request a quote
            </a>
            <a href="#projects" className="btn btn-ghost">
              See projects
            </a>
          </div>
        </div>
      </section>

      <section id="who" className="section-spacing">
        <div className="page-container two-col-layout">
          <div>
            <p className="section-dot">Who we are</p>
            <h2 className="section-title">
              We work where design meets business outcome.
            </h2>
          </div>
          <div className="stack-gap">
            <p className="section-copy">
              Eloqwnt is a creative studio built for tech and corporate leaders
              at turning points: pre-raise, post-acquisition, market expansion,
              or a full repositioning.
            </p>
            <p className="section-copy">
              Strategy, branding, web, and product design under one team,
              aligned to what you are building next.
            </p>
          </div>
        </div>
      </section>

      <section id="projects" className="section-spacing section-muted">
        <div className="page-container">
          <p className="section-dot">Featured works</p>
          <h2 className="section-title narrow">
            Brand and digital work built for companies at inflection points.
          </h2>

          <div className="project-grid">
            {featuredWorks.map((work, index) => (
              <article key={work.title} className="project-card">
                <p className="project-meta">
                  {String(index + 1).padStart(2, "0")} - {work.category}
                </p>
                <h3 className="project-title">{work.title}</h3>
                <p className="project-description">{work.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="services" className="section-spacing">
        <div className="page-container">
          <p className="section-dot">Our services</p>
          <h2 className="section-title narrow">
            Everything your brand needs to grow under one roof.
          </h2>

          <div className="services-grid">
            {services.map((service, index) => (
              <div key={service} className="service-item">
                <span className="service-number">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span>{service}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="resources" className="section-spacing section-muted">
        <div className="page-container">
          <p className="section-dot">Testimonials</p>
          <div className="testimonial-grid">
            {testimonials.map((item) => (
              <blockquote key={item.author} className="testimonial-card">
                <p className="testimonial-quote">&quot;{item.quote}&quot;</p>
                <footer className="testimonial-footer">
                  <span>{item.author}</span>
                  <span>{item.role}</span>
                </footer>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="section-spacing">
        <div className="page-container contact-card">
          <p className="section-dot">Contact</p>
          <h2 className="section-title narrow">
            The right partner at the right moment changes everything.
          </h2>
          <p className="section-copy narrow">
            Tell us about your project and goals. We will come back with a clear
            next-step plan.
          </p>
          <a href="mailto:hi@eloqwnt.com" className="btn btn-primary">
            hi@eloqwnt.com
          </a>
        </div>
      </section>
    </main>
  );
}
