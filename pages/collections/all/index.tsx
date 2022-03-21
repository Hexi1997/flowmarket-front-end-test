import cn from 'classnames';

import styles from './_index.module.scss';

interface allProps {
  className?: string;
}

function All(props: allProps) {
  const { className } = props;

  return <div className={cn(styles.all, className)}>all</div>;
}

export default All;
