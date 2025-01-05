import Message from "../_icons/Message";
import Phone from "../_icons/Phone";
import Whatsapp from "../_icons/Whatsapp";
export function TopBar() {
    return (
        <div className="bg-secondary text-[#FFFFFFCC] font-[600] text-[8px] lg:text-[14px] flex">
          <div className="mx-auto flex items-center justify-center gap-2 lg:gap-12 flex-wrap">
            <a href="tel:1-919-426-2061" target="_blank" className="flex items-center gap-1 lg:gap-3 py-2">
                <Phone />
                Call: 1-919-426-2061
            </a>
            <a href="tel:1-919-410-9557" target="_blank" className="flex items-center gap-1 lg:gap-3 py-2">
                <Phone />
                Call: 1-919-410-9557
            </a>
            <a href="https://wa.me/19843893054" target="_blank" className="flex items-center gap-1 lg:gap-3 py-2">
                <Whatsapp />
                Whatsapp: 1-984-389-3054
            </a>
            <a href="mailto:info@darelmecca.com" target="_blank" className="flex items-center gap-1 lg:gap-3 py-2">
                <Message/>
                Email: info@darelmecca.com
            </a>
            </div>
        </div>
    );
}
