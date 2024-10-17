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
        className='gap-16 bg-blue-950 py-2 pt-60 md:h-full md:pb-0'
    >

            <p className='mt-8 text-white text-2xl text-center'>
                    Welcome to Southern California's top private security firm, where your safety is our utmost priority. Watch the video below to learn more about what we do.
            </p>

        { /* EMBEDDED VIDEO */}
            <div className='relative flex justify-center mt-40'>
            { /* <div className='flex basis-3/5 justify-center md:z-10 md:ml-40 md:mt-16 md:justify-items-end pt-4'> */}
                <iframe 
                className='w-full h-screen max-h-[700px]'
                    width="600" 
                    height="400" 
                    src="https://www.youtube.com/embed/Rrya__NYcmY?autoplay=1&mute=1&controls=0&modestbranding=1&rel=0&loop=1&playlist=Rrya__NYcmY"
                    title="YouTube video player" 
                    frameBorder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowFullScreen>
                </iframe>
            </div>

        { /* SPONSORS */}
        {isAboveMediumScreens && (
            <div className='h-[120px] w-full bg-blue-100 pt-2 py-2'>
                <div className='mx-auto w-5/6'>
                    <div className='flex w-full items-center justify-between gap-8'>
                        <img alt='redbull-sponsor' src={RefHilton} className='w-30 h-20'  />
                        <img alt='forbes-sponsor' src={RefWarnerBros} className='w-30 h-20' />
                        <img alt='fortune-sponsor' src={RefNordstrom} className='w-30 h-20' />
                        <img alt='fortune-sponsor' src={RefChevron} className='w-30 h-20' />
                        <img alt='fortune-sponsor' src={RefAudi} className='w-30 h-20' />
                    </div>
                </div>
            </div>
        )}
        
    </section>
}

export default Home