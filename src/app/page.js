import Header from '@/components/Header'
import Footer from '@/components/Footer'
import About from '@/components/About'
import Projects from '@/components/Projects'
import Contact from '@/components/Contact'

export default function Home() {
  return (
      <div>
        <Header />
        <main className="max-w-3xl mx-auto px-4">
          <About />
          <Projects />
          <Contact />
        </main>
        <Footer />
      </div>
  )
}
