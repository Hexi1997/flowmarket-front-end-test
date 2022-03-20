import cn from 'classnames';

import styles from './_index.module.scss';

interface collectionsProps {
  className?: string;
}

function Collections(props: collectionsProps) {
  const { className } = props;

  return <div className={cn(styles.collections, className)}>collections</div>;
}

export default Collections;
