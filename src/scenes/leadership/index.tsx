import { EyeIcon, ScaleIcon, Cog6ToothIcon } from '@heroicons/react/24/solid'
import { LeadershipType, SelectedPage } from '@/shared/types'
import LeadershipCard from './Leadership'
import useMediaQuery from '@/hooks/useMediaQuery'

const leadershipData : Array<LeadershipType> = [
    {
        icon: <EyeIcon className='h-6 w-6' />,
        title: 'Verify Our License',
        description: 'Verify our license on the Bureau of Security and Investigative Services website.',
        link: 'https://www.bbc.com/news/world'
    },
    {
        icon: <ScaleIcon className='h-6 w-6' />,
        title: 'Years of Experience',
        description: 'Our leadership has decades of experience honed in law enforcement.'
    },
    {
        icon: <Cog6ToothIcon className='h-6 w-6' />,
        title: 'State of the Art',
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
    const isAboveMediumScreens = useMediaQuery('(min-width:1060px)')

  return (
    <section
        id='leadership'
        className='mx-auto w-5/6'
    >
        <div className='md:flex items-center justify-between gap-8 pt-5'>
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
        </div>
    </section>
  )
}

export default Leadership
