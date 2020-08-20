import React from 'react'

const NavMenu = () => {

  return (
    <div className="nav-menu">
      <img src="/images/close.svg" className="p-5" />
      <div className="flex flex-row justify-evenly mt-5">
        <div className="flex flex-col">
          <a>Terms of Service</a>
          <a>Privacy Policy</a>
          <a>Selection Committee</a>
          <a>Workshops</a>
          <a>Jobs</a>
        </div>
        <div className="flex flex-col">
          <button className="border border-2 p-5 m-1 flex justify-center uppercase text-black hover:bg-black focus:outline-none hover:text-white" type="button" >Home </button>
          <button className="border border-2 p-5 m-1 flex justify-center uppercase text-black hover:bg-black focus:outline-none hover:text-white" type="button" >speakers </button>
          <button className="border border-2 p-5 m-1 flex justify-center uppercase text-black hover:bg-black focus:outline-none hover:text-white" type="button" >sponsors </button>
          <button className="border border-2 p-5 m-1 flex justify-center uppercase text-black hover:bg-black focus:outline-none hover:text-white" type="button" >curators </button>
          <button className="border border-2 p-5 m-1 flex justify-center uppercase text-black hover:bg-black focus:outline-none hover:text-white" type="button" >code of conduct </button>
          <button className="border border-2 p-5 m-1 flex justify-center uppercase text-black hover:bg-black focus:outline-none hover:text-white" type="button" >schedule - coming soon </button>
        </div>
        <div className="flex flex-col">
          <a>Volunteer</a>
          <a>Request for Sponsorship</a>
          <a>Apply for Scholarship</a>
          <a>Convince your boss</a>
          <a>Submit a talk proposal</a>
        </div>
      </div>
    </div>
  )

}

export default NavMenu