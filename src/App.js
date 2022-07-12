import './App.css';
import './style.css';
import Navbar from './components/Navbar';
import Card from './components/Card';
import Data from './data';
import Footer from './components/Footer';
function App() {
  const cards = Data.map((item) => {
    return <Card key={item.key} {...item} />;
  });

  return (
    <main>
      <Navbar />
        <section className='card-list'>{cards}</section>
      <Footer />
    </main>
  );
}

export default App;
