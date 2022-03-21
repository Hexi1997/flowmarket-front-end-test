import cn from 'classnames';

import styles from './_index.module.scss';

interface musicProps {
  className?: string;
}

function Music(props: musicProps) {
  const { className } = props;

  return <div className={cn(styles.music, className)}>music</div>;
}

export default Music;
