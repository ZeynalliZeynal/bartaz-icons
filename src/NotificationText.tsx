import * as React from 'react';
import type { SVGProps } from 'react';
const SvgNotificationText = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width='1em'
    height='1em'
    fill='none'
    viewBox='0 0 24 24'
    {...props}
  >
    <path
      stroke='currentColor'
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth={1.5}
      d='M12.5 3.056H8.067c-1.774 0-2.66 0-3.338.345a3.17 3.17 0 0 0-1.384 1.384C3 5.462 3 6.349 3 8.122v7.811c0 1.774 0 2.66.345 3.338.304.596.788 1.08 1.384 1.384C5.406 21 6.293 21 8.067 21h7.81c1.774 0 2.661 0 3.338-.345A3.17 3.17 0 0 0 20.6 19.27c.345-.677.345-1.564.345-3.338V11.5m-7.388 4.222H7.222m8.445-4.222H7.222M20.7 2.773a2.639 2.639 0 1 1-3.732 3.732 2.639 2.639 0 0 1 3.731-3.732'
    />
  </svg>
);
export default SvgNotificationText;
