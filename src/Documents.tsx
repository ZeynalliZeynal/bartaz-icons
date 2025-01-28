import * as React from 'react';
import type { SVGProps } from 'react';
const SvgDocuments = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={24}
    height={24}
    fill='none'
    {...props}
  >
    <path
      fill='currentColor'
      fillRule='evenodd'
      d='M6.182 6.987h11.637a.75.75 0 0 0 0-1.5H6.182a.75.75 0 0 0 0 1.5M8.719 3.875h6.562a.75.75 0 1 0 0-1.5H8.719a.75.75 0 0 0 0 1.5'
      clipRule='evenodd'
    />
    <path
      fill='currentColor'
      fillRule='evenodd'
      d='M17.237 8.84H6.762a3.82 3.82 0 0 0-3.813 3.813v5.156a3.82 3.82 0 0 0 3.813 3.814h10.475a3.82 3.82 0 0 0 3.813-3.814v-5.156a3.817 3.817 0 0 0-3.813-3.813'
      clipRule='evenodd'
      opacity={0.4}
    />
  </svg>
);
export default SvgDocuments;
