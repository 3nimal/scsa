import useMediaQuery from '@/hooks/useMediaQuery';
import React from 'react';

interface SponsorsProps {
  sponsors: { alt: string, src: string }[];
}

const Sponsors: React.FC<SponsorsProps> = ({ sponsors }) => {
  const isAboveMediumScreens = useMediaQuery('(min-width:1060px)')
  if (!isAboveMediumScreens) return null;

  return (
    <section>
    <div className="h-[120px] w-full bg-blue-100 pt-4">
      <div className="mx-auto w-5/6">
        <div className="flex w-full items-center justify-between gap-8">
          {sponsors.map((sponsor, index) => (
            <img key={index} alt={sponsor.alt} src={sponsor.src} className="w-30 h-20" />
          ))}
        </div>
      </div>
    </div>
    </section>
  );
};

export default Sponsors;
