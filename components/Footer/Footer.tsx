import cn from 'classnames';

import styles from './Footer.module.scss';

interface FooterProps {
  className?: string;
}

export function Footer(props: FooterProps) {
  const { className } = props;

  return <div className={cn(styles.Footer, className)}>Footer</div>;
}
