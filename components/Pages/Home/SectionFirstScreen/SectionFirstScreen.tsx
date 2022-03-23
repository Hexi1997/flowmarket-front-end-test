import cn from 'classnames';
import Image from 'next/image';

import maskImg from '@/assets/images/home/mask.png';

import styles from './SectionFirstScreen.module.scss';
interface SectionFirstScreenProps {
  className?: string;
}

export function SectionFirstScreen(props: SectionFirstScreenProps) {
  const { className } = props;

  return (
    <div
      className={cn(
        styles.SectionFirstScreen,
        className,
        'resetContainer',
        'bg-gradient-to-b from-[#eeffbf72] to-[#e6ffbf00]'
      )}
    >
      <div className="absolute hidden blur-3xl w-96 -left-4 top-0 sm:block">
        <Image src={maskImg} />
      </div>
      <div className="overflow-hidden blur-2xl absolute hidden rotate-90 w-[500px] -right-40 -bottom-64 sm:block">
        <Image src={maskImg} />
      </div>
      SectionFirstScreen
    </div>
  );
}
