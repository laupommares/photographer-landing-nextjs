import About from "@/components/home/About"
import CTASection from "@/components/home/ContactCTA"
import Hero from "@/components/home/Hero"
import PortfolioGrid from "@/components/home/PortfolioGrid"
import ProcessSection from "@/components/home/ProcessSection"
import Header from "@/components/layout/ Header"
import Footer from "@/components/layout/Footer"

export default function HomePage() {
  return (
    <>
      <Header/>
      <Hero />
      <About />
      <PortfolioGrid />
      <ProcessSection />
      <CTASection/>
      <Footer/>
    </>
  )
}