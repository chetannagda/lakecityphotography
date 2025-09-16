import HeroParallaxDemo from '@/components/hero-parallax-demo'
import AboutSection from '@/components/about-section'
import NavbarDemo from '@/components/resizable-navbar-demo'

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroParallaxDemo />
      <NavbarDemo />
      <AboutSection />
    </main>
  )
}