// import Breadcrumb from './Breadcrumb';
import { useState } from 'react';
import Header from './Header';
import Item from './Item';
import ProductPage from './ProductPage';
import './App.css';

function App() {
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleItemClick = (product) => {
    console.log(product)
    setSelectedProduct(product);
  };

  const images = [];

  for (let i = 1; i <= 9; i++) {
    images.push(require(`./images/${i}.jpg`));
  }

  const shuffledImages = images.sort(() => Math.random() - 0.5);

  const playerMap = {
    1: 'Jimmy Butler',
    2: 'Steph Curry',
    3: 'Kevin Durant',
    4: 'Giannis Antetokounmpo',
    5: 'Lebron James',
    6: 'Lonzo Ball',
    7: 'Luka Dončić',
    8: 'Chris Paul',
    9: 'Jayson Tatum'
  }

  return (
    <div className="container mx-auto max-w-5xl">
      <Header />
      {selectedProduct ? 
      <ProductPage product={selectedProduct} exitButton={() => setSelectedProduct(null)} />
      :
      <div class="grid md:grid-cols-3 gap-4 grid-cols-1 p-4">
        {shuffledImages.map((image, index) => {
          const title = playerMap[image.split('/').pop().split('.').shift().replace(/-/g, ' ')];
          const product = {
            title,
            image
          };
          return (
            <Item 
              key={index}
              image={image}
              title={title}
              onClick={() => handleItemClick(product)}
              />
        )})}
      </div>}
    </div>
  );
}

export default App;
