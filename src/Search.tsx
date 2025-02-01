import * as React from 'react';
import type { SVGProps } from 'react';
const SvgSearch = (props: SVGProps<SVGSVGElement>) => (
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
      d='M11.767 3.528a8.239 8.239 0 1 0 0 16.477 8.239 8.239 0 0 0 0-16.477m-9.739 8.239c0-5.379 4.36-9.739 9.739-9.739 5.378 0 9.738 4.36 9.738 9.739 0 5.378-4.36 9.738-9.738 9.738-5.379 0-9.739-4.36-9.739-9.738'
      clipRule='evenodd'
    />
    <path
      fill='currentColor'
      fillRule='evenodd'
      d='M17.487 17.956a.75.75 0 0 1 1.061-.002l3.524 3.515a.75.75 0 0 1-1.06 1.062l-3.523-3.515a.75.75 0 0 1-.002-1.06'
      clipRule='evenodd'
    />
  </svg>
);
export default SvgSearch;
