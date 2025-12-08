'use client'

import React from 'react'

type Project = {
  id: number
  title: string
  description: string
  tags: string[]
  link: string
}

const PROJECTS: Project[] = [
  {
    id: 1,
    title: 'The Film Score',
    description:
      "America's most awarded film streaming platform for discovering timeless classics.",
    tags: ['React', 'Vercel', 'Streaming'],
    link: 'https://filmscore-react-project.vercel.app',
  },
  {
    id: 2,
    title: 'Ultraverse NFT Marketplace',
    description:
      'NFT marketplace for creating, selling, and collecting digital items on the blockchain.',
    tags: ['React', 'Blockchain', 'Web3', 'Vercel'],
    link: 'https://derrick-nft-marketplace.vercel.app',
  },
  {
    id: 3,
    title: 'SkinStric AI Skincare',
    description: 'AI-powered personalized skincare routine tailored to what your skin needs.',
    tags: ['React', 'AI', 'Machine Learning', 'Vercel'],
    link: 'https://similienskinstric-ai.vercel.app',
  },
  {
    id: 4,
    title: 'Summarist',
    description: 'Book summary platform that helps busy people gain more knowledge in less time.',
    tags: ['React', 'Next.js', 'Firebase', 'Vercel'],
    link: 'https://thesummaristsimilien.vercel.app',
  },
  {
    id: 5,
    title: 'Tropical Bites Resort',
    description:
      'Tropical fruit-themed resort website with responsive design and booking features.',
    tags: ['HTML', 'CSS', 'Bootstrap', 'JavaScript'],
    link: 'https://tropicalbitesresort.netlify.app',
  },
  {
    id: 6,
    title: 'Tommy Wilkens Portfolio',
    description:
      'Luxury minimalist interior design portfolio with project showcase and contact features.',
    tags: ['HTML', 'CSS', 'Bootstrap', 'Responsive'],
    link: 'https://tommywilkens.netlify.app',
  },
]

const Header: React.FC<{ theme: 'light' | 'dark'; toggleTheme: () => void }> = ({
  theme,
  toggleTheme,
}) => (
  <header
    className={`sticky top-0 z-50 ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'} shadow-sm`}
  >
    <nav className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
      <div className={`text-2xl font-bold ${theme === 'dark' ? 'text-blue-300' : 'text-blue-600'}`}>
        Portfolio
      </div>
      <div className="flex items-center gap-6">
        <ul className={`flex gap-8 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
          <li>
            <a href="#home" className="hover:text-blue-500 transition-colors">
              Home
            </a>
          </li>
          <li>
            <a href="#projects" className="hover:text-blue-500 transition-colors">
              Projects
            </a>
          </li>
          <li>
            <a href="#about" className="hover:text-blue-500 transition-colors">
              About
            </a>
          </li>
          <li>
            <a href="#contact" className="hover:text-blue-500 transition-colors">
              Contact
            </a>
          </li>
        </ul>

        <button
          onClick={toggleTheme}
          aria-label="Toggle dark mode"
          className={`p-2 rounded-md focus:outline-none focus:ring-2 ${
            theme === 'dark'
              ? 'bg-gray-700 text-yellow-300 focus:ring-yellow-300'
              : 'bg-gray-100 text-gray-800 focus:ring-blue-200'
          }`}
        >
          {theme === 'dark' ? '🌙' : '☀️'}
        </button>
      </div>
    </nav>
  </header>
)

const Hero: React.FC<{ theme: 'light' | 'dark' }> = ({ theme }) => (
  <section
    id="home"
    className={`py-20 px-6 animate-fadeIn ${
      theme === 'dark'
        ? 'bg-gradient-to-r from-gray-800 to-gray-700 text-white'
        : 'bg-gradient-to-r from-blue-600 to-purple-600 text-white'
    }`}
  >
    <div className="max-w-6xl mx-auto text-center">
      <h1 className="text-5xl md:text-6xl font-bold mb-6">Hi, I'm Derrick Similien</h1>
      <p className="text-xl md:text-2xl mb-8 text-blue-100">
        Computer Science Student | ML Enthusiast | Web Developer
      </p>
      <a
        href="mailto:similienderrick@gmail.com"
        className={`inline-block px-8 py-3 rounded-md font-semibold transition-colors ${
          theme === 'dark'
            ? 'bg-yellow-500 text-gray-900 hover:bg-yellow-400'
            : 'bg-white text-blue-600 hover:text-blue-600'
        }`}
        aria-label="Send email to Derrick Similien"
      >
        Get in Touch
      </a>
    </div>
  </section>
)

const ProjectCard: React.FC<{ project: Project }> = ({ project }) => (
  <div className="border rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 transform hover:-translate-y-1 bg-white">
    <div className="bg-gradient-to-r from-blue-500 to-purple-500 h-32"></div>
    <div className="p-6">
      <h3 className="text-xl font-semibold text-gray-900 mb-2">{project.title}</h3>
      <p className="text-gray-600 mb-4 text-sm">{project.description}</p>
      <div className="flex flex-wrap gap-2 mb-4">
        {project.tags.map(tag => (
          <span
            key={tag}
            className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-medium"
          >
            {tag}
          </span>
        ))}
      </div>
      <a
        href={project.link}
        className="text-blue-600 font-semibold hover:text-blue-700 transition-colors duration-300"
        aria-label={`View ${project.title} project`}
      >
        View Project →
      </a>
    </div>
  </div>
)

const ProjectsGrid: React.FC<{ theme: 'light' | 'dark' }> = ({ theme }) => (
  <section
    id="projects"
    className={`py-20 px-6 ${theme === 'dark' ? 'bg-gray-900' : 'bg-gray-50'}`}
  >
    <div className="max-w-6xl mx-auto">
      <h2
        className={`text-4xl font-bold mb-12 text-center ${
          theme === 'dark' ? 'text-gray-100' : 'text-gray-900'
        }`}
      >
        Featured Projects
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {PROJECTS.map(project => (
          <div key={project.id}>
            {/* Pass theme to cards if we want to style them differently in dark mode */}
            <ProjectCard project={project} />
          </div>
        ))}
      </div>
    </div>
  </section>
)

const About: React.FC<{ theme: 'light' | 'dark' }> = ({ theme }) => (
  <section id="about" className={`py-20 px-6 ${theme === 'dark' ? 'bg-gray-900' : 'bg-white'}`}>
    <div className="max-w-6xl mx-auto">
      <h2
        className={`text-4xl font-bold mb-8 text-center ${
          theme === 'dark' ? 'text-gray-100' : 'text-gray-900'
        }`}
      >
        About Me
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
        <div className="flex justify-center md:justify-end">
          <div
            className={`w-40 h-40 rounded-full flex items-center justify-center overflow-hidden ${
              theme === 'dark' ? 'bg-gray-700' : 'bg-gray-200'
            }`}
            aria-hidden="true"
          >
            {/* Photo placeholder */}
            <span className={`${theme === 'dark' ? 'text-gray-200' : 'text-gray-500'}`}>Photo</span>
          </div>
        </div>

        <div className="md:col-span-2">
          <p className={`text-lg mb-4 ${theme === 'dark' ? 'text-gray-200' : 'text-gray-700'}`}>
            I'm a Computer Science student at the University of West Georgia (UWG) with a strong
            interest in Machine Learning and Web Development. I enjoy building web applications that
            combine performant frontends with thoughtful data-driven backends.
          </p>

          <h3
            className={`text-md font-semibold mb-3 ${
              theme === 'dark' ? 'text-gray-100' : 'text-gray-900'
            }`}
          >
            Skills
          </h3>
          <div className="flex flex-wrap gap-2">
            <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-medium">
              React
            </span>
            <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-medium">
              TypeScript
            </span>
            <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-medium">
              Python
            </span>
            <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-medium">
              Machine Learning
            </span>
            <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-medium">
              Tailwind CSS
            </span>
          </div>
        </div>
      </div>
    </div>
  </section>
)

const Contact: React.FC<{ theme: 'light' | 'dark' }> = ({ theme }) => {
  const [name, setName] = React.useState('')
  const [email, setEmail] = React.useState('')
  const [message, setMessage] = React.useState('')
  const [submitted, setSubmitted] = React.useState(false)

  const isValidName = name.trim().length > 0
  const isValidEmail = /^\S+@\S+\.\S+$/.test(email)
  const isValidMessage = message.trim().length >= 10
  const isFormValid = isValidName && isValidEmail && isValidMessage

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!isFormValid) return
    // Simulate successful submission
    setSubmitted(true)
    setName('')
    setEmail('')
    setMessage('')
    // Hide success message after 5s
    setTimeout(() => setSubmitted(false), 5000)
  }

  const formBg = theme === 'dark' ? 'bg-gray-800' : 'bg-white'
  const inputClass = `w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-200 ${
    theme === 'dark' ? 'bg-gray-700 text-white border-gray-600' : 'bg-white text-gray-900'
  }`

  return (
    <section
      id="contact"
      className={`py-16 px-6 ${theme === 'dark' ? 'bg-gray-900' : 'bg-gray-50'}`}
    >
      <div className="max-w-3xl mx-auto">
        <h2
          className={`text-3xl font-bold mb-6 text-center ${
            theme === 'dark' ? 'text-gray-100' : 'text-gray-900'
          }`}
        >
          Contact Me
        </h2>

        <form onSubmit={handleSubmit} className={`${formBg} p-6 rounded-lg shadow-sm`}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div>
              <label
                htmlFor="name"
                className={`block text-sm font-medium mb-1 ${
                  theme === 'dark' ? 'text-gray-200' : 'text-gray-700'
                }`}
              >
                Name
              </label>
              <input
                id="name"
                type="text"
                value={name}
                onChange={e => setName(e.target.value)}
                className={inputClass}
                aria-label="Your name"
                required
              />
              {!isValidName && name.length > 0 && (
                <p className="text-xs text-red-500 mt-1">Please enter your name.</p>
              )}
            </div>

            <div>
              <label
                htmlFor="email"
                className={`block text-sm font-medium mb-1 ${
                  theme === 'dark' ? 'text-gray-200' : 'text-gray-700'
                }`}
              >
                Email
              </label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                className={inputClass}
                aria-label="Your email"
                required
              />
              {!isValidEmail && email.length > 0 && (
                <p className="text-xs text-red-500 mt-1">Please enter a valid email.</p>
              )}
            </div>
          </div>

          <div className="mb-4">
            <label
              htmlFor="message"
              className={`block text-sm font-medium mb-1 ${
                theme === 'dark' ? 'text-gray-200' : 'text-gray-700'
              }`}
            >
              Message
            </label>
            <textarea
              id="message"
              rows={5}
              value={message}
              onChange={e => setMessage(e.target.value)}
              className={inputClass}
              aria-label="Your message"
              required
            />
            {!isValidMessage && message.length > 0 && (
              <p className="text-xs text-red-500 mt-1">Message must be at least 10 characters.</p>
            )}
          </div>

          <div className="flex items-center justify-between">
            <button
              type="submit"
              disabled={!isFormValid}
              className={`px-6 py-2 rounded-md font-semibold text-white transition-colors ${
                isFormValid ? 'bg-blue-600 hover:bg-blue-700' : 'bg-gray-300 cursor-not-allowed'
              }`}
              aria-disabled={!isFormValid}
            >
              Send Message
            </button>
            {submitted && <p className="text-sm text-green-600">Message sent successfully!</p>}
          </div>
        </form>
      </div>
    </section>
  )
}

const Footer: React.FC<{ theme: 'light' | 'dark' }> = ({ theme }) => (
  <footer
    className={`${
      theme === 'dark' ? 'bg-gray-900 text-gray-300' : 'bg-gray-100 text-gray-700'
    } py-12 px-6`}
  >
    <div className="max-w-6xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
        <div>
          <h3 className={`${theme === 'dark' ? 'text-white' : 'text-gray-900'} font-bold mb-4`}>
            Portfolio
          </h3>
          <p className="text-sm">Building amazing web experiences one component at a time.</p>
        </div>
        <div>
          <h4 className={`${theme === 'dark' ? 'text-white' : 'text-gray-900'} font-semibold mb-4`}>
            Quick Links
          </h4>
          <ul className="space-y-2 text-sm">
            <li>
              <a
                href="#home"
                className={`hover:${
                  theme === 'dark' ? 'text-white' : 'text-gray-900'
                } transition-colors`}
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#projects"
                className={`hover:${
                  theme === 'dark' ? 'text-white' : 'text-gray-900'
                } transition-colors`}
              >
                Projects
              </a>
            </li>
            <li>
              <a
                href="#about"
                className={`hover:${
                  theme === 'dark' ? 'text-white' : 'text-gray-900'
                } transition-colors`}
              >
                About
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h4 className={`${theme === 'dark' ? 'text-white' : 'text-gray-900'} font-semibold mb-4`}>
            Follow Me
          </h4>
          <ul className="space-y-2 text-sm">
            <li>
              <a
                href="https://github.com/DerrickSimilien"
                className={`hover:${
                  theme === 'dark' ? 'text-white' : 'text-gray-900'
                } transition-colors`}
                aria-label="Visit my GitHub profile"
              >
                GitHub
              </a>
            </li>
            <li>
              <a
                href="www.linkedin.com/in/derrick-similien-2566542b5"
                className={`hover:${
                  theme === 'dark' ? 'text-white' : 'text-gray-900'
                } transition-colors`}
                aria-label="Visit my LinkedIn profile"
              >
                LinkedIn
              </a>
            </li>
            <li>
              <a
                href="#"
                className={`hover:${
                  theme === 'dark' ? 'text-white' : 'text-gray-900'
                } transition-colors`}
                aria-label="Follow me on Twitter"
              >
                Twitter
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div
        className={`border-t ${
          theme === 'dark' ? 'border-gray-700' : 'border-gray-200'
        } pt-8 text-center text-sm`}
      >
        <p>&copy; 2025 My Portfolio. All rights reserved.</p>
      </div>
    </div>
  </footer>
)

export default function Module5Portfolio() {
  const [theme, setTheme] = React.useState<'light' | 'dark'>('light')
  const toggleTheme = () => setTheme(t => (t === 'light' ? 'dark' : 'light'))

  return (
    <div className={`min-h-screen scroll-smooth ${theme === 'dark' ? 'bg-gray-900' : 'bg-white'}`}>
      <Header theme={theme} toggleTheme={toggleTheme} />
      <Hero theme={theme} />
      <ProjectsGrid theme={theme} />
      <About theme={theme} />
      <Contact theme={theme} />
      <Footer theme={theme} />
    </div>
  )
}
