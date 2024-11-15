import { memo, SVGProps } from 'react';

const EpArrowRightBoldIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 60 60' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <rect x={60} y={60} width={60} height={60} rx={30} transform='rotate(-180 60 60)' fill='white' />
    <path
      d='M34.9718 38.9409C35.2354 38.6772 35.3835 38.3196 35.3835 37.9467C35.3835 37.5738 35.2354 37.2162 34.9718 36.9525L28.0109 29.9915L34.9718 23.0306C35.228 22.7654 35.3697 22.4101 35.3665 22.0414C35.3633 21.6727 35.2154 21.32 34.9547 21.0593C34.6939 20.7985 34.3412 20.6506 33.9725 20.6474C33.6038 20.6442 33.2486 20.786 32.9834 21.0421L25.0282 28.9973C24.7646 29.261 24.6165 29.6186 24.6165 29.9915C24.6165 30.3644 24.7646 30.722 25.0282 30.9857L32.9834 38.9409C33.2471 39.2045 33.6047 39.3526 33.9776 39.3526C34.3505 39.3526 34.7081 39.2045 34.9718 38.9409V38.9409Z'
      fill='#0A1425'
    />
  </svg>
);

const Memo = memo(EpArrowRightBoldIcon);
export { Memo as EpArrowRightBoldIcon };
