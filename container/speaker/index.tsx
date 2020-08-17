import React from 'react'
import ProfileCard from '../../components/profileCard'

const Speaker = () => {
  return (
    <div>
      <div>
        <h2>SPEAKER</h2>
      </div>
      <div>
        <p>{"5 days, 100+ sessions, workshops, & Discussions"}</p>
        <p>{"Whether you’re interested in learning a new technology or advancing your skills in a familiar stack, there’s something for everyone at the Modern Web Summit."}</p>
      </div>
      <div>
        <div>
          {[1, 2, 3, 4, 5, 6, 7, 8, 9].map(item => {
            return (
              <ProfileCard
                imageUrl="https://st2.depositphotos.com/1006318/5909/v/450/depositphotos_59094701-stock-illustration-businessman-profile-icon.jpg"
                name="Soham Steward"
                designation="Senior Developer Advocate"
                companyName="Facebook"
                location="San Francisco, California"
              />
            )
          })}
        </div>
        <div>
          {[1, 2, 3, 4, 5, 6, 7, 8, 9].map(item => {
            return (
              <ProfileCard
                imageUrl="https://st2.depositphotos.com/1006318/5909/v/450/depositphotos_59094701-stock-illustration-businessman-profile-icon.jpg"
                name="Soham Steward"
                designation="Senior Developer Advocate"
                companyName="Facebook"
                location="San Francisco, California"
              />
            )
          })}
        </div>
        <div>
          {[1, 2, 3, 4, 5, 6, 7, 8, 9].map(item => {
            return (
              <ProfileCard
                imageUrl="https://st2.depositphotos.com/1006318/5909/v/450/depositphotos_59094701-stock-illustration-businessman-profile-icon.jpg"
                name="Soham Steward"
                designation="Senior Developer Advocate"
                companyName="Facebook"
                location="San Francisco, California"
              />
            )
          })}
        </div>
        <div>
          {[1, 2, 3, 4, 5, 6, 7, 8, 9].map(item => {
            return (
              <ProfileCard
                imageUrl="https://st2.depositphotos.com/1006318/5909/v/450/depositphotos_59094701-stock-illustration-businessman-profile-icon.jpg"
                name="Soham Steward"
                designation="Senior Developer Advocate"
                companyName="Facebook"
                location="San Francisco, California"
              />
            )
          })}
        </div>
      </div>
      <div>
        <p>Interested in speaking?</p>
        <button type="button" >Submit your talk here</button>
      </div>
    </div>)
}
export default Speaker