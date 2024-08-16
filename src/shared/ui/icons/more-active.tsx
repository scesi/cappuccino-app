import { SVGProps } from 'react'

type Props = SVGProps<SVGSVGElement>

export const CoffeeIconFull = (props: Props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <path
      fill="#000"
      d="M5 2h2v3H5V2Zm4 0h2v3H9V2Zm4 0h2v3h-2V2Zm6 7h-2V8a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v10a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3h2c1.103 0 2-.897 2-2v-5c0-1.103-.897-2-2-2Zm-2 7v-5h2l.002 5H17Z"
    />
  </svg>
)
