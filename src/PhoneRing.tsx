import * as React from 'react';
import type { SVGProps } from 'react';
const SvgPhoneRing = (props: SVGProps<SVGSVGElement>) => (
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
      d='M3.476 8.828a.72.72 0 0 0-.72.72v5.088a.72.72 0 0 0 1.44 0V9.548a.72.72 0 0 0-.72-.72M20.756 8.731a.72.72 0 0 0-.72.72v5.088a.72.72 0 0 0 1.44 0V9.45a.72.72 0 0 0-.72-.72'
      clipRule='evenodd'
    />
    <path
      fill='currentColor'
      fillRule='evenodd'
      d='M14.516 3.115H9.908c-2.102 0-3.744 1.642-3.744 3.744v10.272c0 2.103 1.642 3.744 3.744 3.744h4.58c.067 0 .124.01.182.01.873 0 1.718-.355 2.39-.989a3.84 3.84 0 0 0 1.2-2.765V6.86c0-2.102-1.642-3.744-3.744-3.744'
      clipRule='evenodd'
      opacity={0.4}
    />
    <path
      fill='currentColor'
      fillRule='evenodd'
      d='M12.068 17.52a.906.906 0 0 1-.912-.912c0-.518.48-.912.912-.912.509 0 .912.404.912.912 0 .519-.48.912-.912.912'
      clipRule='evenodd'
    />
  </svg>
);
export default SvgPhoneRing;
