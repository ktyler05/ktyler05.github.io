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

function SectionTitle({
  children,
  eyebrow,
}: {
  children: React.ReactNode;
  eyebrow?: string;
}) {
  return (
    <div className="mb-4">
      {eyebrow ? (
        <p className="text-xs font-semibold tracking-widest text-slate-500">
          {eyebrow.toUpperCase()}
        </p>
      ) : null}
      <h2 className="text-xl font-semibold tracking-tight text-slate-900">
        {children}
      </h2>
    </div>
  );
}

function Card({ children }: { children: React.ReactNode }) {
  return (
    <div className="group relative rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md">
      {/* pastel edge glow */}
      <div className="pointer-events-none absolute inset-0 rounded-3xl opacity-0 transition-opacity duration-200 group-hover:opacity-100">
        <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-pink-200/40 via-purple-200/30 to-sky-200/40" />
      </div>
      <div className="relative">{children}</div>
    </div>
  );
}

function Chip({ children }: { children: React.ReactNode }) {
  return (
    <span className="rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-medium text-slate-700 shadow-sm">
      {children}
    </span>
  );
}

function SoftLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  const external = href.startsWith("http");
  return (
    <a
      href={href}
      className="inline-flex items-center gap-1 rounded-full border border-slate-200 bg-white px-3 py-1.5 text-sm font-semibold text-slate-800 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
      target={external ? "_blank" : undefined}
      rel={external ? "noreferrer" : undefined}
    >
      {children}
      <span className="text-slate-400">↗</span>
    </a>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      {/* Soft pastel background accents */}
      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-28 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-pink-200/40 blur-3xl" />
        <div className="absolute top-40 left-12 h-72 w-72 rounded-full bg-purple-200/35 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-sky-200/35 blur-3xl" />
      </div>

      {/* Nav */}
      <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/80 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <a href="#top" className="font-semibold tracking-tight text-slate-900">
            Kendra Tyler
          </a>

          <nav className="hidden gap-6 text-sm text-slate-600 md:flex">
            <a className="hover:text-slate-900" href="#projects">
              Projects
            </a>
            <a className="hover:text-slate-900" href="#writing">
              Writing
            </a>
            <a className="hover:text-slate-900" href="#skills">
              Skills
            </a>
            <a className="hover:text-slate-900" href="#contact">
              Contact
            </a>
          </nav>

          <div className="flex gap-2">
            <a
              className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-800 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
              href="https://github.com/ktyler05"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
            <a
              className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-800 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
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
            <p className="text-sm font-medium text-slate-600">
              Data Journalism • Data Analytics • Computer Science + MSc Computational & Data Journalism
            </p>

            <h1 className="mt-3 text-4xl font-bold tracking-tight md:text-5xl">
              I find stories in data and make them clear.
            </h1>

            <p className="mt-4 max-w-xl text-slate-600">
              I combine analysis, programming, and reporting to uncover insights and communicate them
              through writing and interactive visualisations.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="#projects"
                className="rounded-full bg-slate-900 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
              >
                View projects
              </a>
              <a
                href="#contact"
                className="rounded-full border border-slate-200 bg-white px-5 py-2.5 text-sm font-semibold text-slate-800 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
              >
                Contact me
              </a>
              <a
                href="#"
                className="rounded-full border border-slate-200 bg-white px-5 py-2.5 text-sm font-semibold text-slate-800 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
                title="Add a CV PDF later"
              >
                Download CV
              </a>
            </div>
          </div>

          <div className="md:col-span-2">
            <Card>
              <SectionTitle eyebrow="Snapshot">At a glance</SectionTitle>
              <ul className="space-y-2 text-slate-700">
                <li>• Investigations + FOI requests</li>
                <li>• Python + SQL analysis pipelines</li>
                <li>• Interactive storytelling in React</li>
                <li>• Clear charts + explanatory writing</li>
              </ul>

              <div className="mt-5 flex flex-wrap gap-2">
                {["Python", "SQL", "React", "Data Viz"].map((t) => (
                  <Chip key={t}>{t}</Chip>
                ))}
              </div>
            </Card>
          </div>
        </section>

        {/* Projects */}
        <section id="projects" className="mt-14">
          <div className="flex items-end justify-between gap-4">
            <SectionTitle eyebrow="Selected work">Projects</SectionTitle>
            <p className="text-sm text-slate-500">3 featured pieces</p>
          </div>

          <div className="mt-6 grid gap-6 md:grid-cols-3">
            {projects.map((p) => (
              <Card key={p.title}>
                <h3 className="text-lg font-semibold text-slate-900">{p.title}</h3>
                <p className="mt-2 text-sm text-slate-600">{p.desc}</p>

                <div className="mt-4 flex flex-wrap gap-2">
                  {p.tags.map((tag) => (
                    <Chip key={tag}>{tag}</Chip>
                  ))}
                </div>

                {"meta" in p && p.meta ? (
                  <p className="mt-4 text-xs text-slate-500">{p.meta}</p>
                ) : null}

                <div className="mt-5 flex flex-wrap gap-2">
                  {p.links.map((l) => (
                    <SoftLink key={l.label} href={l.href}>
                      {l.label}
                    </SoftLink>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </section>

        {/* Writing */}
        <section id="writing" className="mt-14">
          <SectionTitle eyebrow="Reporting">Writing</SectionTitle>

          <div className="mt-6 grid gap-6 md:grid-cols-2">
            <Card>
              <p className="text-sm font-semibold text-slate-700">
                Selected articles / investigations
              </p>

              <ul className="mt-4 space-y-3">
                {writing.map((w) => (
                  <li key={w.title} className="flex items-start justify-between gap-4">
                    <div>
                      <p className="font-medium text-slate-900">{w.title}</p>
                      <p className="text-sm text-slate-500">{w.outlet}</p>
                    </div>
                    <a
                      href={w.href}
                      className="text-sm font-semibold text-slate-800 underline decoration-slate-300 underline-offset-4 hover:decoration-slate-500"
                      target={w.href.startsWith("http") ? "_blank" : undefined}
                      rel={w.href.startsWith("http") ? "noreferrer" : undefined}
                    >
                      Read
                    </a>
                  </li>
                ))}
              </ul>

              <p className="mt-4 text-xs text-slate-500">
                (Swap these placeholders for your published links.)
              </p>
            </Card>

            <Card>
              <p className="text-sm font-semibold text-slate-700">Interests</p>
              <ul className="mt-4 space-y-2 text-slate-700">
                <li>• Public-interest investigations</li>
                <li>• Equality, labour and accountability reporting</li>
                <li>• Mapping + spatial data storytelling</li>
                <li>• Building tools that help people understand systems</li>
              </ul>
            </Card>
          </div>
        </section>

        {/* Skills */}
        <section id="skills" className="mt-14">
          <SectionTitle eyebrow="Toolkit">Skills</SectionTitle>
          <p className="max-w-2xl text-slate-600">
            A blend of reporting and technical work: analysis pipelines, reproducibility, and communication.
          </p>

          <div className="mt-5 flex flex-wrap gap-2">
            {skills.map((s) => (
              <Chip key={s}>{s}</Chip>
            ))}
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="mt-14">
          <SectionTitle eyebrow="Say hi">Contact</SectionTitle>

          <div className="mt-6 grid gap-6 md:grid-cols-2">
            <Card>
              <p className="text-slate-700">
                Best way to reach me: <span className="font-semibold text-slate-900">email</span>.
              </p>

              <div className="mt-4 space-y-2 text-slate-700">
                <p>
                  Email:{" "}
                  <a
                    className="font-semibold underline decoration-slate-300 underline-offset-4 hover:decoration-slate-500"
                    href="mailto:kendraAliceTyler@gmail.com"
                  >
                    kendraAliceTyler@gmail.com
                  </a>
                </p>

                <p>
                  GitHub:{" "}
                  <a
                    className="font-semibold underline decoration-slate-300 underline-offset-4 hover:decoration-slate-500"
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
                    className="font-semibold underline decoration-slate-300 underline-offset-4 hover:decoration-slate-500"
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
              <p className="text-sm font-semibold text-slate-700">Quick upgrade</p>
              <p className="mt-2 text-slate-600">
                Replace the placeholder project titles with 1–2 more pieces, and add a short
                “Question → Method → Findings” write-up for each. Recruiters love that format.
              </p>
            </Card>
          </div>
        </section>

        <footer className="mt-14 border-t border-slate-200 pt-6 text-sm text-slate-500">
          © {new Date().getFullYear()} Kendra Tyler • Built with React + Tailwind
        </footer>
      </main>
    </div>
  );
}