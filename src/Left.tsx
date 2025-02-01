import * as React from 'react';
import type { SVGProps } from 'react';
const SvgLeft = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width='1em'
    height='1em'
    fill='none'
    viewBox='0 0 24 24'
    {...props}
  >
    <path
      fill='currentColor'
      fillRule='evenodd'
      d='M7.2 6v11.52a.96.96 0 1 1-1.92 0V6A.96.96 0 1 1 7.2 6'
      clipRule='evenodd'
      opacity={0.4}
    />
    <path
      fill='currentColor'
      fillRule='evenodd'
      d='M18.72 6a.96.96 0 0 1-.28.679l-5.082 5.08 5.081 5.082a.959.959 0 1 1-1.357 1.357l-5.76-5.76a.96.96 0 0 1 0-1.357l5.76-5.76A.959.959 0 0 1 18.72 6'
      clipRule='evenodd'
    />
  </svg>
);
export default SvgLeft;
