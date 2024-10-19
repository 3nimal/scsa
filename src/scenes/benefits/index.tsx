import React from 'react';
import { motion } from 'framer-motion';
import HText from '@/shared/HText';  // Assuming this is a component you're using for headers
import ActionButton from '@/shared/ActionButton'; // Assuming this is your button component
import AlRocca from '@/assets/AlRocca.jpg'; // Adjust the path as needed
import { SelectedPage } from '@/shared/types';

interface BenefitsSectionProps {
    setSelectedPage: (value: SelectedPage) => void
}

const BenefitsSection: React.FC<BenefitsSectionProps> = ({ setSelectedPage }) => {
  return (
    <section>
    <motion.div
    className='mx-auto min-h-full w-5/6 mt-2'>
      {/* GRAPHICS AND DESCRIPTION */}
      <div className='mt-16 items-center justify-between gap-20 md:mt-12 md:flex'>
        {/* GRAPHIC */}
        <div>
          <img
            className='mx-auto'  // Adjust width and height as needed
            alt='benefits-page-graphic'
            src={AlRocca}
          />
        </div>

        {/* DESCRIPTION */}
        <div>
          {/* TITLE */}
          <div className='relative'>
            <div className='before:absolute before:-left-60 before:-top-20 before:z-[1]'>
              <motion.div
                initial='hidden'
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

          {/* DESCRIPTION TEXT */}
          <motion.div
            initial='hidden'
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
              Chief Al Rocca has 23 years of public safety experience. His background includes emergency ambulance operations, law enforcement, military emergency management, and being a park ranger. He has five degrees, including a masters in organizational leadership.
            </p>
          </motion.div>

          {/* BUTTON */}
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
  );
};

export default BenefitsSection;
