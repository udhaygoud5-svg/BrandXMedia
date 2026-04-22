import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Services from '@/components/Services'
import ContactForm from '@/components/ContactForm'
import ScrollSections from '@/components/ScrollSections'
import Pricing from '@/components/Pricing'

export default function Home() {
  return (
    <>
      <main className="relative">
        {/* Background Effect */}
        <div className="fixed inset-0 perspective-grid perspective-mask opacity-20 pointer-events-none" />
        
        <Navbar />
        <Hero />
        
        {/* Scroll sections without heavy animations */}
        <ScrollSections />
        
        <Pricing />
        <ContactForm />

        {/* Footer */}
        <footer className="w-full py-16 bg-[#1b1b1b] font-['Inter'] text-sm uppercase tracking-widest">
          <div className="flex flex-col md:flex-row justify-between items-center px-8 max-w-[1440px] mx-auto">
            <div className="mb-8 md:mb-0">
              <span className="text-lg font-black text-[#e2e2e2]">BrandXMedia</span>
              <p className="mt-2 normal-case tracking-normal text-[#c4c5d9] opacity-80">Curating digital excellence.</p>
            </div>
            <div className="flex flex-wrap justify-center gap-8 mb-8 md:mb-0">
              <a className="text-[#c4c5d9] hover:text-[#2e5bff] transition-all duration-300" href="#">Privacy Policy</a>
              <a className="text-[#c4c5d9] hover:text-[#2e5bff] transition-all duration-300" href="#">Terms of Service</a>
              <a className="text-[#c4c5d9] hover:text-[#2e5bff] transition-all duration-300" href="#">LinkedIn</a>
              <a className="text-[#c4c5d9] hover:text-[#2e5bff] transition-all duration-300" href="#">Instagram</a>
            </div>
            <p className="text-[#c4c5d9] normal-case tracking-normal opacity-60">© 2026 BrandXMedia.</p>
          </div>
        </footer>
      </main>
    </>
  )
}
