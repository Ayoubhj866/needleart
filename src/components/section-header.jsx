const SectionHeader = ({ title, subtitle, children }) => {
    return (
        <div className="w-full flex gap-20 items-start md:items-center max-md:flex-col max-md:gap-5">
            <div className="inline-flex flex-col items-start">
                <h6 className="text-orange-500 uppercase font-light leading-[150%] text-sm">{subtitle}</h6>
                <h2 className="text-white font-normal text-2xl md:text-3xl lg:text-4xl">
                    {title}
                </h2>
            </div>
            {/* divider hidden on mobile screen */}
            <div className="inline-block min-h-full  w-px self-stretch bg-neutral-100 dark:bg-white/10"></div>

            <div className="flex-1">
                <p className="text-white font-light text-base">
                    {children}
                </p>
            </div>

        </div>
    )
}

export default SectionHeader;
