import React from 'react'

const LabelText = (props: LabelTextProps) => {
  const { title, label } = props
  return (
    <>
      <p>{title}</p>
      <h4>{label}</h4>
    </>
  )
}

export default LabelText

export type LabelTextProps = {
  title: string,
  label: string
}
