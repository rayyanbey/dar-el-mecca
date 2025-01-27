import HeroOfGuides from "../_components/HeroOfGuides";
import ImpNote from "./ImpNote";
import Info from "./Info";
import RamadanInfo from "./RamadanInfo";
import Virtues from "./Virtues";

function page() {
    return (
        <section>
            <HeroOfGuides
                image={'./images/umrah-guide/umrah-guide-bg.jpeg'}
                preTitle={'Umrah '}
                middleTitle={'Guide'}
                postTitle={''}
                miniDescription={'Umrah is an act of worshipping Allah by entering the state of Ihram, circumambulating the House, running between Safa and Marwa, and having the head shaved or trimmed.'}
            />
            <Info />
            <ImpNote />
            <Virtues/>
            <RamadanInfo />
        </section>
    );
}

export default page;
