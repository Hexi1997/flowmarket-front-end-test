import cn from 'classnames';
import { useRef, useState } from 'react';

import styles from './Input.module.scss';

interface InputProps {
  className?: string;
  placeholderClassName?: string;
  cb: (value: string) => void;
  property: React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  >;
}

// react-i18next的bug，详见 https://stackoverflow.com/questions/69112341/nextjs-react-i18next-images-and-input-placeholders-are-not-translated
/**
 * Single line input with i18n placeholder
 * @param props
 * @returns
 */
export function Input(props: InputProps) {
  const { className, property, placeholderClassName, cb } = props;
  const { placeholder, multiple, ...rest } = property;
  const ref = useRef<HTMLInputElement | null>(null);
  const [isShowPlaceHolder, setIsShowPlaceHolder] = useState(true);
  const [value, setValue] = useState<string>('');

  return (
    <div className={cn(styles.Input, 'relative')}>
      <input
        onClick={() => {
          ref.current?.focus();
          setIsShowPlaceHolder(false);
        }}
        onBlur={(e) => {
          if (!e.target.value) {
            setIsShowPlaceHolder(true);
          }
        }}
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
          cb(e.target.value);
        }}
        ref={ref}
        className={cn(className, 'z-0')}
        {...rest}
        multiple={false}
      />
      <div
        onClick={() => {
          ref.current?.focus();
          setIsShowPlaceHolder(false);
        }}
        className={cn(
          'absolute text-stone-500 w-full whitespace-nowrap overflow-hidden text-ellipsis',
          isShowPlaceHolder ? '' : 'hidden',
          placeholderClassName
        )}
      >
        {placeholder}
      </div>
    </div>
  );
}
