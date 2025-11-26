import ScrollProgress from "../components/scrollProgress";
import "./page.css";
import Image from "next/image";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaStackOverflow } from "react-icons/fa";
import { ProjectCard } from "../components/ProjectCard";
import otherProjects from "./data/otherProjects.json";
import mainProjects from "./data/mainProjects.json";

export default function Home() {
  return (
    <>
      <main className="min-h-screen bg-zinc-950 text-zinc-100 scroll-smooth">
        {/* Navbar */}
        <header className="fixed top-0 left-0 w-full bg-zinc-950/80 backdrop-blur z-50 border-b border-zinc-800">
          <nav className="max-w-5xl mx-auto flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between px-4 py-3">
            <span className="font-semibold tracking-tight text-lg sm:text-lg justify-center text-center">
              Linnea Isebrink
            </span>
            <div className="flex flex-wrap items-center justify-center gap-10 text-xs sm:text-sm">
              <a href="#hero" className="hover:text-violet-300">
                Start
              </a>
              <a href="#about" className="hover:text-violet-300">
                Om mig
              </a>
              <a href="#projects" className="hover:text-violet-300">
                Projekt
              </a>
              <a href="#contact" className="hover:text-violet-300">
                Kontakt
              </a>
            </div>
          </nav>
        </header>

        <ScrollProgress />

        {/* Hero */}
        <section
          id="hero"
          className="min-h-screen flex items-center justify-center px-4 pt-24 sm:pt-28"
        >
          <div className="max-w-3xl text-center">
            <p className="text-xs sm:text-sm uppercase tracking-[0.2em] text-rose-300 mb-4">
              UX-/UI-designer . Frontend-utvecklare . Mjukvarutestare
            </p>
            <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              Hej. Jag heter Linnea,
              <span className="block text-orange-300">
                jag designar och bygger digitala upplevelser.
              </span>
            </h1>
            <p className="text-sm sm:text-base text-zinc-300 mb-8">
              UX-/UI-designer, frontend-utvecklare och mjukvarutestare med fokus
              på att skapa tydliga flöden tillgängliga för alla. Min passion är
              att göra komplexa saker enkla och roliga att använda.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
              <a
                href="#projects"
                className="px-6 py-3 rounded-full bg-orange-300 text-zinc-950 text-sm sm:text-base font-medium hover:bg-orange-400 transition text-center"
              >
                Se mina projekt
              </a>
              <a
                href="#contact"
                className="px-6 py-3 rounded-full border border-zinc-600 hover:border-orange-300 hover:text-orange-300 transition text-sm sm:text-base text-center"
              >
                Kontakta mig
              </a>
            </div>
          </div>
        </section>

        {/* Om mig */}
        <section
          id="about"
          className="min-h-screen flex items-center px-4 py-16 sm:py-24"
        >
          <div className="max-w-5xl mx-auto grid gap-10 lg:gap-16 md:grid-cols-2 items-start">
            <div>
              <Image
                src="/images/profile.jpg"
                alt="Linnea"
                width={300}
                height={300}
                className="object-cover rounded-full mb-10"
              />

              <h2 className="text-2xl sm:text-3xl font-semibold mb-4 text-rose-300">
                Om mig
              </h2>

              <p className="text-sm sm:text-base text-zinc-300 mb-3">
                Jag är en UX-/UI-designer, frontendutvecklare och
                mjukvarutestare med stark teknisk förståelse och stort intresse
                för användarcentrerad design. Jag brinner för att skapa digitala
                upplevelser som är intuitiva, tillgängliga och visuellt
                genomtänkta.
              </p>
              <p className="text-sm sm:text-base text-zinc-300 mb-3">
                Som frontendutvecklare arbetar jag med HTML, CSS, JavaScript och
                TypeScript och har erfarenhet av ramverk som React, Angular,
                Next.js och Tailwind, vilket gör att jag förstår samspelet
                mellan design, kod och användarupplevelse på djupet. Jag har
                också goda kunskaper i Microsoft 365, SharePoint och Power
                Platform och är van att designa lösningar som fungerar väl i
                moderna digitala arbetsmiljöer.
              </p>
              <p className="text-sm sm:text-base text-zinc-300 mb-10">
                Genom min erfarenhet av UX-metodik, kravanalys och
                kvalitetssäkring kan jag arbeta genom hela kedjan från behov
                till färdig lösning. Jag trivs i tvärfunktionella team där
                design, teknik och användarnytta möts och arbetar gärna
                iterativt för att skapa lösningar som verkligen hjälper
                användaren.
              </p>
              <p className="text-sm sm:text-base text-zinc-300">
                Du hittar min gamla portfolio med mina designprojekt{" "}
                <a
                  href="https://linneaiseb.wixsite.com/minportfolio"
                  className="hover:text-violet-300 underline"
                >
                  här
                </a>
                .
              </p>
            </div>

            <div className="rounded-2xl p-4 sm:p-6 bg-zinc-900">
              <h3 className="text-lg sm:text-xl font-semibold mb-2 text-rose-300">
                Kompetenser
              </h3>

              <h4 className="text-sm sm:text-base font-semibold text-zinc-100 mt-4 mb-2">
                UX, UI & Digital Design
              </h4>
              <ul className="space-y-1 text-xs sm:text-sm text-zinc-300 list-disc list-inside">
                <li>Wireframes & prototyper</li>
                <li>Användarflöden & interaktionsdesign</li>
                <li>WCAG & tillgänglighet</li>
                <li>Visuell design & typografi</li>
                <li>Designsystem & komponentbibliotek</li>
                <li>Figma, XD, Adobe Photoshop, Illustrator, InDesign</li>
              </ul>

              <h4 className="text-sm sm:text-base font-semibold text-zinc-100 mt-4 mb-2">
                Webbutveckling
              </h4>
              <ul className="space-y-1 text-xs sm:text-sm text-zinc-300 list-disc list-inside">
                <li>React & Next.js</li>
                <li>JavaScript & TypeScript</li>
                <li>HTML, CSS & Tailwind</li>
                <li>SQL, JSON, PHP</li>
                <li>MongoDB</li>
                <li>Responsiva gränssnitt</li>
                <li>UI-komponenter & statehantering</li>
                <li>WordPress & Hybris</li>
              </ul>

              <h4 className="text-sm sm:text-base font-semibold text-zinc-100 mt-4 mb-2">
                Testning & Krav
              </h4>
              <ul className="space-y-1 text-xs sm:text-sm text-zinc-300 list-disc list-inside">
                <li>ISTQB Foundation certifiering</li>
                <li>Cypress & Tailwind</li>
                <li>Manuella tester</li>
                <li>UI-, funktions- & regressionstest</li>
                <li>Användartestning</li>
                <li>Kravanalys & acceptanskriterier</li>
                <li>Dokumentation & QA-stöd</li>
                <li>Webb- & beteendeanalys</li>
              </ul>

              <h4 className="text-sm sm:text-base font-semibold text-zinc-100 mt-4 mb-2">
                Kommunikation & Innehåll
              </h4>
              <ul className="space-y-1 text-xs sm:text-sm text-zinc-300 list-disc list-inside">
                <li>Texter för webb & nyhetsbrev</li>
                <li>Sociala medier & innehållsplanering</li>
                <li>Grafik, bilder & digitalt material</li>
                <li>Foto-, video- & ljudredigering</li>
                <li>Trycksaker & informationsmaterial</li>
                <li>Presentationer & workshops</li>
                <li>Intervjuer & reportage</li>
                <li>Administrativ samordning</li>
                <li>Office, SharePoint & digitala verktyg</li>
                <li>Svenska & engelska</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Socials */}
        <section
          id="socials"
          className="min-h-96 px-4 py-16 sm:py-24 bg-zinc-900 flex items-center p-10"
        >
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 sm:gap-10 lg:gap-48 text-center place-items-center">
              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/linnea-isebrink/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center gap-3 hover:-translate-y-1 transition"
                aria-label="LinkedIn"
              >
                <FaLinkedin
                  className="
          w-16 h-16 
          sm:w-20 sm:h-20 
          md:w-24 md:h-24 
          text-violet-200 
          hover:text-orange-300 
          transition
        "
                />
                <h3
                  className="
          text-base 
          sm:text-lg 
          md:text-xl 
          text-violet-100 
          font-medium
        "
                >
                  LinkedIn
                </h3>
              </a>

              {/* GitHub */}
              <a
                href="https://github.com/Alisebrink"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center gap-3 hover:-translate-y-1 transition"
                aria-label="GitHub"
              >
                <FaGithub
                  className="
          w-16 h-16 
          sm:w-20 sm:h-20 
          md:w-24 md:h-24 
          text-violet-200 
          hover:text-orange-300 
          transition
        "
                />
                <h3
                  className="
          text-base 
          sm:text-lg 
          md:text-xl 
          text-violet-100 
          font-medium
        "
                >
                  GitHub
                </h3>
              </a>

              {/* StackOverflow */}
              <a
                href="https://stackoverflow.com/users/16650754/linnea"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center gap-3 hover:-translate-y-1 transition"
                aria-label="StackOverflow"
              >
                <FaStackOverflow
                  className="
          w-16 h-16 
          sm:w-20 sm:h-20 
          md:w-24 md:h-24 
          text-violet-200 
          hover:text-orange-300 
          transition
        "
                />
                <h3
                  className="
          text-base 
          sm:text-lg 
          md:text-xl 
          text-violet-100 
          font-medium
        "
                >
                  StackOverflow
                </h3>
              </a>
            </div>
          </div>
        </section>

        {/* Huvudprojekt */}
        <section id="projects" className="px-4 py-20 bg-zinc-950">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-semibold mb-10 text-rose-300">
              Utvalda projekt
            </h2>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-10">
              {mainProjects.map((project) => (
                <ProjectCard key={project.title} {...project} />
              ))}
            </div>
            <p>
              Om du vill se koden till mina projekt kan du besöka min{" "}
              <a
                href="https://github.com/Alisebrink"
                className="hover:text-violet-300 underline"
              >
                Github
              </a>
              .
            </p>
          </div>
        </section>

        {/* Andra projekt */}
        <section
          id="other-projects"
          className="px-4 py-16 sm:py-20 bg-zinc-950"
        >
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-semibold mb-8 text-rose-300">
              Övriga projekt
            </h2>

            <ul className="space-y-6 text-sm sm:text-base">
              {otherProjects.map((project) => (
                <li key={project.title} className="space-y-1">
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold tracking-tight text-violet-100 hover:text-violet-300 transition"
                  >
                    {project.title}
                  </a>
                  <p className="text-zinc-300">{project.description}</p>

                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-0.5 text-[11px] sm:text-xs rounded  bg-rose-500/20 text-rose-200"
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
          className="min-h-[30vh] px-4 py-16 sm:py-20 bg-zinc-900"
        >
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl sm:text-3xl font-semibold mb-4 text-rose-300">
              Kontakt
            </h2>
            <div className="space-y-2 text-sm sm:text-base text-zinc-300">
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
