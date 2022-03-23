import cn from 'classnames';
import Image from 'next/image';

import maskImg from '@/assets/images/home/mask.png';
import { Button } from '@/components/Common/Button';

import { ImageSwiper } from './ImageSwiper';
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
        'bg-gradient-to-b from-[#eeffbf72] to-[#e6ffbf00] text-[#333333]'
      )}
    >
      <div className="absolute select-none hidden blur-3xl w-96 -left-4 top-0 sm:block -z-10">
        <Image src={maskImg} />
      </div>
      <div className="overflow-hidden select-none blur-2xl -z-10 absolute hidden rotate-90 w-[500px] -right-40 -bottom-64 sm:block">
        <Image src={maskImg} />
      </div>
      <div
        className={cn(
          'flex flex-row justify-between items-center h-[calc(100vh_-_64px)]'
        )}
      >
        <div>
          <h1 className="text-[52px] font-bold">Flow Marketplace</h1>
          <p className="max-w-[670px] mt-[9px] mb-[51px] text-2xl font-medium">
            The most useful NFT marketplace in the web3.0 world, you can quickly
            create your NFT or buy any type of collection that interests you!
          </p>
          <div className="flex">
            <Button type="Primary" className="w-[105px] h-9 !rounded-lg">
              Create
            </Button>
            <Button
              type="Default"
              className="w-[105px] h-9 ml-[14px] !rounded-lg"
            >
              Market
            </Button>
          </div>
        </div>
        <ImageSwiper />
      </div>
    </div>
  );
}
