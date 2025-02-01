import * as React from 'react';
import type { SVGProps } from 'react';
const SvgTelephone = (props: SVGProps<SVGSVGElement>) => (
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
      d='M11.998 17.923a2.414 2.414 0 1 1 0-4.83 2.416 2.416 0 1 1 0 4.83m7.046-5.899a.15.15 0 0 0-.148-.119q-.357-.002-.712-.011c-.276-.007-.577-.015-.902-.015-2.599 0-3.38-1.786-3.755-2.643-.3-.686-.347-.793-1.529-.793-1.18 0-1.226.106-1.525.792-.376.857-1.155 2.644-3.755 2.644-.32 0-.618.008-.891.014q-.3.008-.599.01a.31.31 0 0 0-.299.235l-.077.323-.752 3.88c-.161 1.215.168 2.361.926 3.228.824.941 2.099 1.48 3.498 1.48h6.94c1.472 0 2.845-.6 3.674-1.604.715-.868.987-1.98.764-3.135z'
      clipRule='evenodd'
      opacity={0.4}
    />
    <path
      fill='currentColor'
      fillRule='evenodd'
      d='M11.998 2.951c-9.803 0-9.075 3.517-9.118 3.912 0 3.506 1.072 2.99 3.838 2.99 2.868 0 .774-3.436 5.28-3.436s2.415 3.435 5.283 3.435c2.767 0 3.839.527 3.839-2.99-.044-.394.68-3.91-9.122-3.91'
      clipRule='evenodd'
    />
  </svg>
);
export default SvgTelephone;
