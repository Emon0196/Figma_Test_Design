import { memo, SVGProps } from 'react';

const VectorIcon4 = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 20 26' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M10 25.5C10 25.5 10 25.5 9.99875 25.5C9.73 25.5 9.48125 25.415 9.2775 25.27L9.28125 25.2725C8.9025 25.0075 -0.00124973 18.675 -0.00124973 10.9537C-0.00249973 10.8912 -0.00374985 10.8175 -0.00374985 10.7437C-0.00374985 5.17125 4.445 0.63625 9.98625 0.5H9.99875C15.5512 0.63625 20.0012 5.17 20.0012 10.7437C20.0012 10.8175 20 10.8912 19.9988 10.965V10.9537C19.9988 18.675 11.095 25.0075 10.7163 25.2725C10.5163 25.415 10.2675 25.5 9.99875 25.5H10ZM10 3C5.8275 3.135 2.4975 6.55 2.4975 10.7412C2.4975 10.8162 2.49875 10.89 2.50125 10.965V10.9537C2.50125 16.2287 7.99875 21.0838 10.0013 22.6788C12.0038 21.085 17.5012 16.2287 17.5012 10.9537C17.5025 10.89 17.5038 10.8162 17.5038 10.7412C17.5038 6.54875 14.1725 3.13375 10.0138 3H10.0013H10ZM10 15.3863C9.9775 15.3863 9.95 15.3875 9.9225 15.3875C7.34875 15.3875 5.2625 13.3013 5.2625 10.7275C5.2625 8.15375 7.34875 6.0675 9.9225 6.0675C12.4963 6.0675 14.5825 8.15375 14.5825 10.7275C14.5825 10.7375 14.5825 10.7488 14.5825 10.76C14.5825 13.3 12.5363 15.3625 10.0013 15.3863H9.99875H10ZM10 8.5675C9.97625 8.56625 9.95 8.56625 9.9225 8.56625C8.72875 8.56625 7.76125 9.53375 7.76125 10.7275C7.76125 11.9213 8.72875 12.8888 9.9225 12.8888C11.1163 12.8888 12.0838 11.9213 12.0838 10.7275C12.0838 10.7175 12.0838 10.705 12.0838 10.6925C12.0838 9.53375 11.1563 8.59125 10.0025 8.5675H10Z'
      fill='#FEBF00'
    />
  </svg>
);

const Memo = memo(VectorIcon4);
export { Memo as VectorIcon4 };
