import cn from 'classnames';

import styles from './Header.module.scss';

interface HeaderProps {
  className?: string;
}

export function Header(props: HeaderProps) {
  const { className } = props;

  return <div className={cn(styles.Header, className)}>Header</div>;
}
