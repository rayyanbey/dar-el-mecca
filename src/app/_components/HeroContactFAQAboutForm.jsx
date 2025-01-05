function HeroContactFAQAboutForm({title,description}) {
    return (
        <div className="relative w-full h-[100vh] lg:h-[90vh]">
            <img src="../images/CAFF.png" alt="" className="w-full h-full object-cover" />
            <div className="absolute inset-0 flex flex-col w-full items-center justify-center gap-6">
                <h2 className="w-full text-center text-[52px] font-[700] cinzel-title leading-snug">
                    {title}
                </h2>
                <p className="w-[75%] text-[18px] font-[300] text-center">
                    {description}
                </p>
            </div>
        </div>
    )
}

export default HeroContactFAQAboutForm
