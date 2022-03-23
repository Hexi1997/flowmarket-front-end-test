import cn from 'classnames';
import Image from 'next/image';

import greenHeart from '@/assets/images/home/green_heart.svg';
import normalHeart from '@/assets/images/home/line_heart.svg';

import { Button } from '../Common/Button';
import { IITem } from '../Pages/Home/SectionHotBids';
import styles from './ItemCard.module.scss';

interface ItemCardProps {
  data: IITem;
  className?: string;
}

export function ItemCard(props: ItemCardProps) {
  const { className, data } = props;

  return (
    <div
      className={cn(
        styles.ItemCard,
        className,
        'mx-auto w-[320px] overflow-hidden h-[420px] rounded-xl shadow-lg cursor-pointer hover:shadow-2xl'
      )}
    >
      <Image src={data.img} width="320" height="312" />
      <div
        className={cn(
          styles.contentArea,
          'px-4 py-2 z-10 -translate-y-16 transition-all duration-300 bg-white sm:translate-y-0 sm:hover:-translate-y-16'
        )}
      >
        <div className="flex justify-between items-center">
          <span className="max-w-[220px] line-clamp-1 text-xl">
            {data.name}
          </span>
          <div className="flex items-center space-x-2">
            <Image
              src={data.isLikeByYou ? greenHeart : normalHeart}
              width={data.isLikeByYou ? '26' : '22'}
              className="hover:opacity-70 cursor-pointer"
            />
            <span className="text-[#666666]">{data.starCount}</span>
          </div>
        </div>
        <div className="flex items-center justify-between mt-2">
          <div className="flex items-center cursor-pointer hover:opacity-70">
            <div className="rounded-full overflow-hidden">
              <Image src={data.userIcon} width="28" height="28" />
            </div>
            <span className="ml-1 max-w-[150px] line-clamp-1 text-[#666666]">
              {data.userName}
            </span>
          </div>
          <span className="font-bold">{data.price}</span>
        </div>
        <Button className="w-full h-8 !rounded-full mt-8">BUY NOW</Button>
      </div>
    </div>
  );
}
