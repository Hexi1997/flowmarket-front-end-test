import cn from 'classnames';

import styles from './_index.module.scss';

interface starsProps {
  className?: string;
}

function Stars(props: starsProps) {
  const { className } = props;

  return <div className={cn(styles.stars, className)}>stars</div>;
}

export default Stars;
