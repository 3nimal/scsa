import LogoBar from "@/scenes/logobar"
import Navbar from "@/scenes/navbar"
import Home from "@/scenes/home"
import OurServices from "@/scenes/ourServices"
import Leadership from "@/scenes/leadership"
import ContactUs from "@/scenes/contactUs"
import Footer from "@/scenes/footer"
import { useEffect, useState } from "react"
import { SelectedPage } from "@/shared/types"
import YouTubeEmbed from "./scenes/youtubeembed"
import Sponsors from "./scenes/sponsors"


import RefHilton from '@/assets/RefHilton.png'
import RefWarnerBros from '@/assets/RefWarnerBros.png'
import RefNordstrom from '@/assets/RefNordstrom.png'
import RefChevron from '@/assets/RefChevron.svg'
import RefAudi from '@/assets/RefAudi.png'
import BenefitsSection from "./scenes/benefits"

function App() {
  const [selectedPage, setSelectedPage] = useState<SelectedPage>(
    SelectedPage.Home
  );
  const [isTopOfPage, setIsTopOfPage] = useState<boolean>(true)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setIsTopOfPage(true);
        setSelectedPage(SelectedPage.Home)
      }
      if (window.scrollY !== 0) setIsTopOfPage(false)
    };
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, []);




  const sponsors = [
    { alt: 'hilton-sponsor', src: RefHilton },
    { alt: 'warnerbros-sponsor', src: RefWarnerBros },
    { alt: 'nordstrom-sponsor', src: RefNordstrom },
    { alt: 'chevron-sponsor', src: RefChevron },
    { alt: 'audi-sponsor', src: RefAudi },
  ]

  const isAboveMediumScreens = true; // Example boolean value, replace with your logic


  return (
    <div className="app bg-white flex flex-col">
      
      <Navbar
        isTopOfPage={isTopOfPage}
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
        displayLogoBar={true}
      />
      <Home setSelectedPage={setSelectedPage} />
      <YouTubeEmbed 
          videoUrl={'https://www.youtube.com/embed/Rrya__NYcmY?autoplay=1&mute=1&controls=0&modestbranding=1&rel=0&loop=1&playlist=Rrya__NYcmY'} 
          width="800" 
          height="450" 
      />
      <Sponsors sponsors={sponsors} />



      <Leadership setSelectedPage={setSelectedPage} />
      <BenefitsSection setSelectedPage={setSelectedPage} />
      <OurServices setSelectedPage={setSelectedPage} />
      <ContactUs setSelectedPage={setSelectedPage} />
      <Footer />
    </div>
  )
}


export default App
