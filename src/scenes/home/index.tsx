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
        className='gap-16 bg-blue-950 py-10 pt-8 md:h-full md:pb-0'
    >
            { /* IMAGE AND MAIN HEADER */ }
            <motion.div 
                className='md:flex mx-auto w-5/6 items-center justify-center md:h-5/6'
                onViewportEnter={ () => setSelectedPage(SelectedPage.Home)}
            >
                { /* MAIN HEADER */ }
                <div className='z-10 mt-32 md:basis-3/5'>
                    { /* HEADINGS */}
                    <motion.div 
                        className='md:-mt-20'
                        initial = 'hidden'
                        whileInView='visible'
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ duration: 0.5 }}
                        variants={{
                            hidden: { opacity: 0, x: -100 },
                            visible: { opacity: 1, x: 0 }
                        }}
                    >
                    <div className='relative'>
                        <div className='before:absolute before:-top-20 before:-left-20 before:z-[-1]'>
                            <p className='text-center font-bold text-white text-6xl italic'>SOUTH COAST SAFETY AGENCY</p>
                            <p className='italic text-blue-300 bold text-xl text-center mt-4'>SECURE - DEFEND - PROTECT (CA PPO 30394)</p>
                            <p className='italic text-blue-300 bold text-sm text-center mt-4'>CA PPO 30394</p>

                        </div>
                    </div>

                    <p className='mt-8 text-white text-lg'>
                        Welcome to Southern California's top private security firm. Your safety is our priority.
                    </p>
                </motion.div>

                { /* ACTIONS */ }
                <motion.div 
                    className='mt-8 flex items-center gap-8'
                    initial = 'hidden'
                    whileInView='visible'
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                    variants={{
                        hidden: { opacity: 0, x: -100 },
                        visible: { opacity: 1, x: 0 }
                    }}
                >
                    <ActionButton setSelectedPage={setSelectedPage}>
                        Claim Your Quote
                    </ActionButton>
                </motion.div>
            </div>

           

            { /*
            <div className='mt-8 pl-8'>
                <h2 className='text-xl font-bold text-center text-white'>Real-Time Incident Levels</h2>
                <h2 className='text-sm font-bold text-center text-white'>Data for California from FEMA</h2>
                <div className='flex justify-center'> 
                    <div className='max-w-xs'> 
                        <RealTimeBarChart />
                    </div>
                </div>
            </div>
            */}
        </motion.div>


        { /* EMBEDDED VIDEO */}
            <div className='relative flex justify-center mt-2'>
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
            <div className='h-[150px] w-full bg-blue-100 py-10'>
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