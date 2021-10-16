import classnames from "classnames"
import { FC } from "react"

type LinkProps = {
  setFilter: () => void
  active: boolean
}
export const Link: FC<LinkProps> = (props) => {
  const anchorClassName = classnames({ selected: props.active })
  return (
    <a
      className={anchorClassName}
      style={{ cursor: "pointer" }}
      onClick={props.setFilter}
    >
      {props.children}
    </a>
  )
}

export default Link
