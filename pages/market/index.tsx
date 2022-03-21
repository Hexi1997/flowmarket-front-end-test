import cn from 'classnames';

import styles from './_index.module.scss';

interface marketProps {
  className?: string;
}

function Market(props: marketProps) {
  const { className } = props;

  return <div className={cn(styles.market, className)}>market</div>;
}

export default Market;
