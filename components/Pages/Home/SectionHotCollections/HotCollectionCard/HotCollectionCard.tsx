import cn from 'classnames';
import Image from 'next/image';

import { IHotCollection } from '../SectionHotCollections';
import styles from './HotCollectionCard.module.scss';

interface HotCollectionCardProps {
  className?: string;
  data: IHotCollection;
}

export function HotCollectionCard(props: HotCollectionCardProps) {
  const { className, data } = props;

  return (
    <div
      className={cn(
        styles.HotCollectionCard,
        className,
        'relative w-[232px] h-[263px] rounded-[16px] shadow-lg mx-auto mb-8 cursor-pointer hover:shadow-2xl'
      )}
    >
      <Image src={data.img} width="232" height="167" />
      <div className="absolute bottom-[67px] right-5 w-[58px] h-[58px] rounded-full bg-white flex justify-center items-center">
        <Image src={data.icon} width="48" height="48" />
      </div>
      <div className="p-5">
        <div className="text-[#999999] font-medium line-clamp-1">
          {data.price}
        </div>
        <div className="text-xl font-medium mt-1 line-clamp-1">{data.name}</div>
      </div>
    </div>
  );
}
