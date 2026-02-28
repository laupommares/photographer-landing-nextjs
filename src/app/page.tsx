import About from "@/components/home/About"
import Hero from "@/components/home/Hero"
import PortfolioGrid from "@/components/home/PortfolioGrid"
import ProcessSection from "@/components/home/ProcessSection"
import Header from "@/components/layout/ Header"

export default function HomePage() {
  return (
    <>
      <Header/>
      <Hero />
      <About />
      <PortfolioGrid />
      <ProcessSection />
    </>
  )
}