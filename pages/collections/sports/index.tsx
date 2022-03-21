import cn from 'classnames';

import styles from './_index.module.scss';

interface sportsProps {
  className?: string;
}

function Sports(props: sportsProps) {
  const { className } = props;

  return <div className={cn(styles.sports, className)}>sports</div>;
}

export default Sports;
