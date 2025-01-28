import HeroOfGuides from "../_components/HeroOfGuides";
import EssentialsList from "./EssentialsList";

export default function WhyChooseUs() {
    return (
        <>
            <HeroOfGuides
                image={'./images/umrah-guide/pic4.jpeg'}
                 
                preTitle={'Hajj and Umrah '}
                middleTitle={'Essentials'}
                postTitle={''}
                miniDescription={'The Hajj is a yearly Islamic pilgrimage to Mecca in Saudi Arabia that is a requirement for Muslims who can afford and are physically able to make the journey. It is one of the Five Pillars of Islam, along with prayer, almsgiving, fasting, and the profession of faith.'}
            />
            <EssentialsList />
        </>
    );
}
