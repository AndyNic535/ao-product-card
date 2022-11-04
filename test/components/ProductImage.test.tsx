import React from "react";
import render from "react-test-renderer";
import { ProductImg, ProductCard } from '../../src/components';
import { product2 } from '../data/product';


describe( 'Pruebas del componente <ProductImg />', () => {

    test( 'Debe de mostrar el componente correctamente con la imagen personalizada.', () => {

        const wrapper = render.create(

            <ProductImg img="https://pruebaTest.jpg" />

        );

        // console.log( wrapper.toJSON() );

        expect( wrapper.toJSON() ).toMatchSnapshot();

    });

    test( 'Debe de mostrar el componente con la imagen del producto.', () => {

        const wrapper = render.create(

            <ProductCard product={ product2 }>
                {
                    () => ( 

                        <ProductImg /> 
                        
                    )
                }
            </ProductCard>

        );

        // console.log( wrapper.toJSON() );

        expect( wrapper.toJSON() ).toMatchSnapshot();

    });

});