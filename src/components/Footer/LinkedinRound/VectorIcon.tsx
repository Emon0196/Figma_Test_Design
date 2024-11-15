import { memo, SVGProps } from 'react';

const VectorIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 18 18' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M5.658 4.099C5.658 3.245 4.965 2.552 4.111 2.552C3.257 2.552 2.564 3.245 2.564 4.099C2.564 4.953 3.257 5.646 4.111 5.646C4.964 5.644 5.656 4.953 5.658 4.099ZM5.449 15.409V6.821H2.777V15.409H5.449ZM15.445 10.701C15.445 8.387 14.943 6.606 12.242 6.606C12.211 6.605 12.175 6.604 12.138 6.604C11.111 6.604 10.212 7.156 9.723 7.979L9.716 7.992H9.679V6.82H7.12V15.408H9.789V11.159C9.789 10.037 10.002 8.952 11.393 8.952C12.759 8.952 12.779 10.234 12.779 11.229V15.408H15.446L15.445 10.701ZM3 0H15C16.657 0 18 1.343 18 3V15C18 16.657 16.657 18 15 18H3C1.343 18 0 16.657 0 15V3C0 1.343 1.343 0 3 0Z'
      fill='black'
    />
  </svg>
);

const Memo = memo(VectorIcon);
export { Memo as VectorIcon };
