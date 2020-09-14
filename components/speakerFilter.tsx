import React from 'react'

const SpeakerFilter: React.FC<SpeakerFilterProps> = (props: SpeakerFilterProps) => {
  const { filterList, onClick } = props
  return (
    <div >
      {filterList.map((item: FilterListProps, index) => {
        const { image, title, selected, id } = item
        return (
          <FilterItem
            key={index}
            image={image}
            title={title}
            selected={selected}
            onClick={() => onClick(id)}
          />
        )
      })}
    </div>
  )
}

const FilterItem: React.FC<FilterItemProps> = (props: FilterItemProps) => {
  const { image, title, selected, onClick } = props
  return (
    <div
      className={`ml-5 my-5 flex py-3 pr-2 rounded cursor-pointer ${selected ? 'bg-black' : 'bg-gray-600 hover:bg-gray-700'}`}
      onClick={onClick}
    >
      <img src={image} className="pl-2  " />
      <p className="pl-3 pr-2 text-xl text-white uppercase font-extrabold leading-5 ">{title}</p>
    </div>
  )
}

type FilterListProps = {
  image: string,
  title: string,
  selected: boolean,
  id: number
}

type SpeakerFilterProps = {
  filterList: Array<FilterListProps>,
  onClick: any
}

type FilterItemProps = {
  image: string,
  title: string,
  selected: boolean,
  onClick: any
}

export default SpeakerFilter
