// import Breadcrumb from './Breadcrumb';
import Header from './Header';
import Item from './Item';
import './App.css';

function App() {
  const images = [];

  for (let i = 1; i <= 9; i++) {
    images.push(require(`./images/${i}.jpg`));
  }
  const shuffledImages = images.sort(() => Math.random() - 0.5);

  return (
    <div className="container mx-auto max-w-5xl">
      <Header />
      {/* <Breadcrumb />*/}
      <div class="grid md:grid-cols-3 gap-4 grid-cols-1 p-4">
        {shuffledImages.map((image, index) => (
          <Item key={index} image={image} />
        ))}
      </div>
    </div>
  );
}

export default App;
