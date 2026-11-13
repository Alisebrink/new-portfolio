import ScrollProgress from "../components/scrollProgress";
import PortfolioNavigation from "../components/PortfolioNavigation";
import "./page.css";
import Image from "next/image";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaStackOverflow } from "react-icons/fa";
import { ProjectCard } from "../components/ProjectCard";
import otherProjects from "./data/otherProjects.json";
import mainProjects from "./data/mainProjects.json";

const expertise = [
  {
    title: "UX/UI och digital design",
    items: [
      "Användarstudier, användarflöden och interaktionsdesign",
      "Wireframes, prototyper och designskisser",
      "Layout, visuell design och typografi",
      "Designsystem och komponentbibliotek",
      "E-handel",
    ],
  },
  {
    title: "Tillgänglighet",
    items: [
      "WCAG i design och utveckling",
      "Tillgängliga gränssnitt och användarflöden",
    ],
  },
  {
    title: "Frontendutveckling",
    items: [
      "Angular, React och Next.js",
      "JavaScript och TypeScript",
      "Responsiva gränssnitt med HTML, CSS och Tailwind CSS",
      "Gränssnittskomponenter och tillståndshantering",
    ],
  },
  {
    title: "Krav och test",
    items: [
      "Kravanalys, användarberättelser och acceptanskriterier",
      "Manuell gränssnitts-, funktions- och regressionstestning",
      "Testautomatisering med Playwright och Cypress",
      "Testdokumentation och stöd i kvalitetssäkring",
      "ISTQB Foundation-certifiering",
    ],
  },
];

const tools = [
  "Visual Studio",
  "DevOps",
  "Git",
  "Photoshop",
  "InDesign",
  "Adobe XD",
  "Figma",
  "Balsamiq",
  "Jira",
  "Miro",
  "WordPress",
  "Claude Code",
];

export default function Home() {
  return (
    <>
      <a href="#main-content" className="skip-link">
        Hoppa till huvudinnehållet
      </a>
      <header className="sticky top-0 z-50 border-b border-line bg-background">
        <PortfolioNavigation />
        <ScrollProgress />
      </header>

      <main id="main-content" tabIndex={-1} className="bg-background text-foreground">
        {/* Hero */}
        <section
          id="hero"
          tabIndex={-1}
          className="hero-section flex items-center justify-center px-4 py-14 sm:px-6 sm:py-20"
        >
          <div className="max-w-4xl text-center">
            <p className="text-xs sm:text-sm uppercase tracking-[0.2em] text-heading mb-4">
              UX/UI . Kravanalys . Frontend . Mjukvarutestning
            </p>
            <h1 className="mb-4 text-balance text-3xl font-bold sm:text-4xl md:text-5xl lg:text-6xl">
              Hej. Jag heter Linnea,
              <span className="block text-accent">
                jag designar och bygger digitala upplevelser.
              </span>
            </h1>
            <p className="text-sm sm:text-base text-muted mb-8">
              Jag brinner för att förvandla komplexa utmaningar till enkla, intuitiva och tillgängliga digitala upplevelser. Med kreativitet, nyfikenhet och användaren i fokus vill jag skapa lösningar som både fungerar och känns rätt.
            </p>
            <div className="mx-auto flex max-w-xs flex-col justify-center gap-3 sm:max-w-none sm:flex-row sm:flex-wrap sm:gap-4">
              <a
                href="#projects"
                className="px-6 py-3 rounded-full bg-action text-on-action text-sm sm:text-base font-medium hover:bg-action-hover transition text-center"
              >
                Se mina projekt
              </a>
              <a
                href="#contact"
                className="px-6 py-3 rounded-full border border-control hover:border-accent hover:text-accent transition text-sm sm:text-base text-center"
              >
                Kontakta mig
              </a>
            </div>
          </div>
        </section>

        {/* Om mig */}
        <section
          id="about"
          tabIndex={-1}
          className="px-4 py-12 sm:px-6 sm:py-20"
        >
          <div className="mx-auto max-w-5xl">
            <h2 className="mb-6 text-2xl font-semibold text-heading sm:text-3xl">
              Om mig
            </h2>
            <div className="grid items-start gap-6 md:grid-cols-[minmax(0,1fr)_minmax(0,2fr)] md:gap-8 lg:gap-12">
              <Image
                src="/images/profile.jpg"
                alt="Porträtt av Linnea Isebrink"
                width={300}
                height={300}
                sizes="(min-width: 1024px) 300px, (min-width: 768px) 30vw, (min-width: 640px) 256px, 176px"
                className="aspect-square w-44 max-w-full object-cover sm:w-64 md:w-full md:max-w-[300px]"
              />

              <div className="space-y-4 text-sm leading-relaxed text-muted sm:text-base">
                <p>
                  Jag är baserad i Dalarna och har över sex års erfarenhet av att arbeta med digitala lösningar. I mitt arbete kombinerar jag UX/UI, frontendutveckling, kravanalys och mjukvarutestning med fokus på tillgänglighet.
                </p>
                <p>
                  Min tekniska verktygslåda omfattar HTML, CSS, JavaScript och TypeScript samt ramverk och verktyg som React, Angular, Next.js och Tailwind CSS. Jag har även erfarenhet av Microsoft 365, SharePoint och Power Platform, där jag arbetar med att skapa användarvänliga lösningar som förenklar digitala arbetssätt.
                </p>
                <p>
                  Jag trivs bäst i gränslandet mellan design, teknik och verksamhet. Genom att kombinera användarinsikter, kravarbete och kvalitetssäkring kan jag se både detaljerna och helheten. För mig handlar bra design inte bara om hur något ser ut, utan framför allt om hur det fungerar, upplevs och skapar värde för användaren.
                </p>
                <a
                  href="https://linneaiseb.wixsite.com/minportfolio"
                  className="inline-flex min-h-9 items-center rounded-full border border-control px-3 font-semibold text-accent hover:bg-surface"
                >
                  Se mina tidigare designprojekt
                </a>
              </div>
            </div>

            <div className="mt-8 rounded-2xl bg-surface p-5 sm:mt-10 sm:p-8">
              <h3 className="mb-5 text-lg font-semibold text-heading sm:text-xl">
                Kompetenser
              </h3>

              <div className="grid gap-x-10 gap-y-6 sm:grid-cols-2">
                {expertise.map(({ title, items }) => (
                  <div key={title}>
                    <h4 className="mb-2 font-semibold text-foreground">{title}</h4>
                    <ul className="list-disc space-y-1 pl-4 text-sm text-muted">
                      {items.map((item) => <li key={item}>{item}</li>)}
                    </ul>
                  </div>
                ))}
              </div>

              <div className="mt-6 border-t border-line pt-5">
                <h4 className="mb-2 font-semibold text-foreground">Kommunikation och innehåll</h4>
                <ul className="list-disc space-y-1 pl-4 text-sm text-muted">
                  <li>Texter för webb och nyhetsbrev samt innehållsplanering</li>
                  <li>Grafik, bilder och annat visuellt material</li>
                  <li>Presentationer och workshops</li>
                </ul>
              </div>

              <div className="mt-6 border-t border-line pt-5">
                <h4 className="mb-3 font-semibold text-foreground">Verktyg och plattformar</h4>
                <ul role="list" className="flex flex-wrap gap-2">
                  {tools.map((tool) => (
                    <li key={tool} className="rounded bg-tag px-2.5 py-1 text-sm text-tag-ink">
                      {tool}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Socials */}
        <section
          id="socials"
          aria-labelledby="socials-heading"
          className="bg-surface px-4 py-12 sm:px-6 sm:py-20"
        >
          <div className="mx-auto max-w-5xl">
            <h2 id="socials-heading" className="sr-only">Sociala profiler</h2>
            <ul className="grid grid-cols-3 items-start gap-2 text-center sm:gap-8">
              <li>
                <a href="https://www.linkedin.com/in/linnea-isebrink/" className="flex min-h-11 flex-col items-center gap-3 rounded-md motion-safe:transition-transform motion-safe:hover:-translate-y-1">
                  <FaLinkedin aria-hidden="true" className="size-10 sm:size-16 md:size-20" />
                  <span className="wrap-anywhere text-xs font-medium sm:text-base md:text-lg">
                    LinkedIn
                  </span>
                </a>
              </li>
              <li>
                <a href="https://github.com/Alisebrink" className="flex min-h-11 flex-col items-center gap-3 rounded-md motion-safe:transition-transform motion-safe:hover:-translate-y-1">
                  <FaGithub aria-hidden="true" className="size-10 sm:size-16 md:size-20" />
                  <span className="wrap-anywhere text-xs font-medium sm:text-base md:text-lg">
                    GitHub
                  </span>
                </a>
              </li>
              <li>
                <a href="https://stackoverflow.com/users/16650754/linnea" className="flex min-h-11 flex-col items-center gap-3 rounded-md motion-safe:transition-transform motion-safe:hover:-translate-y-1">
                  <FaStackOverflow aria-hidden="true" className="size-10 sm:size-16 md:size-20" />
                  <span className="wrap-anywhere text-xs font-medium sm:text-base md:text-lg">
                    Stack Overflow
                  </span>
                </a>
              </li>
            </ul>
          </div>
        </section>

        {/* Huvudprojekt */}
        <section id="projects" tabIndex={-1} className="bg-background px-4 py-12 sm:px-6 sm:py-20">
          <div className="max-w-5xl mx-auto">
            <h2 className="mb-6 text-2xl font-semibold text-heading sm:mb-10 sm:text-3xl">
              Utvalda projekt
            </h2>

            <div className="mb-8 grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
              {mainProjects.map((project) => (
                <ProjectCard key={project.title} {...project} />
              ))}
            </div>
            <a
              href="https://github.com/Alisebrink"
              className="inline-flex min-h-9 items-center rounded-full border border-control px-3 font-semibold hover:bg-surface"
            >
              Se projektkoden på GitHub
            </a>
          </div>
        </section>

        {/* Andra projekt */}
        <section
          id="other-projects"
          className="bg-background px-4 py-12 sm:px-6 sm:py-20"
        >
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-semibold mb-8 text-heading">
              Övriga projekt
            </h2>

            <ul className="grid grid-cols-1 gap-x-10 gap-y-6 text-sm sm:grid-cols-2 sm:text-base">
              {otherProjects.map((project) => (
                <li key={project.title} className="space-y-1">
                  <a
                    href={project.url}
                    className="inline-flex min-h-6 items-center font-semibold tracking-tight text-accent hover:text-heading"
                  >
                    {project.title}
                  </a>
                  <p className="text-muted">{project.description}</p>

                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded bg-surface px-2 py-0.5 text-[11px] text-muted sm:text-xs"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Kontakt */}
        <section
          id="contact"
          tabIndex={-1}
          className="min-h-[30svh] bg-surface px-4 py-12 sm:px-6 sm:py-20"
        >
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl sm:text-3xl font-semibold mb-4 text-heading">
              Kontakt
            </h2>
            <div className="space-y-2 wrap-anywhere text-sm text-muted sm:text-base">
              <p>Linnea Isebrink</p>
              <p>linnea@isebrink.se</p>
              <p>+46 72 707 83 35</p>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
