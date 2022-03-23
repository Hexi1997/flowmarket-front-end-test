import cn from 'classnames';

import collectionIconImg from '@/assets/images/home/usericon2.png';
import { SectionTitle } from '@/components/SectionTitle';
import { TopRank } from '@/components/TopRank';

import styles from './SectionTopCollectionsOneDay.module.scss';

interface SectionTopCollectionsOneDayProps {
  className?: string;
}

export interface ICollectionRank {
  rank: number;
  icon: StaticImageData;
  name: string;
  sales: string;
}

const data: ICollectionRank[] = [
  {
    rank: 1,
    icon: collectionIconImg,
    name: 'Heart & Sol',
    sales: '5010.44 FLOW'
  },
  {
    rank: 2,
    icon: collectionIconImg,
    name: 'Heart & Sol',
    sales: '5010.44 FLOW'
  },
  {
    rank: 3,
    icon: collectionIconImg,
    name: 'Heart & Sol',
    sales: '5010.44 FLOW'
  },
  {
    rank: 4,
    icon: collectionIconImg,
    name: 'Heart & Sol',
    sales: '5010.44 FLOW'
  },
  {
    rank: 5,
    icon: collectionIconImg,
    name: 'Heart & Sol',
    sales: '5010.44 FLOW'
  },
  {
    rank: 6,
    icon: collectionIconImg,
    name: 'Heart & Sol',
    sales: '5010.44 FLOW'
  },
  {
    rank: 7,
    icon: collectionIconImg,
    name: 'Heart & Sol',
    sales: '5010.44 FLOW'
  },
  {
    rank: 8,
    icon: collectionIconImg,
    name: 'Heart & Sol',
    sales: '5010.44 FLOW'
  },
  {
    rank: 9,
    icon: collectionIconImg,
    name: 'Heart & Sol',
    sales: '5010.44 FLOW'
  }
];

export function SectionTopCollectionsOneDay(
  props: SectionTopCollectionsOneDayProps
) {
  const { className } = props;

  return (
    <div className={cn(styles.SectionTopCollectionsOneDay, className)}>
      <SectionTitle className="mt-[78px] mb-[45px]">
        Top collections in 1 day{' '}
      </SectionTitle>
      <div className="pl-4 sm:pl-0 grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3">
        {[0, 1, 2].map((_, index) => {
          const colData = data.slice(index * 3, (index + 1) * 3);
          return (
            <div key={index} className="mx-auto">
              {colData.map((item, index) => (
                <TopRank data={item} key={index} className="mb-10" />
              ))}
            </div>
          );
        })}
      </div>
    </div>
  );
}
