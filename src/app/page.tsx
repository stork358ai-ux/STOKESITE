import Header from '@/components/Header'
import Hero from '@/components/Hero'
import CardGrid from '@/components/CardGrid'
import Industries from '@/components/Industries'
import ValueHeader from '@/components/ValueHeader'
import Process from '@/components/Process'
import Awards from '@/components/Awards'
import TechStack from '@/components/TechStack'
import Insights from '@/components/Insights'
import News from '@/components/News'
import FAQ from '@/components/FAQ'
import MixedMedia from '@/components/MixedMedia'
import CompanySection from '@/components/CompanySection'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <CardGrid />
        <Industries />
        <ValueHeader />
        <Process />
        <Awards />
        <TechStack />
        <Insights />
        <News />
        <FAQ />
        <MixedMedia />
        <CompanySection />
      </main>
      <Footer />
    </>
  )
}
