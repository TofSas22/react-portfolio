import Header from './components/Header'
import BentoBox from './components/BentoBox'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'
import SEO from './components/SEO'
import LazySection from './components/LazySection'
import ErrorBoundary from './components/ErrorBoundary'
import SkipLink from './components/SkipLink'

function App() {
  return (
    <ErrorBoundary>
      <SEO />
      <SkipLink href="#main-content">Skip to main content</SkipLink>
      <SkipLink href="#navigation">Skip to navigation</SkipLink>
      <Header />
      <main id="main-content" className="px-24" role="main" tabIndex="-1">
        <ErrorBoundary
          fallback={({ error }) => (
            <div className="h-64 flex items-center justify-center bg-gray-800 rounded-lg">
              <p className="text-white">Failed to load hero section</p>
            </div>
          )}
        >
          <section id="home" aria-label="Hero section" tabIndex="-1">
            <BentoBox />
          </section>
        </ErrorBoundary>
        <br />
        <ErrorBoundary>
          <LazySection
            fallback={
              <div className="h-48 animate-pulse bg-gray-800 rounded-lg"></div>
            }
          >
            <section id="about" aria-label="About section" tabIndex="-1">
              <About />
            </section>
          </LazySection>
        </ErrorBoundary>
        <br />
        <ErrorBoundary>
          <LazySection
            fallback={
              <div className="h-64 animate-pulse bg-gray-800 rounded-lg"></div>
            }
          >
            <section id="projects" aria-label="Projects section" tabIndex="-1">
              <Projects />
            </section>
          </LazySection>
        </ErrorBoundary>
        <br />
        <ErrorBoundary>
          <LazySection
            fallback={
              <div className="h-48 animate-pulse bg-gray-800 rounded-lg"></div>
            }
          >
            <section id="contact" aria-label="Contact section" tabIndex="-1">
              <Contact />
            </section>
          </LazySection>
        </ErrorBoundary>
      </main>
      <Footer />
    </ErrorBoundary>
  )
}

export default App
