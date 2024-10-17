import { EyeIcon, ScaleIcon, Cog6ToothIcon } from '@heroicons/react/24/solid'
import { LeadershipType, SelectedPage } from '@/shared/types'
import { motion } from 'framer-motion'
import HText from '@/shared/HText'
import LeadershipCard from './Leadership'
import ActionButton from '@/shared/ActionButton'
import BenefitsPageGraphic from '@/assets/BenefitsPageGraphic.jpg'

const leadershipData : Array<LeadershipType> = [
    {
        icon: <EyeIcon className='h-6 w-6' />,
        title: 'Verify Our License',
        description: 'Verify our license on the Bureau of Security and Investigative Services website.',
        link: 'https://www.bbc.com/news/world'
    },
    {
        icon: <ScaleIcon className='h-6 w-6' />,
        title: 'Decades of Experience',
        description: 'Our leadership has decades of experience honed in law enforcement.'
    },
    {
        icon: <Cog6ToothIcon className='h-6 w-6' />,
        title: 'State of the Art Technology',
        description: 'Offering state-of-the-art surveillance and monitoring systems can enhance.'
    }
]

const container = {
    hidden: {},
    visible: {
        transition: { staggeredChildren: 0.2 }
    },
}

type Props = {
    setSelectedPage: (value: SelectedPage) => void
}

const Leadership = ({setSelectedPage}: Props) => {
  return (
    <section
        id='leadership'
        className='mx-auto min-h-full w-5/6 py-20'
    >

        <motion.div
            onViewportEnter={() => setSelectedPage(SelectedPage.Leadership)}
        >
            { /* HEADER */}
            <motion.div 
                className='md:my-5 md:w-3/5'
                initial = 'hidden'
                whileInView='visible'
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5 }}
                variants={{
                    hidden: { opacity: 0, x: -100 },
                    visible: { opacity: 1, x: 0 }
                }}
            >
                <HText><span className='text-blue-800'>LEADERSHIP @ SOUTH COAST SAFETY AGENCY</span></HText>
                <p className='my-5 text-lg text-blue-800'>
                    At South Coast Safety Agency, our leadership team brings with them extensive experience in law enforcement and public safety. Our teams are therefore grounded in professional expertise. Certified by the state of California, we uphold the highest standards of safety and reliability in our services. Our commitment to excellence and community protection sets us apart in the industry.
                </p>
            </motion.div>

            { /* BENEFITS */}
            <motion.div 
                className='md:flex items-center justify-between gap-8 mt-5'
                initial='hidden'
                whileInView='visible'
                viewport={{ once: true, amount: 0.5 }}
                variants={container}
            >
                {leadershipData.map((leadershipItem: LeadershipType) => (
                    <LeadershipCard
                        key={leadershipItem.title}
                        icon={leadershipItem.icon}
                        title={leadershipItem.title}
                        description={leadershipItem.description}
                        link={leadershipItem.link}
                        setSelectedPage={setSelectedPage}
                    />
                ))}
            </motion.div>

            { /* GRAPHICS AND DESCRIPTION */ }
            <div className='mt-16 items-center justify-between gap-20 md:mt-28 md:flex'>
                { /* GRAPHIC */ }
                <div>
                    <img
                        className='mx-auto'  // Adjust width and height as needed
                        alt='benefits-page-graphic'
                        src={BenefitsPageGraphic}
                    />
                </div>

                { /* DESCRIPTION */ }
                <div>
                    { /* TITLE */ }
                    <div className='relative'>
                        <div className='before:absolute before:-left-60 before:-top-20 before:z-[1]'>
                            <motion.div
                                initial = 'hidden'
                                whileInView='visible'
                                viewport={{ once: true, amount: 0.5 }}
                                transition={{ duration: 0.5 }}
                                variants={{
                                    hidden: { opacity: 0, x: 50 },
                                    visible: { opacity: 1, x: 0 }
                                }}
                            >
                                <HText>
                                    <span className='text-yellow-500'>AL ROCCA - </span>
                                    <span className='text-blue-800'>CARING FOR OUR COMMUNITY</span>
                                </HText>
                            </motion.div>
                        </div>
                    </div>

                    { /* DESCRIPTION */ }
                    <motion.div
                        initial = 'hidden'
                        whileInView='visible'
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ duration: 0.5 }}
                        variants={{
                            hidden: { opacity: 0, x: -50 },
                            visible: { opacity: 1, x: 0 }
                        }}
                    >
                        <p className="my-5 text-blue-600">
                            Chief Al Rocca founded South Coast Safety Agency. He founded the company in 2024 driven by a strong commitment to safety for all community members, without exclusion.
                        </p>
                        <p className="mb-5 text-blue-600">
                            Chief Al Rocca has 23 years of public safety experience. His background includes emergency ambulance operations, law enforcement,  military emergency management, and being a park ranger. He has five degrees, including a masters in organizational leadership.
                        </p>
                    </motion.div>

                    { /* BUTTON */ }
                    <div className='relative mt-16'>
                        <div className="before:absolute before:-bottom-20 before:right-40 before:z-[-1]">
                            <ActionButton setSelectedPage={setSelectedPage}>
                                Reach Out
                            </ActionButton>
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    </section>

  )
}

export default Leadership
