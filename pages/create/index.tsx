import cn from 'classnames';

import styles from './_index.module.scss';

interface createProps {
  className?: string;
}

function Create(props: createProps) {
  const { className } = props;

  return <div className={cn(styles.create, className)}>create</div>;
}

export default Create;
