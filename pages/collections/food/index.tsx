import cn from 'classnames';

import styles from './_index.module.scss';

interface foodProps {
  className?: string;
}

function Food(props: foodProps) {
  const { className } = props;

  return <div className={cn(styles.food, className)}>food</div>;
}

export default Food;
