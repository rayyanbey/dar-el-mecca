import React from 'react'
import HeroContactFAQAboutForm from '../_components/HeroContactFAQAboutForm'
import ContactDetails from './ContactDetails'
import LocationDetail from './LocationDetail'
import SendMessage from './SendMessage'

function page() {
  return (
    <section>
      <HeroContactFAQAboutForm title={"Contact Us"} description={"Lorem ipsum dolor sit amet. Et exercitationem veniam hic odio magni et earum officiis hic nostrum quam est fuga repudiandae. Est harum consequatur in reiciendis fugiat eum adipisci temporibus ab magni saepe."}/>
      <ContactDetails/>
      <LocationDetail/>
      <SendMessage/>
    </section>
  )
}

export default page