import cn from 'classnames';

import styles from './_index.module.scss';

interface photographyProps {
  className?: string;
}

function Photography(props: photographyProps) {
  const { className } = props;

  return <div className={cn(styles.photography, className)}>photography</div>;
}

export default Photography;
