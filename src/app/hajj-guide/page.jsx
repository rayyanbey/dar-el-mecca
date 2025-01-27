import React from 'react'
import HeroOfGuides from '../_components/HeroOfGuides'
import HajjMethods from './HajjMethods'
import HajjSteps from './HajjSteps'
import Message from './Message'

function page() {
    return (
        <section>
            <HeroOfGuides
                image={'./images/hajj-method-1.jpeg'}
                preTitle={''}
                middleTitle={'Hajj'}
                postTitle={'Guide'}
                miniDescription={'The Hajj is a yearly Islamic pilgrimage to Mecca in Saudi Arabia that is a requirement for Muslims who can afford and are physically able to make the journey. It is one of the Five Pillars of Islam, along with prayer, almsgiving, fasting, and the profession of faith.'}
            />
            <HajjMethods/>
            <HajjSteps/>
            <Message/>

        </section>
    )
}

export default page