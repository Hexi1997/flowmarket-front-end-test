import cn from 'classnames';
import Image from 'next/image';

import circleImg from '@/assets/images/home/circle.svg';

import { Button } from '../Common/Button';
import { ICollectionRank } from '../Pages/Home/SectionTopCollectionsOneDay';
import styles from './TopRank.module.scss';

interface TopRankProps {
  className?: string;
  data: ICollectionRank;
}

export function TopRank(props: TopRankProps) {
  const { className, data } = props;

  return (
    <div className={cn(styles.TopRank, className)}>
      <Button type="Default" className="relative w-[316px] h-16 !rounded-full">
        <div className="absolute -left-4 top-1">
          <Image src={data.icon} width="56" height="56" />
          <div className="absolute -left-2 -top-2 w-[73px] h-[73px]">
            <Image src={circleImg} width="73" height="73" />
          </div>
          <div className="absolute -left-3 -top-1  bg-white shadow-md w-[26px] h-[26px] leading-[26px] text-center rounded-full text-themeGreen">
            {data.rank}
          </div>
        </div>
        <div className="absolute left-16 top-0 h-16 w-[232px] text-left flex flex-col justify-center space-y-1">
          <span className="text-xl font-medium line-clamp-1 hover:font-bold">
            {data.name}
          </span>
          <span className="text-sm line-clamp-1 text-[#66666699]">
            {data.sales}
          </span>
        </div>
      </Button>
    </div>
  );
}
