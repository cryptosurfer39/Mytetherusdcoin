import { FC, ReactNode } from "react"

type BackgroundProps = {
  children: ReactNode
}

export const Background: FC<BackgroundProps> = ({ children }) => {
  return (
    <div className="bg-white">
      {children}
    </div>
  )
}
