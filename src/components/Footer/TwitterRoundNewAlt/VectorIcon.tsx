import { memo, SVGProps } from 'react';

const VectorIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 18 18' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M15.2826 0H2.80331C1.26601 0 0 1.26 0 2.79V15.12C0 16.74 1.26601 18 2.80331 18H15.1921C16.7294 18 17.9954 16.74 17.9954 15.21V2.79C18.0859 1.26 16.8199 0 15.2826 0ZM11.0324 13.86L10.8515 13.59L8.40993 10.08L5.15447 13.86H4.34061L8.04821 9.54L4.97361 5.13L4.34061 4.14H7.14392L7.32478 4.41L9.58551 7.74L11.9367 4.95L12.6601 4.14H13.474L9.94723 8.28L13.1123 12.87L13.8357 13.86H11.0324Z'
      fill='#0A1425'
    />
  </svg>
);

const Memo = memo(VectorIcon);
export { Memo as VectorIcon };
