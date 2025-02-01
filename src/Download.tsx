import * as React from 'react';
import type { SVGProps } from 'react';
const SvgDownload = (props: SVGProps<SVGSVGElement>) => (
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
      d='M2.88 16.309a3.944 3.944 0 0 0 3.944 3.944h10.352a3.944 3.944 0 0 0 3.944-3.944v-4.471a3.944 3.944 0 0 0-3.944-3.944H6.824a3.944 3.944 0 0 0-3.944 3.944z'
      opacity={0.4}
    />
    <path
      fill='currentColor'
      fillRule='evenodd'
      d='m12.72 13.454 1.42-1.421a.724.724 0 0 1 1.018 0 .724.724 0 0 1 0 1.017l-2.65 2.66a.6.6 0 0 1-.153.115c0 .01 0 .01-.01.01-.028.009-.047.028-.076.038a.7.7 0 0 1-.25.048h-.038a.7.7 0 0 1-.25-.048c-.057-.03-.105-.058-.153-.087-.03-.028-.058-.048-.087-.076l-2.65-2.66a.724.724 0 0 1 0-1.017.736.736 0 0 1 1.028 0l1.411 1.42V4a.72.72 0 1 1 1.44 0z'
      clipRule='evenodd'
    />
  </svg>
);
export default SvgDownload;
