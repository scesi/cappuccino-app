import { SVGProps } from 'react'

type Props = SVGProps<SVGSVGElement>

export const CalendarEditActive = (props: Props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <path
      fill="#000"
      d="M5 22h14c1.103 0 2-.897 2-2V6c0-1.103-.897-2-2-2h-2V2h-2v2H9V2H7v2H5c-1.103 0-2 .897-2 2v14c0 1.103.897 2 2 2Zm4.799-2.013H8v-1.799l4.977-4.97 1.799 1.799-4.977 4.97Zm5.824-5.817-1.799-1.799L15.196 11l1.799 1.799-1.372 1.371ZM5 7h14v2H5V7Z"
    />
  </svg>
)
