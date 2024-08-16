import { SVGProps } from 'react'

type Props = SVGProps<SVGSVGElement>

export const CalendarEditIcon = (props: Props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <path
      fill="#000"
      d="M19 4h-3V2h-2v2h-4V2H8v2H5c-1.103 0-2 .897-2 2v14c0 1.103.897 2 2 2h14c1.103 0 2-.897 2-2V6c0-1.103-.897-2-2-2ZM5 20V7h14V6l.002 14H5Z"
    />
    <path
      fill="#000"
      d="m15.628 12.184-1.8-1.8 1.37-1.37 1.8 1.799-1.37 1.37Zm-7.623 4.018V18h1.799l4.976-4.97-1.8-1.8-4.975 4.97Z"
    />
  </svg>
)
