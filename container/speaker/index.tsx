import React, { useState, useEffect } from 'react'
import ProfileCard from '../../components/profileCard'
import SpeakerFilter from '../../components/speakerFilter'
import { SpeakerFilters } from '../../utility/constants'
import speakerList from '../../utility/speakerList.json'
import { useMediaQuery } from 'react-responsive'
import { shuffle } from 'lodash'

const Speaker = (props: any) => {
  const { isVisible, selectedSpeaker } = props
  const [className, setClass] = useState('')
  const [filters, setFilters] = useState(SpeakerFilters)

  let finalSplitedArraySmallScreen = [];
  let finalSplitedArraySmallScreen1 = [];
  const isSmallScreen = useMediaQuery({ query: '(max-width: 1024px)' });
  console.log(isSmallScreen)

  useEffect(() => {
    if (isVisible) {
      setClass('animated fadeInUp opacity-1')
    }
  })

  useEffect(() => {
    if (selectedSpeaker && selectedSpeaker !== '') {
      let id = filters.filter(s => s.title === selectedSpeaker)[0].id
      let finalFilter = formatFilters(filters, id, true)
      setFilters(finalFilter.sort((a, b) => (a.id > b.id) ? 1 : -1))

    }
  }, [selectedSpeaker])

  const selectedFilters = filters.filter(i => i.selected).map(i => i.title)
  let speakerFilteredList = shuffle(speakerList).filter(({ track }) => {
    let selected = false;
    track.split(',').forEach(t => {
      if (selectedFilters.includes(t)) {
        selected = true
      }
    })
    return selected
  })

  if (selectedFilters.includes('All Tracks'))
    speakerFilteredList = shuffle(speakerList)

  const finalSplitedArray = [[], [], [], []]
  // shuffle(speakerFilteredList).forEach((speaker, i) => {
  speakerFilteredList.forEach((speaker, i) => {
    finalSplitedArray[i % 4].push(speaker)
  });

  const formatFilters = (filters: { id: number; title: string; image: string; selected: boolean }[], id: number, fromCurator: boolean = false) => {
    const newFilter = filters.slice(0)
    const allTrackId = filters.find(item => item.title === 'All Tracks').id
    let finalFilter = []
    if (id === allTrackId) {
      finalFilter = newFilter.map(item => {
        if (item.id !== allTrackId) { item.selected = false }
        else { item.selected = true }
        return item
      })
    }
    else {
      let selectedCount = 0
      finalFilter = newFilter.map(item => {
        if (item.id === id) { item.selected = !item.selected }
        else {
          if (fromCurator) {
            item.selected = false
          }
        }
        if (item.id === allTrackId) { item.selected = false }
        item.selected && selectedCount++
        return item
      })
      if (!selectedCount) { finalFilter[0].selected = true }
    }
    return finalFilter
  }

  if (isSmallScreen) {
    finalSplitedArraySmallScreen = [...finalSplitedArray[0], ...finalSplitedArray[1]];
    finalSplitedArraySmallScreen1 = [...finalSplitedArray[2], ...finalSplitedArray[3]];
  } else {
    finalSplitedArraySmallScreen = finalSplitedArray[0];
    finalSplitedArraySmallScreen1 = finalSplitedArray[1];
  }

  const handleFilterClick = (id: number) => {
    let finalFilter = formatFilters(filters, id)
    setFilters(finalFilter.sort((a, b) => (a.id > b.id) ? 1 : -1))

  }

  return (
    <div className={`bg-white shadow-xs opacity-0 ${className}`}>
      <div className="flex sm:flex-wrap lg:flex-no-wrap">
        <div className="bg-black lg:w-23 sm:w-full sm:flex-none lg:flex-23 h-32 flex items-end self-start justify-center">
          <h4 className="text-5xl text-white leading-7 uppercase">SPEAKERS</h4>
        </div>
        <div className="flex flex-col p-6 sm:text-center lg:text-left lg:pt-24">
          <h5 className="text-2xl font-extrabold uppercase" >{"5 days, 100+ sessions, workshops, & Discussions"}</h5>
          <p className="text-gray-300 font-medium text-1-2 lg:w-5/6 sm:w-full ">{"Whether you’re interested in learning a new technology or advancing your skills in a familiar stack, there’s something for everyone at the Modern Web Summit."}</p>
        </div>
      </div>

      <div className="relative flex sm:flex-wrap lg:flex-no-wrap lg:pl-40 md:p-10 sm:p-0">
        <div className="sticky top-56 sm:block lg:hidden w-full z-50 bg-white pl-4 py-1">
          <SpeakerFilter
            onClick={handleFilterClick}
            filterList={filters}
          />
        </div>
        {/* <div className="lg:w-4/5 flex flex-wrap px-3">
          {speakerFilteredList.map((item, index) => {
            const { image, name, title, company, location } = item;
            return (
              <div key={`0-${index}`} className={`lg:w-1/4 sm:w-1/2 p-1 card-${index}`}>
                <ProfileCard
                  isForDescription={false}
                  imageClass=""
                  isLast={false}
                  key={`0-${index}`}
                  imageUrl={image + '.jpg'}
                  name={name}
                  designation={title}
                  companyName={company}
                  locationFull={location}
                />
              </div>
            )
          })}
        </div> */}

        <div className="lg:mr-2 sm:mr-0 lg:w-1/5 sm:w-1/2 sm:pl-5 lg:pl-0 sm:pr-2 lg:pr-0">
          {finalSplitedArraySmallScreen.map((item, index) => {
            const { image, name, title, company, location } = item;
            return (
              <React.Fragment key={`0-${index}`}>
                <ProfileCard
                  isForDescription={false}
                  imageClass=""
                  isLast={false}
                  key={`0-${index}`}
                  imageUrl={image + '.jpg'}
                  name={name}
                  designation={title}
                  companyName={company}
                  locationFull={location}
                />
              </React.Fragment>
            )
          })}
        </div>
        <div className="lg:mr-2 sm:mr-0 lg:w-1/5 sm:w-1/2 mt-16 sm:pr-5 lg:pr-0 sm:pl-2 lg:pl-0">
          {finalSplitedArraySmallScreen1.map((item, index) => {
            const { image, name, title, company, location } = item;
            return (
              <React.Fragment key={`1-${index}`}>
                <ProfileCard
                  isForDescription={false}
                  imageClass=""
                  isLast={false}
                  key={`1-${index}`}
                  imageUrl={image + '.jpg'}
                  name={name}
                  designation={title}
                  companyName={company}
                  locationFull={location}
                /></React.Fragment>
            )
          })}
        </div>
        <div className="sm:hidden lg:block lg:mr-2 sm:mr-0 lg:w-1/5 sm:w-1/2 sm:mt-0 lg:mt-32 sm:pl-5 lg:pl-0 sm:pr-2 lg:pr-0">
          {finalSplitedArray[2].map((item, index) => {
            const { image, name, title, company, location } = item;
            return (
              <React.Fragment key={`2-${index}`}>
                <ProfileCard
                  isForDescription={false}
                  imageClass=""
                  isLast={false}
                  key={`2-${index}`}
                  imageUrl={image + '.jpg'}
                  name={name}
                  designation={title}
                  companyName={company}
                  locationFull={location}
                /></React.Fragment>
            )
          })}
        </div>
        <div className="sm:hidden lg:block lg:mr-2 sm:mr-0 lg:w-1/5 sm:w-1/2 lg:mt-48 sm:pr-5 lg:pr-0 sm:pl-2 lg:pl-0">
          {finalSplitedArray[3].map((item, index) => {
            const { image, name, title, company, location } = item;
            return (
              <React.Fragment key={`3-${index}`}>
                <ProfileCard
                  isForDescription={false}
                  imageClass=""
                  isLast={false}
                  key={`3-${index}`}
                  imageUrl={image + '.jpg'}
                  name={name}
                  designation={title}
                  companyName={company}
                  locationFull={location}
                /></React.Fragment>
            )
          })}
        </div>
        <div className="flex-col mb-2 sm:w-full lg:w-1/5 lg:mt-32 sm:hidden lg:flex">
          <div className="sticky top-100">
            <p className="uppercase text-1-2 text-center font-extrabold sm:hidden lg:block">refine by track</p>
            <SpeakerFilter
              onClick={handleFilterClick}
              filterList={filters}
            />
            <div className="text-center">
              <p className="ml-5 uppercase text-xs text-gray-400 font-extrabold">Interested in speaking?</p>
              <button type="button" className="animate-btn ml-5 mt-1">Submit your talk</button>
            </div>
          </div>
        </div>
        <p className="uppercase lg:absolute lg:bottom-0 lg:mb-5 sm:mt-5 lg:mt-0 sm:mx-auto text-xl text-gray-400 font-semibold">more speakers to be announced soon!</p>
        <div className="sm:block lg:hidden p-4 mb-16 w-full">
          {/* <button type="button" className="w-full uppercase border-purple-100 rounded-md text-purple-100 font-black border-2 p-4 text-lg mt-1 focus:outline-none">see all speakers</button> */}
          <p className="text-center uppercase text-xs text-gray-400 font-extrabold">Interested in speaking?</p>
          <button type="button" className="animate-btn w-full mt-5">Submit your talk</button>
        </div>
      </div>
    </div >)
}
export default Speaker
