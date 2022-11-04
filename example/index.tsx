import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { ProductCard, ProductImg, ProductTitle, ProductButtons } from '../.';

const product = {

  id: '1',
  title: 'Coffe Mug - Card',
  // img: './coffe-mug.png

};

const App = () => {
  return (
    <>

      <ProductCard 
        product={ product } 
        initialValue={{ 

          count: 4, 
          // maxCount: 10

        }}
      >
        {

          ({ reset, increaseBy, isMaxCountReached, count, maxCount }) => (

            <>

              <ProductImg />
              <ProductTitle />
              <ProductButtons />

            </>

          )

        }
      </ProductCard>

    </>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
