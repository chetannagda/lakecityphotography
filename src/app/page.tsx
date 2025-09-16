
import NavbarDemo from '@/components/resizable-navbar-demo'
import HeroParallaxDemo from '@/components/hero-parallax-demo'
import AboutSection from '@/components/about-section'
import PortfolioSection from '@/components/portfolio-section'

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroParallaxDemo />
      <NavbarDemo />
      <AboutSection />
      <PortfolioSection />
    </main>
  )
}
