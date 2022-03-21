import cn from 'classnames';

import styles from './_index.module.scss';

interface moviesProps {
  className?: string;
}

function Movies(props: moviesProps) {
  const { className } = props;

  return <div className={cn(styles.movies, className)}>movies</div>;
}

export default Movies;
