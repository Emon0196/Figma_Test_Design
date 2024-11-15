import { memo, SVGProps } from 'react';

const VectorIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 22 18' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M19 0H3C1.344 0.002 0.002 1.344 0 3V15C0.002 16.656 1.344 17.998 3 18H19C20.656 17.998 21.998 16.656 22 15V3C21.998 1.344 20.656 0.002 19 0ZM3 2H19C19.388 2.003 19.722 2.228 19.883 2.553L19.886 2.559L11 8.779L2.114 2.559C2.278 2.227 2.612 2.003 3 2ZM19 16H3C2.448 15.999 2.001 15.552 2 15V4.921L10.427 10.82C10.587 10.933 10.786 11.001 11 11.001C11.214 11.001 11.413 10.933 11.576 10.818L11.573 10.82L20 4.921V15C19.999 15.552 19.552 15.999 19 16Z'
      fill='black'
    />
  </svg>
);

const Memo = memo(VectorIcon);
export { Memo as VectorIcon };
