import Header from "./components/Header";

/* ─── DATA ─────────────────────────────────────────────────────────── */

const experience = [
  {
    period: "Nov 2025 – Present",
    role: "Software Team Lead",
    company: "Werover · İzmir, Turkey",
    bullets: [
      "Led the software team focusing on innovation, scalability and collaboration.",
      "Developed impactful solutions addressing real-world energy monitoring challenges.",
      "Fostered a culture of teamwork and continuous improvement.",
    ],
  },
  {
    period: "Apr 2025 – Nov 2025",
    role: "Full Stack Developer",
    company: "Werover · İzmir, Turkey",
    bullets: [
      "Built scalable Node.js/Express backend services with modular architecture.",
      "Deployed on AWS (ECS Fargate, RDS, S3, CloudWatch) with Docker + CI/CD via GitHub Actions.",
      "Integrated backend APIs with IoT devices for real-time energy data ingestion.",
      "Built SSR dashboards with Next.js, enhancing SEO and UX for energy monitoring.",
    ],
  },
  {
    period: "Aug 2024 – Mar 2025",
    role: "Native Mobile Developer",
    company: "Dynamic Brain Neurotechnology · Samsun, Turkey",
    bullets: [
      "Built cross-platform mobile apps (Android/iOS) for tDCS device control in Java, Kotlin, Swift & SwiftUI.",
      "Managed OTA firmware updates enabling real-time upgrades and improved device control.",
      "Designed an in-app exam system for interactive user assessments.",
    ],
  },
  {
    period: "Feb 2024 – Jun 2024",
    role: "Software Team Leader",
    company: "Woma Advertising · Istanbul, Turkey",
    bullets: [
      "Led development of ML-powered mobile apps, achieving 40% increase in user engagement.",
      "Reduced codebase 30% by introducing Node.js + Angular; accelerated cross-platform deployment.",
      "Designed CI/CD pipeline automating testing and deployment processes.",
    ],
  },
  {
    period: "Dec 2023 – Feb 2024",
    role: "Backend Developer",
    company: "Woma Advertising · Istanbul, Turkey",
    bullets: [
      "Increased data processing speeds 40% via Angular + Node.js analytics tool redesign.",
      "Migrated primary user database to microservices with zero downtime.",
      "Established Jenkins CI/CD pipelines, increasing deployment frequency 50%.",
    ],
  },
  {
    period: "May 2023 – Nov 2023",
    role: "R&D Engineer",
    company: "Önder Lift · Manisa, Turkey",
    bullets: [
      "Designed optimized lift control system for ESP-XL, boosting data processing 25%.",
      "Integrated IoT connectivity for remote diagnostics, reducing service visits 20%.",
      "Enhanced embedded systems achieving 20% increase in processing efficiency.",
    ],
  },
  {
    period: "Jan 2020 – Jan 2023",
    role: "Backend Developer",
    company: "Lebara Mobile · London, UK",
    bullets: [
      "Built company-wide API gateway handling 10,000+ requests/minute on Azure.",
      "Refactored legacy codebase to React/Redux, improving performance 50%.",
      "Developed bespoke CRM system, increasing sales team efficiency 20%.",
    ],
  },
];

const techStack = [
  {
    category: "Languages",
    skills: ["Java", "Kotlin", "Swift", "JavaScript", "TypeScript", "Node.js", "C++", "Rust", "Assembly"],
  },
  {
    category: "Mobile",
    skills: ["Android (XML, Jetpack Compose)", "iOS (SwiftUI)", "React Native", "OTA Updates", "BLE/IoT"],
  },
  {
    category: "Backend & Web",
    skills: ["Node.js", "Express", "Next.js", "Angular", "Spring Boot", "REST APIs", "WebSockets", "MQTT"],
  },
  {
    category: "Databases",
    skills: ["MySQL", "PostgreSQL", "MongoDB", "Redis", "Firebase", "MS SQL Server", "Sequelize"],
  },
  {
    category: "Cloud & DevOps",
    skills: ["AWS (ECS, RDS, S3, CloudWatch)", "Azure", "GCP", "Docker", "Kubernetes", "GitHub Actions", "Jenkins"],
  },
  {
    category: "Embedded & IoT",
    skills: ["STM32", "ESP32", "FreeRTOS", "Modbus", "SPI", "I2C", "UART", "CAN", "ARM Mbed"],
  },
];

const projects = [
  {
    title: "TÜBİTAK 2242 | DeepCompressLink",
    period: "Ongoing",
    supportStatus: "Pending",
    subtitle: "Delay-Tolerant Adaptive Data Compression Protocol for CubeSat Telemetry",
    desc: "Designing a DTN-compatible, stateless compression protocol for CubeSat and deep-space telemetry, validated in SimPy-based simulations across LEO, lunar orbit, and Mars scenarios.",
    tools: ["Python", "SimPy", "DTN", "CubeSat", "Space Telemetry"],
    github: "https://github.com/hidirektor",
  },
  {
    title: "TEKNOFEST | ONYX Thermal-Hydraulic Analysis Software",
    period: "Ongoing",
    supportStatus: "Pending",
    subtitle: "Thermal-Hydraulic Analysis Software for SMR/MMR Cooling Loops and Reactor Core",
    desc: "Team ONYX: building a C++ simulation engine with a Node.js backend, Redis caching, and web/mobile dashboards to analyze temperature, pressure drop, flow rate, and power output — validated against IAEA/OECD benchmarks.",
    tools: ["C++", "Node.js", "Redis", "React Native", "IAEA/OECD"],
    github: "https://github.com/hidirektor",
  },
  {
    title: "TÜBİTAK 2209-B | CompressM2M",
    period: "Ongoing",
    supportStatus: "Pending",
    subtitle: "Adaptive M2M Data Compression Protocol for Low-Power IoT Devices",
    desc: "Building a lightweight, lossless adaptive compression protocol on ESP32-S3 to reduce payload size and energy usage in LoRaWAN and NB-IoT based M2M communication.",
    tools: ["C++", "ESP32-S3", "LoRaWAN", "NB-IoT", "Embedded"],
    github: "https://github.com/hidirektor",
  },
  {
    title: "Class Roll Call Management System",
    period: "Oct – Nov 2025",
    supportStatus: null,
    subtitle: "",
    desc: "Real-time attendance tracking for educational institutions with dynamic QR code generation, device fingerprinting, OTP auth, and Excel export analytics.",
    tools: ["Next.js", "Node.js", "MySQL", "Redis", "Docker"],
    github: "https://github.com/hidirektor",
  },
  {
    title: "Open-Source Web 3.0 IoT Platform",
    period: "Mar 2024 – May 2025",
    supportStatus: null,
    subtitle: "",
    desc: "TÜBİTAK 2209-B funded IIoT platform for industrial PLCs — STM32/FreeRTOS embedded firmware, Node.js cloud services validated at 10,000 data points/min.",
    tools: ["C++", "FreeRTOS", "STM32", "Node.js", "MQTT", "React Native"],
    github: "https://github.com/hidirektor",
  },
  {
    title: "Delivery Boy Mobile Application",
    period: "Dec 2023 – Apr 2024",
    supportStatus: null,
    subtitle: "",
    desc: "Cross-platform e-commerce ecosystem: real-time order tracking via Spring Boot, native Android (Java) and iOS (Swift) apps with seamless API integration.",
    tools: ["Java", "Spring Boot", "Swift", "Node.js"],
    github: "https://github.com/hidirektor",
  },
  {
    title: "TFEncryption Chat App",
    period: "Nov – Dec 2021",
    supportStatus: null,
    subtitle: "",
    desc: "Encrypted peer-to-peer chat using Cactoos, Concurrency and WebRTC with SPN, SHA256 and MD5 encryption options. JavaFX-based desktop UI.",
    tools: ["Java", "JavaFX", "WebRTC"],
    github: "https://github.com/hidirektor",
  },
];

const mediumArticles = [
  {
    title: "MQTT vs Alternatives: Choosing the Right Protocol for Industrial IoT",
    desc: "A deep-dive comparison of MQTT, AMQP, CoAP, WebSockets and OPC-UA on latency, bandwidth, QoS and reliability for industrial applications.",
    date: "2025",
    href: "https://medium.com/@hidirektor",
  },
  {
    title: "Building Scalable Embedded Systems with FreeRTOS and STM32",
    desc: "How I reduced CPU load 32% using DMA-based serial communication and multi-threaded FreeRTOS architecture in a production IIoT project.",
    date: "2024",
    href: "https://medium.com/@hidirektor",
  },
  {
    title: "Zero-Downtime Database Migrations in Microservices",
    desc: "Practical strategies for migrating monolithic databases to microservices without service interruption, learned from real production experience.",
    date: "2024",
    href: "https://medium.com/@hidirektor",
  },
];

const linkedinPosts = [
  {
    title: "Why IoT and Cycling are the Same Problem",
    desc: "Every long-distance ride and every distributed system share one truth: efficiency over raw power. A thread on endurance engineering.",
    date: "Apr 2025",
    href: "https://linkedin.com/in/hidirektor",
  },
  {
    title: "6 Months at Werover: What I Learned Building an Energy Platform",
    desc: "From Node.js monolith to AWS microservices — the architectural decisions, the mistakes, and the lessons that shaped our stack.",
    date: "Nov 2025",
    href: "https://linkedin.com/in/hidirektor",
  },
  {
    title: "From Mechatronics to Software Architecture",
    desc: "How a mechatronics engineering background gives me an unfair advantage when designing hardware-software interfaces and IoT systems.",
    date: "Mar 2025",
    href: "https://linkedin.com/in/hidirektor",
  },
];

const favorites = [
  { emoji: "🎬", title: "Interstellar", meta: "Film · Sci-Fi / Space" },
  { emoji: "🎬", title: "The Martian", meta: "Film · Sci-Fi / Engineering" },
  { emoji: "🎬", title: "Ex Machina", meta: "Film · AI / Thriller" },
  { emoji: "📺", title: "Black Mirror", meta: "Series · Tech / Dystopia" },
  { emoji: "📺", title: "Westworld", meta: "Series · AI / Philosophy" },
  { emoji: "📺", title: "Silicon Valley", meta: "Series · Tech / Comedy" },
  { emoji: "📚", title: "Clean Code", meta: "Book · Software Engineering" },
  { emoji: "📚", title: "The Pragmatic Programmer", meta: "Book · Software Craft" },
  { emoji: "🎵", title: "Hans Zimmer", meta: "Music · Cinematic / Space" },
  { emoji: "🚴", title: "Trans Anatolia Route", meta: "Cycling · 1200 km Dream" },
  { emoji: "🚴", title: "Izmir – Çeşme", meta: "Cycling · Favorite Local Route" },
  { emoji: "🌍", title: "Open Source", meta: "Passion · Contributing & Building" },
];

/* ─── PAGE ─────────────────────────────────────────────────────────── */

export default function Home() {
  return (
    <>
      {/* Starfield */}
      <div className="stars-canvas" aria-hidden />

      <Header />

      <main id="top">
        {/* ── HERO ──────────────────────────────────────────────── */}
        <section className="hero">
          <div className="hero-bg" aria-hidden />
          <div className="hero-gradient" aria-hidden />
          <div className="hero-content">
            <p className="hero-kicker">
              <span className="hero-kicker-line" aria-hidden />
              Software Architect &amp; Cyclist
            </p>
            <h1 className="hero-name">
              Halil İbrahim<br />
              <span className="accent-word">Direktör</span>
            </h1>
            <p className="hero-title">
              Building scalable systems by day —{" "}
              <strong>riding infinite roads</strong> by night.
            </p>
            <p className="hero-desc">
              Software Team Lead at Werover. Mechatronics-turned-engineer
              specializing in mobile apps, IoT platforms, backend architecture
              and cloud-native deployments. Passionate about energy efficiency
              in code and on the saddle.
            </p>
            <div className="hero-actions">
              <a href="#projects" className="btn btn-primary">View Projects</a>
              <a href="#contact" className="btn btn-outline">Get in Touch</a>
              <a
                href="https://hidirektor.dev"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline"
              >
                hidirektor.dev ↗
              </a>
            </div>
            <div className="hero-socials">
              {[
                { label: "GitHub", href: "https://github.com/hidirektor" },
                { label: "LinkedIn", href: "https://linkedin.com/in/hidirektor" },
                { label: "Medium", href: "https://medium.com/@hidirektor" },
                { label: "hidirektor@gmail.com", href: "mailto:hidirektor@gmail.com" },
              ].map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target={s.href.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  className="hero-social-link"
                >
                  {s.label}
                </a>
              ))}
            </div>
          </div>
          <div className="hero-scroll" aria-hidden>
            <div className="hero-scroll-bar" />
          </div>
        </section>

        <div className="glow-line" />

        {/* ── ABOUT ─────────────────────────────────────────────── */}
        <section id="about" className="section">
          <div className="container">
            <p className="section-tag">About</p>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "4rem", alignItems: "start" }}>
              <div>
                <h2 className="section-heading">
                  Engineering at the intersection of<br />
                  <span style={{ color: "var(--accent)" }}>hardware</span> and <span style={{ color: "var(--accent2)" }}>software</span>.
                </h2>
                <p className="section-sub" style={{ marginTop: "1.25rem" }}>
                  I started with mechatronics engineering at Manisa Celal Bayar University
                  (GPA 3.32/4.00), which gave me a rare dual perspective: I understand
                  both the silicon and the stack. From lift control systems to IoT platforms,
                  from embedded C++ to cloud-native Node.js, I build things that work at scale.
                </p>
                <p className="section-sub" style={{ marginTop: "1rem" }}>
                  Outside the terminal, I&apos;m a semi-professional cyclist obsessed with
                  long-distance rides — the same discipline that keeps me optimizing for
                  endurance over sprints in every system I build.
                </p>
              </div>
              <div>
                <div className="stats-row">
                  {[
                    { value: "6+", label: "Years of Experience" },
                    { value: "10+", label: "Companies & Projects" },
                    { value: "4", label: "Countries Worked In" },
                    { value: "1", label: "TÜBİTAK Research Grant" },
                  ].map((s) => (
                    <div key={s.label} className="stat-item">
                      <span className="stat-value">{s.value}</span>
                      <span className="stat-label">{s.label}</span>
                    </div>
                  ))}
                </div>
                <div style={{ marginTop: "2.5rem", display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                  {[
                    { label: "Location", value: "İzmir, Turkey" },
                    { label: "Education", value: "B.Sc. Mechatronics Engineering" },
                    { label: "Languages", value: "Turkish · English · German" },
                    { label: "Cycling", value: "Long-Distance Road Cycling 🚴" },
                  ].map((item) => (
                    <div key={item.label} style={{ display: "flex", gap: "1rem", alignItems: "baseline" }}>
                      <span style={{ fontSize: "0.72rem", fontWeight: 700, color: "var(--accent)", letterSpacing: "0.1em", textTransform: "uppercase", flexShrink: 0, width: "6rem" }}>{item.label}</span>
                      <span style={{ fontSize: "0.9rem", color: "var(--muted)" }}>{item.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="glow-line" />

        {/* ── EXPERIENCE ───────────────────────────────────────── */}
        <section id="experience" className="section">
          <div className="container">
            <p className="section-tag">Experience</p>
            <h2 className="section-heading">Where I&apos;ve built things.</h2>
            <div style={{ marginTop: "3rem" }}>
              <div className="timeline">
                {experience.map((exp) => (
                  <div key={exp.role + exp.period} className="timeline-item">
                    <div className="timeline-dot" aria-hidden />
                    <p className="timeline-period">{exp.period}</p>
                    <p className="timeline-role">{exp.role}</p>
                    <p className="timeline-company">{exp.company}</p>
                    <ul className="timeline-bullets">
                      {exp.bullets.map((b, i) => (
                        <li key={i}>{b}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <div className="glow-line" />

        {/* ── TECH STACK ───────────────────────────────────────── */}
        <section id="tech" className="section">
          <div className="container">
            <p className="section-tag">Tech Stack</p>
            <h2 className="section-heading">Tools of the trade.</h2>
            <div style={{ marginTop: "3rem", display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: "2rem" }}>
              {techStack.map((group) => (
                <div key={group.category} className="skills-group">
                  <p className="skills-group-title">{group.category}</p>
                  <div className="skills-pills">
                    {group.skills.map((s) => (
                      <span key={s} className="skill-pill">{s}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <div className="glow-line" />

        {/* ── PROJECTS ─────────────────────────────────────────── */}
        <section id="projects" className="section">
          <div className="container">
            <p className="section-tag">Projects</p>
            <h2 className="section-heading">Things I&apos;ve shipped.</h2>
            <div className="projects-grid" style={{ marginTop: "2.5rem" }}>
              {projects.map((p) => (
                <article key={p.title} className="project-card">
                  <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
                    <span className="badge">{p.period}</span>
                    {p.supportStatus && (
                      <>
                        <span className="badge badge-orange">Support: {p.supportStatus}</span>
                        <span className="badge" style={{ background: "rgba(0,200,100,0.12)", color: "#00c864", borderColor: "rgba(0,200,100,0.25)" }}>Ongoing</span>
                      </>
                    )}
                  </div>
                  <h3 className="project-card-title">{p.title}</h3>
                  {p.subtitle && (
                    <p style={{ fontSize: "0.8rem", color: "var(--accent)", fontWeight: 600, lineHeight: 1.4 }}>{p.subtitle}</p>
                  )}
                  <p className="project-card-desc">{p.desc}</p>
                  <div className="project-card-tools">
                    {p.tools.map((t) => (
                      <span key={t} className="project-card-tool">{t}</span>
                    ))}
                  </div>
                  <div className="project-card-links">
                    <a href={p.github} target="_blank" rel="noopener noreferrer" className="btn btn-outline" style={{ fontSize: "0.75rem", padding: "0.4rem 1rem" }}>
                      GitHub ↗
                    </a>
                  </div>
                </article>
              ))}
            </div>

            {/* Publication */}
            <div className="card" style={{ marginTop: "1.5rem", borderColor: "rgba(0,212,255,0.15)" }}>
              <div style={{ display: "flex", gap: "1rem", alignItems: "flex-start", flexWrap: "wrap" }}>
                <span className="badge">Publication</span>
                <span className="badge badge-orange">TÜBİTAK 2209-B</span>
              </div>
              <h3 style={{ fontFamily: "Space Grotesk, sans-serif", fontSize: "1.05rem", fontWeight: 700, color: "var(--text)", marginTop: "0.75rem" }}>
                MQTT vs Alternatives: Choosing the Right Protocol for Industrial IoT
              </h3>
              <p style={{ fontSize: "0.85rem", color: "var(--muted)", marginTop: "0.4rem", lineHeight: 1.65 }}>
                Direktor, H. I. (2025). Manuscript submitted for publication in <em>IEEE Internet of Things Journal</em>. Project No: 1139B412301407.
              </p>
            </div>
          </div>
        </section>

        <div className="glow-line" />

        {/* ── WRITING ──────────────────────────────────────────── */}
        <section id="writing" className="section">
          <div className="container">
            <p className="section-tag">Writing</p>
            <h2 className="section-heading">Medium &amp; LinkedIn.</h2>
            <p className="section-sub" style={{ marginTop: "0.75rem" }}>
              I write about software architecture, embedded systems, and the occasional cycling metaphor for distributed systems.
            </p>

            {/* Medium */}
            <div style={{ marginTop: "2.5rem" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1.25rem" }}>
                <span style={{ fontSize: "1.2rem" }}>✍️</span>
                <h3 style={{ fontFamily: "Space Grotesk, sans-serif", fontSize: "1rem", fontWeight: 700, color: "var(--text)" }}>Medium Articles</h3>
                <a href="https://medium.com/@hidirektor" target="_blank" rel="noopener noreferrer" className="badge" style={{ marginLeft: "auto" }}>View all ↗</a>
              </div>
              <div className="articles-grid">
                {mediumArticles.map((a) => (
                  <a key={a.title} href={a.href} target="_blank" rel="noopener noreferrer" className="article-card">
                    <span className="article-card-platform platform-medium">Medium</span>
                    <h4 className="article-card-title">{a.title}</h4>
                    <p className="article-card-desc">{a.desc}</p>
                    <span className="article-card-date">{a.date}</span>
                  </a>
                ))}
              </div>
            </div>

            {/* LinkedIn */}
            <div style={{ marginTop: "3rem" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1.25rem" }}>
                <span style={{ fontSize: "1.2rem" }}>💼</span>
                <h3 style={{ fontFamily: "Space Grotesk, sans-serif", fontSize: "1rem", fontWeight: 700, color: "var(--text)" }}>LinkedIn Posts</h3>
                <a href="https://linkedin.com/in/hidirektor" target="_blank" rel="noopener noreferrer" className="badge" style={{ marginLeft: "auto" }}>Follow ↗</a>
              </div>
              <div className="articles-grid">
                {linkedinPosts.map((p) => (
                  <a key={p.title} href={p.href} target="_blank" rel="noopener noreferrer" className="article-card">
                    <span className="article-card-platform platform-linkedin">LinkedIn</span>
                    <h4 className="article-card-title">{p.title}</h4>
                    <p className="article-card-desc">{p.desc}</p>
                    <span className="article-card-date">{p.date}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </section>

        <div className="glow-line" />

        {/* ── FAVORITES ────────────────────────────────────────── */}
        <section id="favorites" className="section">
          <div className="container">
            <p className="section-tag">Favorites</p>
            <h2 className="section-heading">Beyond the terminal.</h2>
            <p className="section-sub" style={{ marginTop: "0.75rem" }}>
              Films, series, books, music and cycling routes that keep me inspired.
            </p>
            <div className="favorites-grid" style={{ marginTop: "2.5rem" }}>
              {favorites.map((f) => (
                <div key={f.title} className="fav-card">
                  <span className="fav-emoji">{f.emoji}</span>
                  <p className="fav-title">{f.title}</p>
                  <p className="fav-meta">{f.meta}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <div className="glow-line" />

        {/* ── CONTACT ──────────────────────────────────────────── */}
        <section id="contact" className="section">
          <div className="container">
            <div className="contact-card">
              <p className="section-tag" style={{ justifyContent: "center" }}>Contact</p>
              <h2 className="section-heading" style={{ textAlign: "center" }}>
                Let&apos;s build something <span style={{ color: "var(--accent)" }}>extraordinary</span>.
              </h2>
              <p className="section-sub" style={{ margin: "1rem auto 0", textAlign: "center" }}>
                Whether it&apos;s a complex backend, an IoT system, a mobile app, or just a great conversation about cycling — reach out directly.
              </p>
              <div className="contact-links">
                <a href="mailto:hidirektor@gmail.com" className="btn btn-primary">
                  hidirektor@gmail.com
                </a>
                <a href="https://github.com/hidirektor" target="_blank" rel="noopener noreferrer" className="btn btn-outline">
                  GitHub ↗
                </a>
                <a href="https://linkedin.com/in/hidirektor" target="_blank" rel="noopener noreferrer" className="btn btn-outline">
                  LinkedIn ↗
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ── FOOTER ───────────────────────────────────────────── */}
        <footer>
          <div className="footer">
            <span className="footer-text">
              © {new Date().getFullYear()} Halil İbrahim Direktör — Software Architect &amp; Cyclist 🚴
            </span>
            <span className="footer-text">İzmir, Turkey</span>
          </div>
        </footer>
      </main>
    </>
  );
}
