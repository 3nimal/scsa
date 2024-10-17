import { ClassType, SelectedPage } from '@/shared/types'
import image1 from '@/assets/image1.png'
import image2 from '@/assets/image2.jpg'
import image3 from '@/assets/image3.png'
import image4 from '@/assets/image4.png'
import image5 from '@/assets/image5.png'
import image6 from '@/assets/image6.png'
import { motion } from 'framer-motion'
import HText from '@/shared/HText'
import Class from './Service'

const classes: Array<ClassType> = [
    {
        name: "Mobile Patrol Services",
        description:
          "Our mobile patrol services provide consistent surveillance and rapid response to incidents. With trained personnel patrolling designated areas, we ensure a visible deterrent to crime, allowing communities and businesses to feel secure around the clock.",
        image: image1,
      },
      {
        name: "Event Security",
        image: image2,
      },
      {
        name: "Executive Protection",
        description:
          "Our executive protection services cater to high-profile individuals needing discreet security. With a focus on risk assessment and proactive planning, our trained professionals ensure the safety of executives and celebrities during their daily activities and public appearances.",
        image: image3,
      },
      {
        name: "Community Safety Programs",
        description:
          "We offer community safety programs aimed at educating residents on crime prevention and emergency response. By fostering collaboration and awareness, we help build safer neighborhoods and enhance overall community well-being.",
        image: image4,
      },
      {
        name: "Alarm Systems Installation",
        image: image5,
      },
      {
        name: "Workplace Violence Prevention",
        description:
          "We provide workplace violence prevention programs that focus on training and resources for recognizing and mitigating threats. Our tailored strategies promote a culture of safety, allowing employees to feel secure and valued in their workplace.",
        image: image6,
      },
]

type Props = {
    setSelectedPage: (value: SelectedPage) => void
}

const OurServices = ({ setSelectedPage }: Props) => {
  return <section id='ourservices' className='w-full bg-blue-950'>
    <motion.div 
        onViewportEnter={() => setSelectedPage(SelectedPage.OurServices)}
    >
      <motion.div
        className='mx-auto w-5/6'
          initial = 'hidden'
          whileInView='visible'
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 }
          }}
      >
        <div className='md:w-3/5'>
            <HText>OUR SERVICES</HText>
            <p className='py-5 text-white text-xl'>
            At South Coast Safety Agency, we offer a comprehensive range of security services tailored to meet the needs of our clients while adhering to the latest laws of California. You can trust us to protect what matters most with our wide range of service, mindset, state of the art tools, experience and training.
            </p>
        </div>

      </motion.div>
      <div className='mt-10 h-[450px] w-full overflow-x-auto overflow-y-hidden pb-4'>
          <ul className='w-[2800px] whitespace-nowrap'>
              {classes.map((item, index) => (
                  <Class 
                      key={`${item.name}-${index}`}
                      name={item.name}
                      description={item.description}
                      image={item.image}
                  />
              ))}
          </ul>
      </div>
    </motion.div>
  </section>
}

export default OurServices