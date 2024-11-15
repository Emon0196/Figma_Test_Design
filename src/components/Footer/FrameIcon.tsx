import { memo, SVGProps } from 'react';

const FrameIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 32 32' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <g clipPath='url(#clip0_4583_81)'>
      <path
        d='M2.00272e-05 32V8.65303C2.00272e-05 1.72063 8.34272 -1.7331 13.2057 3.17943L20.9591 11.022L16.0093 15.9595L8.12563 8.07325C7.72865 7.67427 7.04635 7.96104 7.05255 8.52211L7.14559 24.8743L2.00272e-05 32Z'
        fill='#BD1F17'
      />
      <path
        d='M32 0V23.3532C32 30.2794 23.6573 33.7393 18.7944 28.8268L11.0409 20.9842L15.9907 16.0468L23.8682 23.933C24.2652 24.332 24.9475 24.0452 24.9413 23.4841L24.8482 7.13189L32 0Z'
        fill='#BD1F17'
      />
    </g>
    <defs>
      <clipPath id='clip0_4583_81'>
        <rect width={32} height={32} fill='white' />
      </clipPath>
    </defs>
  </svg>
);

const Memo = memo(FrameIcon);
export { Memo as FrameIcon };
