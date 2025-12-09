import Header from '@/components/header/Header';
import Hero from '@/components/hero/hero';
import About from '@/components/about/about';
import Services from '@/components/services/services';

const App = () => {
    return <div className="min-h-screen relative">
        <Header />
        <Hero />
        <About />
        <Services />
    </div>
}

export default App;
