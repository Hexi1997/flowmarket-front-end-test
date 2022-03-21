import cn from 'classnames';

import styles from './_index.module.scss';

interface activitiesProps {
  className?: string;
}

function Activities(props: activitiesProps) {
  const { className } = props;

  return <div className={cn(styles.activities, className)}>activities</div>;
}

export default Activities;
