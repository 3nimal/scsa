import useMediaQuery from '@/hooks/useMediaQuery'
import ActionButton from '@/shared/ActionButton'
import { SelectedPage } from '@/shared/types'
import RefHilton from '@/assets/RefHilton.png'
import RefWarnerBros from '@/assets/RefWarnerBros.png'
import RefNordstrom from '@/assets/RefNordstrom.png'
import RefChevron from '@/assets/RefChevron.svg'
import RefAudi from '@/assets/RefAudi.png'
import { motion } from 'framer-motion'
import RealTimeBarChart from '../leadership/RealTimeBarChart'

type Props = {
    setSelectedPage: (value: SelectedPage) => void
}

const Home = ({ setSelectedPage }: Props) => {
    const isAboveMediumScreens = useMediaQuery('(min-width:1060px)')


    return <section
        id='home'
        className='gap-16 bg-blue-950 pt-60 md:h-full md:pb-0'
    >

        <div className="px-8 md:px-10">
            <p className='mt-8 text-white text-2xl text-center pb-8'>
                    Welcome to Southern California's top private security firm, where your safety is our utmost priority. Watch the video below to learn more about what we do.
            </p>
        </div>

        { /* EMBEDDED VIDEO 
            <div className='relative flex justify-center mt-8 mb-2'>
           
                <iframe 
                className='w-full h-auto max-h-[700px]'
                    style = {{
                        height: isAboveMediumScreens ? '60vh' : '100vh',
                        maxHeight: '700px'
                    }}

                    src="https://www.youtube.com/embed/Rrya__NYcmY?autoplay=1&mute=1&controls=0&modestbranding=1&rel=0&loop=1&playlist=Rrya__NYcmY"
                    title="YouTube video player" 
                    frameBorder="0" 
                    width="700px"
                    height="600px"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowFullScreen>
                </iframe>
            </div>
            */}
        
    </section>
}

export default Home