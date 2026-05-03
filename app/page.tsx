import Header from "./components/Header";

/* ── DATA ─────────────────────────────────────────────────────────── */

const experience = [
  { period: "Nov 2025 – Present", role: "Software Team Lead", company: "Werover · İzmir, Turkey",
    bullets: ["Led software team focusing on innovation and scalable system design.", "Built and shipped impactful features for real-world energy monitoring.", "Established engineering culture: code reviews, documentation, CI/CD."] },
  { period: "Apr – Nov 2025", role: "Full Stack Developer", company: "Werover · İzmir, Turkey",
    bullets: ["Node.js/Express backend services, Docker + GitHub Actions CI/CD.", "AWS deployments: ECS Fargate, RDS, S3, CloudWatch.", "Next.js SSR dashboards for real-time energy monitoring.", "IoT device integration for real-time data ingestion."] },
  { period: "Aug 2024 – Mar 2025", role: "Native Mobile Developer", company: "Dynamic Brain Neurotechnology · Samsun",
    bullets: ["Cross-platform tDCS device control apps in Java, Kotlin, Swift, SwiftUI.", "OTA firmware update management and in-app exam system."] },
  { period: "Feb – Jun 2024", role: "Software Team Leader", company: "Woma Advertising · Istanbul",
    bullets: ["Led ML-powered mobile apps — 40% user engagement increase.", "Reduced codebase 30% via Node.js + Angular, designed CI/CD pipeline."] },
  { period: "Dec 2023 – Feb 2024", role: "Backend Developer", company: "Woma Advertising · Istanbul",
    bullets: ["40% faster data processing via Angular + Node.js redesign.", "Microservices migration with zero downtime, Jenkins CI/CD."] },
  { period: "May – Nov 2023", role: "R&D Engineer", company: "Önder Lift · Manisa, Turkey",
    bullets: ["Optimized lift control system for ESP-XL — 25% faster processing.", "IoT integration for remote diagnostics, 20% fewer service visits."] },
  { period: "Jan 2020 – Jan 2023", role: "Backend Developer", company: "Lebara Mobile · London, UK",
    bullets: ["API gateway handling 10,000+ req/min on Azure.", "React/Redux refactor — 50% performance improvement."] },
];

const techStack = [
  { cat: "Languages",    vals: "Java · Kotlin · Swift · JavaScript · TypeScript · C++ · Rust · Node.js" },
  { cat: "Mobile",       vals: "Android (XML, Jetpack Compose) · iOS (SwiftUI) · React Native" },
  { cat: "Backend",      vals: "Express · Next.js · Spring Boot · REST · WebSockets · MQTT" },
  { cat: "Databases",    vals: "MySQL · PostgreSQL · MongoDB · Redis · Firebase · Sequelize" },
  { cat: "Cloud",        vals: "AWS (ECS, RDS, S3) · Azure · GCP · Docker · Kubernetes · GitHub Actions" },
  { cat: "Embedded",     vals: "STM32 · ESP32 · FreeRTOS · Modbus · SPI · I2C · UART · ARM Mbed" },
];

const projects = [
  { title: "TÜBİTAK 2242 | DeepCompressLink",
    period: "Ongoing", pending: true,
    subtitle: "Delay-Tolerant Adaptive Data Compression Protocol for CubeSat Telemetry",
    desc: "Designing a DTN-compatible stateless compression protocol for CubeSat and deep-space telemetry, validated in SimPy-based simulations across LEO, lunar orbit, and Mars scenarios.",
    tools: ["Python", "SimPy", "DTN", "CubeSat"], github: "https://github.com/hidirektor" },
  { title: "TEKNOFEST | ONYX Thermal-Hydraulic Analysis",
    period: "Ongoing", pending: true,
    subtitle: "Thermal-Hydraulic Analysis Software for SMR/MMR Cooling Loops and Reactor Core",
    desc: "Team ONYX: C++ simulation engine with Node.js backend and Redis caching to analyze temperature, pressure drop, flow rate, and power output — validated against IAEA/OECD benchmarks.",
    tools: ["C++", "Node.js", "Redis", "React Native"], github: "https://github.com/hidirektor" },
  { title: "TÜBİTAK 2209-B | CompressM2M",
    period: "Ongoing", pending: true,
    subtitle: "Adaptive M2M Data Compression Protocol for Low-Power IoT Devices",
    desc: "Lightweight lossless adaptive compression protocol on ESP32-S3 to reduce payload size and energy usage in LoRaWAN and NB-IoT based M2M communication.",
    tools: ["C++", "ESP32-S3", "LoRaWAN", "NB-IoT"], github: "https://github.com/hidirektor" },
  { title: "Class Roll Call Management System",
    period: "Oct – Nov 2025", pending: false, subtitle: "",
    desc: "Real-time attendance tracking with dynamic QR codes, device fingerprinting, OTP auth and Excel export analytics.",
    tools: ["Next.js", "Node.js", "MySQL", "Redis", "Docker"], github: "https://github.com/hidirektor" },
  { title: "Open-Source Web 3.0 IIoT Platform",
    period: "Mar 2024 – May 2025", pending: false, subtitle: "",
    desc: "TÜBİTAK-funded IIoT platform for industrial PLCs — STM32/FreeRTOS firmware, Node.js cloud validated at 10k data points/min.",
    tools: ["C++", "FreeRTOS", "STM32", "Node.js", "MQTT"], github: "https://github.com/hidirektor" },
  { title: "Delivery Boy Mobile Application",
    period: "Dec 2023 – Apr 2024", pending: false, subtitle: "",
    desc: "Cross-platform e-commerce ecosystem: Spring Boot tracking service, native Android (Java) and iOS (Swift) apps.",
    tools: ["Java", "Spring Boot", "Swift", "Node.js"], github: "https://github.com/hidirektor" },
  { title: "TFEncryption",
    period: "Nov – Dec 2021", pending: false, subtitle: "",
    desc: "Encrypted P2P chat with WebRTC supporting SPN, SHA256 and MD5 encryption. JavaFX desktop UI.",
    tools: ["Java", "JavaFX", "WebRTC"], github: "https://github.com/hidirektor" },
];

const mediumArticles = [
  { title: "MQTT vs Alternatives: Choosing the Right Protocol for Industrial IoT",
    desc: "Comparing MQTT, AMQP, CoAP, WebSockets and OPC-UA on latency, bandwidth, QoS and reliability.", date: "2025", href: "https://medium.com/@hidirektor" },
  { title: "Building Scalable Embedded Systems with FreeRTOS and STM32",
    desc: "How I reduced CPU load 32% using DMA-based serial communication in a production IIoT project.", date: "2024", href: "https://medium.com/@hidirektor" },
  { title: "Zero-Downtime Database Migrations in Microservices",
    desc: "Practical strategies for migrating monolithic databases to microservices without service interruption.", date: "2024", href: "https://medium.com/@hidirektor" },
];

const linkedinPosts = [
  { title: "Why IoT and Cycling are the Same Problem",
    desc: "Every long-distance ride and every distributed system share one truth: efficiency over raw power.", date: "Apr 2025", href: "https://linkedin.com/in/hidirektor" },
  { title: "6 Months at Werover: Building an Energy Platform",
    desc: "From Node.js monolith to AWS microservices — the architectural decisions and lessons.", date: "Nov 2025", href: "https://linkedin.com/in/hidirektor" },
  { title: "From Mechatronics to Software Architecture",
    desc: "How an engineering background gives an unfair advantage in hardware-software interfaces.", date: "Mar 2025", href: "https://linkedin.com/in/hidirektor" },
];

const favorites = [
  { e: "🎬", name: "Interstellar",              meta: "Film · Sci-Fi" },
  { e: "🎬", name: "The Martian",               meta: "Film · Sci-Fi" },
  { e: "🎬", name: "Ex Machina",                meta: "Film · AI" },
  { e: "📺", name: "Black Mirror",              meta: "Series · Tech" },
  { e: "📺", name: "Westworld",                 meta: "Series · AI" },
  { e: "📺", name: "Silicon Valley",            meta: "Series · Comedy" },
  { e: "📚", name: "Clean Code",                meta: "Book · Engineering" },
  { e: "📚", name: "The Pragmatic Programmer",  meta: "Book · Craft" },
  { e: "🎵", name: "Hans Zimmer",               meta: "Music · Cinematic" },
  { e: "🚴", name: "Trans Anatolia Route",      meta: "Cycling · Dream Route" },
  { e: "🚴", name: "İzmir – Çeşme",            meta: "Cycling · Local Favorite" },
  { e: "🌍", name: "Open Source",               meta: "Passion · Building" },
];

/* ── PAGE ─────────────────────────────────────────────────────────── */

export default function Home() {
  return (
    <>
      <div
        aria-hidden
        style={{
          position: "fixed", inset: 0, zIndex: 0, pointerEvents: "none",
          background: "radial-gradient(ellipse at 30% 20%, rgba(0,100,180,0.04) 0%, transparent 60%)",
        }}
      />

      <Header />

      <main id="top" style={{ position: "relative", zIndex: 1 }}>

        {/* ── HERO ─────────────────────────────────────────── */}
        <section className="hero" style={{ borderTop: "none" }}>
          <div
            className="hero-bg"
            aria-hidden
            style={{ backgroundPosition: "70% center" }}
          />
          <div className="wrap hero-inner" style={{ paddingTop: "2rem", paddingBottom: "2rem" }}>
            <p className="anim-1" style={{ fontSize: "0.75rem", color: "var(--muted)", letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: "1.5rem" }}>
              Software Architect · İzmir, Turkey
            </p>
            <h1 className="hero-name anim-2">
              Halil İbrahim<br />
              <em>Direktör</em>
            </h1>
            <p className="hero-tagline anim-3">
              Building scalable systems from embedded firmware to cloud infrastructure.
              Mechatronics-turned-software engineer — and a semi-professional cyclist.
            </p>
            <div className="hero-links anim-4">
              <a href="mailto:hidirektor@gmail.com" className="hero-link-primary">
                hidirektor@gmail.com
              </a>
              <a href="https://github.com/hidirektor" target="_blank" rel="noopener noreferrer" className="hero-link-muted">GitHub ↗</a>
              <a href="https://linkedin.com/in/hidirektor" target="_blank" rel="noopener noreferrer" className="hero-link-muted">LinkedIn ↗</a>
              <a href="https://medium.com/@hidirektor" target="_blank" rel="noopener noreferrer" className="hero-link-muted">Medium ↗</a>
            </div>
          </div>
        </section>

        {/* ── ABOUT ────────────────────────────────────────── */}
        <section id="about">
          <div className="wrap-wide">
            <p className="label">About</p>
            <div className="about-grid">
              <div>
                <p className="section-h">Engineering at the intersection of silicon and software.</p>
                <p className="section-p" style={{ marginTop: "1rem" }}>
                  I started with mechatronics engineering at Manisa Celal Bayar University (GPA 3.32/4.00),
                  giving me a rare dual perspective — I understand both the hardware and the stack.
                  From lift control systems to cloud-native IoT platforms, I build things that work at scale.
                </p>
                <p className="section-p" style={{ marginTop: "0.75rem" }}>
                  Outside work I'm a semi-professional cyclist obsessed with long-distance rides.
                  The same discipline that keeps me optimizing for endurance over sprints in every system I build.
                </p>
                <div className="info-list">
                  {[
                    { k: "Location",   v: "İzmir, Turkey" },
                    { k: "Education",  v: "B.Sc. Mechatronics Eng." },
                    { k: "Languages",  v: "Turkish · English · German" },
                    { k: "Interests",  v: "Cycling, Long-Distance Rides" },
                  ].map((r) => (
                    <div key={r.k} className="info-row">
                      <span className="info-key">{r.k}</span>
                      <span className="info-val">{r.v}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="stat-grid">
                {[
                  { n: "6+",  l: "Years of Experience" },
                  { n: "10+", l: "Companies & Projects" },
                  { n: "4",   l: "Countries Worked In" },
                  { n: "2",   l: "TÜBİTAK Grants" },
                ].map((s) => (
                  <div key={s.l} className="stat-box">
                    <span className="stat-num">{s.n}</span>
                    <span className="stat-lbl">{s.l}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── EXPERIENCE ───────────────────────────────────── */}
        <section id="experience">
          <div className="wrap">
            <p className="label">Experience</p>
            <div className="exp-list">
              {experience.map((e) => (
                <div key={e.role + e.period} className="exp-item">
                  <div className="exp-meta">
                    <span className="exp-role">{e.role}</span>
                    <span className="exp-period">{e.period}</span>
                  </div>
                  <p className="exp-company">{e.company}</p>
                  <ul className="exp-bullets">
                    {e.bullets.map((b, i) => <li key={i}>{b}</li>)}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── TECH ─────────────────────────────────────────── */}
        <section id="tech">
          <div className="wrap">
            <p className="label">Tech Stack</p>
            <div className="skills-block">
              {techStack.map((t) => (
                <div key={t.cat} className="skill-row">
                  <span className="skill-cat">{t.cat}</span>
                  <span className="skill-vals">{t.vals}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── PROJECTS ─────────────────────────────────────── */}
        <section id="projects">
          <div className="wrap-wide">
            <p className="label">Projects</p>
            <div className="projects-list">
              {projects.map((p) => (
                <div key={p.title} className="project-item">
                  <div>
                    <p className="project-title">{p.title}</p>
                    {p.subtitle && <p className="project-subtitle">{p.subtitle}</p>}
                    <p className="project-desc">{p.desc}</p>
                    <div className="project-tools">
                      {p.tools.map((t) => <span key={t} className="project-tool">{t}</span>)}
                    </div>
                  </div>
                  <div className="project-right">
                    <span className="project-period">{p.period}</span>
                    {p.pending && (
                      <div className="status-badges">
                        <span className="status-badge badge-pending">Support: Pending</span>
                        <span className="status-badge badge-ongoing">Ongoing</span>
                      </div>
                    )}
                    <a href={p.github} target="_blank" rel="noopener noreferrer" className="project-gh">
                      GitHub ↗
                    </a>
                  </div>
                </div>
              ))}
            </div>

            {/* Publication note */}
            <div style={{ marginTop: "2rem", paddingTop: "1.5rem", borderTop: "1px solid var(--border)" }}>
              <p style={{ fontSize: "0.72rem", color: "var(--muted)", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "0.5rem" }}>Publication</p>
              <p style={{ fontSize: "0.85rem", color: "var(--text)", marginBottom: "0.25rem" }}>
                MQTT vs Alternatives: Choosing the Right Protocol for Industrial IoT
              </p>
              <p style={{ fontSize: "0.78rem", color: "var(--muted)", lineHeight: 1.6 }}>
                Direktor, H. I. (2025). Submitted to <em>IEEE Internet of Things Journal</em>. TÜBİTAK 2209-B No: 1139B412301407.
              </p>
            </div>
          </div>
        </section>

        {/* ── WRITING ──────────────────────────────────────── */}
        <section id="writing">
          <div className="wrap">
            <p className="label">Writing</p>

            <p style={{ fontSize: "0.72rem", color: "var(--muted)", marginBottom: "0.75rem", textTransform: "uppercase", letterSpacing: "0.08em" }}>Medium</p>
            <div className="writing-list" style={{ marginBottom: "2.5rem" }}>
              {mediumArticles.map((a) => (
                <a key={a.title} href={a.href} target="_blank" rel="noopener noreferrer" className="writing-item">
                  <div>
                    <p className="writing-platform platform-medium">Medium</p>
                    <p className="writing-title">{a.title}</p>
                    <p className="writing-desc">{a.desc}</p>
                  </div>
                  <span className="writing-date">{a.date}</span>
                </a>
              ))}
            </div>

            <p style={{ fontSize: "0.72rem", color: "var(--muted)", marginBottom: "0.75rem", textTransform: "uppercase", letterSpacing: "0.08em" }}>LinkedIn</p>
            <div className="writing-list">
              {linkedinPosts.map((p) => (
                <a key={p.title} href={p.href} target="_blank" rel="noopener noreferrer" className="writing-item">
                  <div>
                    <p className="writing-platform platform-linkedin">LinkedIn</p>
                    <p className="writing-title">{p.title}</p>
                    <p className="writing-desc">{p.desc}</p>
                  </div>
                  <span className="writing-date">{p.date}</span>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* ── FAVORITES ────────────────────────────────────── */}
        <section id="favorites">
          <div className="wrap">
            <p className="label">Favorites</p>
            <p className="section-p" style={{ marginBottom: "2rem" }}>Films, series, books and rides that keep me inspired.</p>
            <div className="fav-grid">
              {favorites.map((f) => (
                <div key={f.name} className="fav-item">
                  <span className="fav-emoji">{f.e}</span>
                  <div className="fav-content">
                    <p className="fav-name">{f.name}</p>
                    <p className="fav-meta">{f.meta}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CONTACT ──────────────────────────────────────── */}
        <section id="contact">
          <div className="wrap">
            <p className="label">Contact</p>
            <p className="section-h">Let's talk.</p>
            <p className="section-p" style={{ marginTop: "0.5rem", marginBottom: "1.75rem" }}>
              Whether it's a backend, an IoT project, a mobile app, or just a good cycling route recommendation — reach out.
            </p>
            <div className="contact-wrap">
              <a href="mailto:hidirektor@gmail.com" className="contact-mail">
                hidirektor@gmail.com ↗
              </a>
              <div className="contact-row">
                <a href="https://github.com/hidirektor" target="_blank" rel="noopener noreferrer" className="contact-link">GitHub</a>
                <a href="https://linkedin.com/in/hidirektor" target="_blank" rel="noopener noreferrer" className="contact-link">LinkedIn</a>
                <a href="https://medium.com/@hidirektor" target="_blank" rel="noopener noreferrer" className="contact-link">Medium</a>
                <a href="https://hidirektor.dev" target="_blank" rel="noopener noreferrer" className="contact-link">hidirektor.dev</a>
              </div>
            </div>
          </div>
        </section>

        {/* ── FOOTER ───────────────────────────────────────── */}
        <footer>
          <div className="footer">
            <span className="footer-text">© {new Date().getFullYear()} Halil İbrahim Direktör</span>
            <span className="footer-text">Software Architect · İzmir, Turkey 🚴</span>
          </div>
        </footer>

      </main>
    </>
  );
}
