import cn from 'classnames';
import { useRouter } from 'next/router';

import styles from './_index.module.scss';

interface CollectionIdProps {
  className?: string;
}

function CollectionId(props: CollectionIdProps) {
  const { className } = props;
  const router = useRouter();

  return (
    <div className={cn(styles.CollectionId, className)}>
      Collection {router.query.collectionId}
    </div>
  );
}

export default CollectionId;
