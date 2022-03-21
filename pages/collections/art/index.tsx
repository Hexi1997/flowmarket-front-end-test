import cn from 'classnames';

import styles from './_index.module.scss';

interface artProps {
  className?: string;
}

function Art(props: artProps) {
  const { className } = props;

  return <div className={cn(styles.art, className)}>art</div>;
}

export default Art;
