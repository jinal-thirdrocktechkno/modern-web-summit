import React from 'react'

const Title = (props: TitleProps) => {
  const { title, parentClass } = props
  return (
    <div className={`relative ${parentClass}`}>
      <div className="div-border" />
      <p className="title uppercase">{title}</p>
    </div>
  )
}
export default Title

export type TitleProps = {
  title: string,
  parentClass: string
}
