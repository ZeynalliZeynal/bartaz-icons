import * as React from 'react';
import type { SVGProps } from 'react';
const SvgCardToCard = (props: SVGProps<SVGSVGElement>) => (
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
      d='M19 10.28v7.15c-.03 2.85-.81 3.57-3.78 3.57H5.78C2.76 21 2 20.25 2 17.27v-6.99c0-2.7.63-3.57 3-3.71.24-.01.5-.02.78-.02h9.44c3.02 0 3.78.75 3.78 3.73'
      opacity={0.4}
    />
    <path
      fill='currentColor'
      d='M22 6.73v6.99c0 2.7-.63 3.57-3 3.71v-7.15c0-2.98-.76-3.73-3.78-3.73H5.78c-.28 0-.54.01-.78.02C5.03 3.72 5.81 3 8.78 3h9.44C21.24 3 22 3.75 22 6.73M6.96 18.56H5.24c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h1.72a.749.749 0 1 1 0 1.5M12.55 18.56H9.11c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h3.44a.749.749 0 1 1 0 1.5'
    />
    <path fill='currentColor' d='M19 11.86H2v1.5h17z' />
  </svg>
);
export default SvgCardToCard;
