# AO-Product-Card

Este es un paquete de pruebas de despliegue en NPM

### Adrian Ortega

## Ejemplo

```
    import {
        ProductCard,
        ProductImg,
        ProductTitle,
        ProductButtons
    } from 'ao-product-card';
```

```
    <ProductCard 
        product={ product } 
        initialValue={{ 
          
          count: 4,
          // maxCount: 10,
          
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
```