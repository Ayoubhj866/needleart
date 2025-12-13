import Header from '@/components/header/Header';
import Hero from '@/components/hero/hero';
import About from '@/components/about/about';
import Services from '@/components/services/services';
import Stats from '@/components/stats-section/stats';
import Workflow from '@/components/process-workflow/workflow';

const App = () => {
    return <div className="min-h-screen relative">
        <Header />
        <Hero />
        <About />
        <Services />
        <Stats />
        <Workflow />
        <div className='h-[200px]'>

        </div>
    </div>
}

export default App;
