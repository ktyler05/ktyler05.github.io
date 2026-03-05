const projects = [
  {
    title: "KKA Pay Gap — Interactive Data Journalism Quiz",
    desc: "An interactive site that teaches readers key pay gap facts through a quiz format, paired with an explanatory article. Built as a Master’s data journalism project with Alice Collyer and Kim Encarnacion.",
    tags: ["Data storytelling", "Interactive quiz", "Web publishing", "Collaboration"],
    meta: "Collaborators: Alice Collyer • Kim Encarnacion",
    links: [
      { label: "Live site", href: "https://paygap-kka.netlify.app" },
      { label: "Source code", href: "https://github.com/ktyler05/KKA_PayGap/" },
    ],
  },
  {
    title: "Interactive Visualisation: [Project Title]",
    desc: "A short line explaining what users can explore and what insight it reveals.",
    tags: ["React", "TypeScript", "D3", "Storytelling"],
    links: [
      { label: "Live", href: "#" },
      { label: "Repo", href: "#" },
    ],
  },
  {
    title: "Analytics Case Study: [Project Title]",
    desc: "Clear business-style summary: dataset → method → result → impact.",
    tags: ["SQL", "EDA", "Statistics", "Dashboards"],
    links: [
      { label: "Case study", href: "#" },
      { label: "Repo", href: "#" },
    ],
  },
];

const writing = [
  { title: "Article: [Title]", outlet: "Publication / Blog", href: "#" },
  { title: "Investigation: [Title]", outlet: "Publication / Blog", href: "#" },
];

const skills = [
  "Python (pandas, NumPy)",
  "SQL",
  "Data cleaning",
  "Exploratory data analysis",
  "Statistics",
  "Data visualisation",
  "JavaScript / TypeScript",
  "React",
  "Git / GitHub",
  "FOI + verification",
  "Investigative research",
  "Clear writing & storytelling",
];

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="text-xl font-semibold tracking-tight text-white">{children}</h2>
  );
}

function Card({ children }: { children: React.ReactNode }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-6 shadow-sm backdrop-blur">
      {children}
    </div>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      {/* Background glow */}
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute -top-40 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-indigo-500/20 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-fuchsia-500/10 blur-3xl" />
      </div>

      {/* Nav */}
      <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/70 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <a href="#top" className="font-semibold tracking-tight">
            Kendra Tyler
          </a>

          <nav className="hidden gap-6 text-sm text-slate-300 md:flex">
            <a className="hover:text-white" href="#projects">Projects</a>
            <a className="hover:text-white" href="#writing">Writing</a>
            <a className="hover:text-white" href="#skills">Skills</a>
            <a className="hover:text-white" href="#contact">Contact</a>
          </nav>

          <div className="flex gap-2">
            <a
              className="rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-sm text-slate-200 hover:bg-white/10"
              href="https://github.com/ktyler05"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
            <a
              className="rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-sm text-slate-200 hover:bg-white/10"
              href="https://www.linkedin.com/in/kendra-tyler-515101261/"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </header>

      <main id="top" className="mx-auto max-w-6xl px-6 py-12">
        {/* Hero */}
        <section className="grid gap-8 md:grid-cols-5 md:items-center">
          <div className="md:col-span-3">
            <p className="text-sm text-slate-300">
              Data Journalism • Data Analytics • Computer Science + MSc Computational & Data Journalism
            </p>

            <h1 className="mt-3 text-4xl font-bold tracking-tight md:text-5xl">
              I find stories in data and make them clear.
            </h1>

            <p className="mt-4 max-w-xl text-slate-300">
              I combine analysis, programming, and reporting to uncover insights and communicate them
              through writing and interactive visualisations.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="#projects"
                className="rounded-xl bg-white px-4 py-2 text-sm font-semibold text-slate-950 hover:bg-slate-200"
              >
                View projects
              </a>
              <a
                href="#contact"
                className="rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm font-semibold text-white hover:bg-white/10"
              >
                Contact me
              </a>
              <a
                href="#"
                className="rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm font-semibold text-white hover:bg-white/10"
                title="Add a CV PDF later"
              >
                Download CV
              </a>
            </div>
          </div>

          <div className="md:col-span-2">
            <Card>
              <SectionTitle>At a glance</SectionTitle>
              <ul className="mt-4 space-y-2 text-slate-300">
                <li>• Investigations + FOI requests</li>
                <li>• Python + SQL analysis pipelines</li>
                <li>• Interactive storytelling in React</li>
                <li>• Clean charts + explanatory writing</li>
              </ul>

              <div className="mt-5 flex flex-wrap gap-2">
                {["Python", "SQL", "React", "Data Viz"].map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-200"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </Card>
          </div>
        </section>

        {/* Projects */}
        <section id="projects" className="mt-14">
          <div className="flex items-end justify-between gap-4">
            <SectionTitle>Projects</SectionTitle>
            <p className="text-sm text-slate-400">3 featured pieces</p>
          </div>

          <div className="mt-6 grid gap-6 md:grid-cols-3">
            {projects.map((p) => (
              <Card key={p.title}>
                <h3 className="text-lg font-semibold">{p.title}</h3>
                <p className="mt-2 text-sm text-slate-300">{p.desc}</p>

                <div className="mt-4 flex flex-wrap gap-2">
                  {p.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-200"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {("meta" in p && p.meta) ? (
                  <p className="mt-4 text-xs text-slate-400">{p.meta}</p>
                ) : null}

                <div className="mt-5 flex gap-3 text-sm">
                  {p.links.map((l) => (
                    <a
                      key={l.label}
                      href={l.href}
                      className="text-slate-200 underline decoration-white/20 underline-offset-4 hover:text-white hover:decoration-white/50"
                      target={l.href.startsWith("http") ? "_blank" : undefined}
                      rel={l.href.startsWith("http") ? "noreferrer" : undefined}
                    >
                      {l.label}
                    </a>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </section>

        {/* Writing */}
        <section id="writing" className="mt-14">
          <SectionTitle>Writing</SectionTitle>
          <div className="mt-6 grid gap-6 md:grid-cols-2">
            <Card>
              <p className="text-sm text-slate-400">Selected articles / investigations</p>
              <ul className="mt-4 space-y-3">
                {writing.map((w) => (
                  <li key={w.title} className="flex items-start justify-between gap-4">
                    <div>
                      <p className="font-medium">{w.title}</p>
                      <p className="text-sm text-slate-400">{w.outlet}</p>
                    </div>
                    <a
                      href={w.href}
                      className="text-sm text-slate-200 underline decoration-white/20 underline-offset-4 hover:text-white hover:decoration-white/50"
                      target={w.href.startsWith("http") ? "_blank" : undefined}
                      rel={w.href.startsWith("http") ? "noreferrer" : undefined}
                    >
                      Read
                    </a>
                  </li>
                ))}
              </ul>
            </Card>

            <Card>
              <p className="text-sm text-slate-400">What I’m into</p>
              <ul className="mt-4 space-y-2 text-slate-300">
                <li>• Public-interest investigations</li>
                <li>• Elections / local government / accountability reporting</li>
                <li>• Mapping + spatial data storytelling</li>
                <li>• Building tools that help people understand systems</li>
              </ul>
            </Card>
          </div>
        </section>

        {/* Skills */}
        <section id="skills" className="mt-14">
          <SectionTitle>Skills</SectionTitle>
          <p className="mt-2 max-w-2xl text-slate-300">
            A blend of reporting and technical work: analysis pipelines, reproducibility, and communication.
          </p>

          <div className="mt-5 flex flex-wrap gap-2">
            {skills.map((s) => (
              <span
                key={s}
                className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm text-slate-200"
              >
                {s}
              </span>
            ))}
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="mt-14">
          <SectionTitle>Contact</SectionTitle>
          <div className="mt-6 grid gap-6 md:grid-cols-2">
            <Card>
              <p className="text-slate-300">
                Best way to reach me: <span className="text-white font-medium">email</span>.
              </p>
              <div className="mt-4 space-y-2 text-slate-300">
                <p>
                  Email:{" "}
                  <a
                    className="underline decoration-white/20 underline-offset-4 hover:decoration-white/50"
                    href="mailto:kendraAliceTyler@gmail.com"
                  >
                    kendraAliceTyler@gmail.com
                  </a>
                </p>
                <p>
                  GitHub:{" "}
                  <a
                    className="underline decoration-white/20 underline-offset-4 hover:decoration-white/50"
                    href="https://github.com/ktyler05"
                    target="_blank"
                    rel="noreferrer"
                  >
                    github.com/ktyler05
                  </a>
                </p>
                <p>
                  LinkedIn:{" "}
                  <a
                    className="underline decoration-white/20 underline-offset-4 hover:decoration-white/50"
                    href="https://www.linkedin.com/in/kendra-tyler-515101261/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    kendra-tyler-515101261
                  </a>
                </p>
              </div>
            </Card>

            <Card>
              <p className="text-sm text-slate-400">Tip</p>
              <p className="mt-2 text-slate-300">
                The fastest way to make this feel “real” is to replace the placeholder project titles with your
                next 1–2 best pieces, and link them (live demo / repo / write-up).
              </p>
            </Card>
          </div>
        </section>

        <footer className="mt-14 border-t border-white/10 pt-6 text-sm text-slate-400">
          © {new Date().getFullYear()} Kendra Tyler • Built with React + Tailwind
        </footer>
      </main>
    </div>
  );
}