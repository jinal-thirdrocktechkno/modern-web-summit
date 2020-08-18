import React from 'react'

const Title = (props: TitleProps) => {
  const { title } = props
  return (
    <div className="relative m-10 ">
      <div className="div-border" />
      <p className="title">{title}</p>
    </div>
  )
}
export default Title

export type TitleProps = {
  title: string
}