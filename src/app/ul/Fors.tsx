
import { FC } from "react"


interface Props {
    name: string
  }

const Fors:FC<Props> = ({name}) => {
  return (
    <>
      <span className="px-3.5 py-3 bg-grey15 rounded-[8px] z-30">{name}</span>
    </>
  )
}

export default Fors