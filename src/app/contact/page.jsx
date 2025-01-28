import React from 'react'
import HeroContactFAQAboutForm from '../_components/HeroContactFAQAboutForm'
import ContactDetails from './ContactDetails'
import LocationDetail from './LocationDetail'
import SendMessage from './SendMessage'

export const metadata = {
  title: "Contact Us"
};

function page() {
  return (
    <section>
      <HeroContactFAQAboutForm title={"Contact Us"} description={"We’re here to assist you with every step of your spiritual journey. Reach out to us for inquiries, bookings, or personalized assistance. Our dedicated team is ready to provide you with the best Hajj and Umrah services."}/>
      <ContactDetails/>
      <LocationDetail/>
      <SendMessage/>
    </section>
  )
}

export default page