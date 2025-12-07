import Nav from '@/components/header/Nav'
import Logo from '@/components/header/Logo'

const Header = () => {
    return (
        <header className="w-full z-50 py-5 px-4 xl:px-0 border-b border-muted">
            <div className="max-w-7xl mx-auto">
                <div className="flex items-center justify-between">
                    <Logo />
                    <Nav />
                </div>
            </div>
        </header>
    )
}

export default Header;
