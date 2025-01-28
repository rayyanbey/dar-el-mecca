import React from 'react'
import Card from './Card';

function Virtues() {
    return (
        <section className='p-6 lg:p-16 flex flex-col gap-8 lg:gap-20'>
            <div className='flex flex-col  w-full  gap-4'>
                <h4 className='cinzel-title text-[24px] font-[700]'>Virtues of Umrah</h4>
                <div className='text-[18px] tracking-tight font-light flex flex-col gap-4 '>
                    <strong className='font-[500] text-[18px]'>Umrah is a set of rituals of worshipping Allah by entering into the state of Ihram, performing circumambulation of the Kaaba, performing Sa’i between Safa and Marwa, and having one's hair shaven or trimmed.</strong>

                    <strong className='font-[500] text-[18px]'>It has great stature and virtues, including</strong>

                    <div>
                        <p>Allah mentioned it along with Hajj and commanded that it be completed and performed in the most perfect manner, for the sake of Allah’s pleasure. The Almighty said: {"{"}and perform properly the Hajj and Umrah for Allah{"}"}.</p>
                        <p>It wipes out sins and reduces poverty and need: the Prophet (blessings and peace be upon him) said: "Perform Hajj and Umrah consecutively; for they remove poverty and sin as the bellows remove impurity from iron".</p>
                        <p>Umrah expiates sins: the Prophet (blessings and peace be upon him) said: "From one Umrah to the next is an expiation for the sins committed between them".
                            Every step in circumambulation is an increase in good deeds and forgiveness of sins: the Prophet (blessings and peace be upon him) said about the virtues of circumambulating the honored House: "Whoever circumambulates the House does not raise a foot or put down the other, except that Allah will write down for him a good deed, erase for him a sin and raise his rank".</p>
                        <p>Sa’i between Safa and Marwa is a reason why Allah will be thankful and rewarding to His servant: after mentioning Sa’i between Safa and Marwa, Allah informed us that He fully knows His servant’s work and that He will reward the servant for the deed and good work. He said: "And who volunteers good, Allah is All-grateful, All-knowing"</p>
                    </div>
                </div>
            </div>


            <Card heading={"Makkah the Sanctuary of Allah"}
                description={["Allah singled out Makkah and honored it over all parts of the world. One of the greatest signs is that it is His sanctuary."]}
                pic={'./images/umrah-guide/pic4.jpeg'}
            />
            <div className='flex flex-col  w-full  gap-4 '>

                <h4 className='cinzel-title text-[24px] font-[700]'>What is the meaning of 'Haram' (Sanctuary)?</h4>
                <div className='text-[18px] tracking-tight font-light flex flex-col gap-4 '>
                    <p>
                        It is a place in which certain things, allowed elsewhere, are prohibited out of veneration and reverence for the One Who prohibited it. Allah the Exalted said: {"{"}and who observes the sanctity of the sites ordained by Allah, it will be good for him in the sight of his Lord{"}"}.
                    </p>
                    <p>
                        Allah has chosen this land and made it sacred, forbidding in it what He permitted in other places, and singling it out with virtues and merits that are not found in any other place. Its sanctity and stature date back to the very first beginning of the entire universe.
                    </p>
                    <p>
                        Allah has made this land into a Sanctity and assigned to it a very special rank on the day this universe was created. It will remain so until the end of time. The Prophet (blessings and peace be upon him) said: "Allah has made this town a sanctuary from the day He created the heavens and the earth. So, it is a sanctuary by Allah's decree till the Day of Resurrection".
                    </p>
                </div>
            </div>
            <div className='flex flex-col  w-full  gap-4'>
                <h4 className='cinzel-title text-[24px] font-[700]'>What does Sanctity mean to me?</h4>
                <div className='text-[18px] tracking-tight font-light flex flex-col gap-4 '>
                    <p>
                        You are now in a place that Allah singled out, honored, and sacralized before He even created humans. He ordered Abrahim, peace be upon him, to raise the foundations and build the House (Kaaba) before even a single soul lived in Makkah, and chose it to be the qiblah and guidance for the whole world. Allah the Exalted said: {"{"}The first House (of Prayer) established for mankind is the one at Bakkah (Makkah): a blessed place, guidance for all worlds (of people and jinn){"}"}.
                        You are in a place where the reward for a good deed is multiplied, and where sin is not like a sin in any other place.
                        Allah commanded His noblest humans, Abrahim and Ismail, peace be upon them, and then Muhammad (blessings and peace be upon him), to purify, build and take care of the Kaaba.</p>
                </div>
            </div>

        </section>
    )
}

export default Virtues;