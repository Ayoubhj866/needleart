import Header from '@/components/header/Header';
import Hero from '@/components/hero/hero';
import About from '@/components/about/about';
import Services from '@/components/services/services';
import Stats from '@/components/stats-section/stats';

const App = () => {
    return <div className="min-h-screen relative">
        <Header />
        <Hero />
        <About />
        <Services />
        <Stats />
        <div className='h-[200px]'>

        </div>
    </div>
}

export default App;
