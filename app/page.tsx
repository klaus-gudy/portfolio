"use client"

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Download, Github, Linkedin, Mail, Menu, X } from 'lucide-react'

export default function Portfolio() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const scrollTo = (id: string) => {
    const element = document.getElementById(id)
    element?.scrollIntoView({ behavior: 'smooth' })
    setIsMenuOpen(false)
  }

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Navigation */}
      <nav className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex">
              <div className="flex-shrink-0 flex items-center">
                <span className="text-xl font-bold text-gray-800">Portfolio</span>
              </div>
            </div>
            <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
              <NavLink onClick={() => scrollTo('home')}>Home</NavLink>
              <NavLink onClick={() => scrollTo('about')}>About Me</NavLink>
              <NavLink onClick={() => scrollTo('projects')}>Projects</NavLink>
              <NavLink onClick={() => scrollTo('experience')}>Experience</NavLink>
              <NavLink onClick={() => scrollTo('contact')}>Contact</NavLink>
            </div>
            <div className="-mr-2 flex items-center sm:hidden">
              <button
                onClick={toggleMenu}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
              >
                <span className="sr-only">Open main menu</span>
                {isMenuOpen ? <X className="block h-6 w-6" /> : <Menu className="block h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        <motion.div
          className={`sm:hidden ${isMenuOpen ? 'block' : 'hidden'}`}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: isMenuOpen ? 1 : 0, y: isMenuOpen ? 0 : -20 }}
          transition={{ duration: 0.3 }}
        >
          <div className="pt-2 pb-3 space-y-1">
            <MobileNavLink onClick={() => scrollTo('home')}>Home</MobileNavLink>
            <MobileNavLink onClick={() => scrollTo('about')}>About Me</MobileNavLink>
            <MobileNavLink onClick={() => scrollTo('projects')}>Projects</MobileNavLink>
            <MobileNavLink onClick={() => scrollTo('experience')}>Experience</MobileNavLink>
            <MobileNavLink onClick={() => scrollTo('contact')}>Contact</MobileNavLink>
          </div>
        </motion.div>
      </nav>

      {/* Home Section */}
      <section id="home" className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
              <span className="block">Hi, I&apos;m Goodluck Madadi</span>
              <span className="block text-indigo-600">Full Stack Developer</span>
            </h1>
            <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
              Specializing in React, Django, and Cloud Technologies
            </p>
            <div className="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8">
              <div className="rounded-md shadow">
                <a
                  href="/path-to-your-resume.pdf"
                  download
                  className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10"
                >
                  Download Resume
                  <Download className="ml-2 -mr-1 h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Me Section */}
      <section id="about" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-8">About Me</h2>
          <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
            <SkillCard title="Languages" skills={['JavaScript', 'Dart', 'Python', 'Java']} />
            <SkillCard title="Frameworks" skills={['Flutter', 'Next.js', 'Node.js', 'Django']} />
            <SkillCard title="Tools" skills={['Git', 'Docker', 'Azure', 'CI/CD']} />
          </div>
          <div className="mt-10 text-center">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Certifications</h3>
            <ul className="list-disc list-inside text-gray-600">
              <li>IBM DevOps and Software Engineering</li>
              <li>Microsoft Certified: Azure Fundamentals</li>
            </ul>
          </div>
          <p className="mt-10 text-center text-gray-600">
            Passionate about creating efficient, scalable solutions and continuously learning new technologies.
          </p>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-8">Projects</h2>
          <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
            <ProjectCard
              title="E-commerce Platform"
              description="A full-stack e-commerce solution built with React, Node.js, and MongoDB."
              link="https://marketplace-dev.softwarehouse.global/"
            />
            <ProjectCard
              title="Container Scanning App"
              description="A Flutter mobile app for managing tasks and collaborating with team members."
              link="https://github.com/GlobalSoftwareHouse/Vehicle-CamPro-Backend"
            />
            <ProjectCard
              title="Property reallocation Platform"
              description="A web application for managing properties reallocation and logistics."
              link="https://pakiza-kphfbbkis-klaus-gudys-projects.vercel.app/"
            />
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-8">Experience</h2>
          <div className="flow-root">
            <ul className="-mb-8">
              <ExperienceItem
                company="Quadrat Global Software House" 
                role="Software Engineer"
                date="Aug 2024 - Present"
                description="Led development of multiple web applications, software involving container scanning, and implemented CI/CD pipelines."
              />
              <ExperienceItem
                company="Quadrat Global Software House"
                role="Intern Software Engineer"
                date="Oct 2023 - Aug 2024"
                description="Developed and maintained client websites, building e-commerce webapps, and collaborated with design team."
              />
              <ExperienceItem
                company="NPK technologies"
                role="Intern Software Developer"
                date="Aug 2023 - Nov 2023"
                description="learned Agile methodologies, and contributed to company projects."
              />
              <ExperienceItem
                company="DHIS2 Lab"
                role="Part-time Software Developer"
                date="Dec 2022 - Jul 2023"
                description="Assisted in building KPI dashboard for healthcare organization and contributed to open-source projects."
              />
              <ExperienceItem
                company="CRDB Bank Plc"
                role="Field practical Training"
                date="Aug 2022 - Nov 2022"
                description="Assisted in building Fintech mobile application to help customers and reduce long waiting time in Bank branches."
              />
              <ExperienceItem
                company="UDICTI Hub"
                role="Field practical Training"
                date="Jun 2021 - Nov 2021"
                description="Intergrated AI technology to health care project and Created machine learning models for predicting diseases."
              />
            </ul>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-8">Contact Me</h2>
          <div className="flex justify-center space-x-6">
            <SocialLink href="mailto:klausongudy@gmail.com" icon={<Mail className="h-6 w-6" />} />
            <SocialLink href="https://github.com/klaus-gudy" icon={<Github className="h-6 w-6" />} />
            <SocialLink href="https://www.linkedin.com/in/goodluck-madadi-19b99b25a/" icon={<Linkedin className="h-6 w-6" />} />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 md:flex md:items-center md:justify-between lg:px-8">
          <div className="mt-8 md:mt-0 md:order-1">
            <p className="text-center text-base text-gray-400">
              &copy; {new Date().getFullYear()} Goodluck Madadi. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

const NavLink = ({ children, onClick }: { children: React.ReactNode; onClick: () => void }) => (
  <a
    onClick={onClick}
    className="cursor-pointer inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700"
  >
    {children}
  </a>
)

const MobileNavLink = ({ children, onClick }: { children: React.ReactNode; onClick: () => void }) => (
  <a
    onClick={onClick}
    className="cursor-pointer block pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium text-gray-600 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-800"
  >
    {children}
  </a>
)

const SkillCard = ({ title, skills }: { title: string; skills: string[] }) => (
  <div className="bg-white shadow rounded-lg p-6">
    <h3 className="text-lg font-medium text-gray-900">{title}</h3>
    <ul className="mt-2 list-disc list-inside">
      {skills.map((skill, index) => (
        <li key={index} className="text-gray-600">
          {skill}
        </li>
      ))}
    </ul>
  </div>
)

const ProjectCard = ({ title, description, link }: { title: string; description: string; link: string }) => (
  <div className="bg-white shadow rounded-lg overflow-hidden">
    <div className="p-6">
      <h3 className="text-lg font-medium text-gray-900">{title}</h3>
      <p className="mt-2 text-gray-600">{description}</p>
      <div className="mt-4">
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-indigo-600 hover:text-indigo-500"
        >
          View on GitHub
          <span aria-hidden="true"> &rarr;</span>
        </a>
      </div>
    </div>
  </div>
)

const ExperienceItem = ({ company, role, date, description }: { company: string; role: string; date: string; description: string }) => (
  <li>
    <div className="relative pb-8">
      <span className="absolute top-4 left-4 -ml-px h-full w-0.5 bg-gray-200" aria-hidden="true"></span>
      <div className="relative flex space-x-3">
        <div>
          <span className="h-8 w-8 rounded-full bg-gray-400 flex items-center justify-center ring-8 ring-white">
            <svg className="h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </span>
        </div>
        <div className="min-w-0 flex-1 pt-1.5 flex justify-between space-x-4">
          <div>
            <p className="text-sm text-gray-500">
              {role} at <span className="font-medium text-gray-900">{company}</span>
            </p>
            <p className="mt-2 text-sm text-gray-600">{description}</p>
          </div>
          <div className="text-right text-sm whitespace-nowrap text-gray-500">
            <time dateTime={date}>{date}</time>
          </div>
        </div>
      </div>
    </div>
  </li>
)

const SocialLink = ({ href, icon }: { href: string; icon: React.ReactNode }) => (
  <a
    href={href}
    className="text-gray-400 hover:text-gray-500"
    target="_blank"
    rel="noopener noreferrer"
  >
    <span className="sr-only">Social Media</span>
    {icon}
  </a>
)