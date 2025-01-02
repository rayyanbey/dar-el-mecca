import Message from "../_icons/Message";
import Phone from "../_icons/Phone";
import Whatsapp from "../_icons/Whatsapp";
export function TopBar() {
    return (
        <div className="bg-secondary text-white flex">
          <div className="mx-auto flex gap-12">
            <a href="tel:1-919-426-2061" target="_blank" className="flex items-center gap-3 py-2">
                <Phone />
                <p className="font-[600] text-[14px]">Call: 1-919-426-2061</p>
            </a>
            <a href="tel:1-919-410-9557" target="_blank" className="flex items-center gap-3 py-2">
                <Phone />
                <p className="font-[600] text-[14px]">Call: 1-919-410-9557</p>
            </a>
            <a href="https://wa.me/19843893054" target="_blank" className="flex items-center gap-3 py-2">
                <Whatsapp />
                <p className="font-[600] text-[14px]">Whatsapp: 1-984-389-3054</p>
            </a>
            <a href="mailto:info@darelmecca.com" target="_blank" className="flex items-center gap-3 py-2">
                <Message/>
                <p className="font-[600] text-[14px]">Email: info@darelmecca.com</p>
            </a>
            </div>
        </div>
    );
}
