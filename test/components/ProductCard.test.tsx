import React from "react";
import render from "react-test-renderer";
import { ProductCard } from '../../src/components';
import { product1 } from '../data/product';


const { act } = render;


describe( 'Pruebas del componente <ProductCard />', () => {

    test( 'Debe de mostrar el componente correctamente.', () => {

        const wrapper = render.create(

            <ProductCard product={ product1 } >
                {
                    () => (

                        <h1>Product Card</h1>

                    )
                }
            </ProductCard>

        );

        // console.log( wrapper.toJSON() );

        expect( wrapper.toJSON() ).toMatchSnapshot();

    });

    test( 'Debe de mostrar el contador con el valor 0 y el boton para incrementar en 1', () => {

        const wrapper = render.create(

            <ProductCard product={ product1 } >
                {
                    ({ count, increaseBy }) => (
                        <>

                            <h1>Product Card</h1>
                            <span>{ count }</span>
                            <button onClick={ () => increaseBy( +1 ) } >+ 1</button>

                        </>
                    )
                }
            </ProductCard>

        );

        // console.log( wrapper.toJSON() );

        expect( wrapper.toJSON() ).toMatchSnapshot();

    });

    test( 'Debe de incrementar el contador en 1.', () => {

        const wrapper = render.create(

            <ProductCard product={ product1 } >
                {
                    ({ count, increaseBy }) => (
                        <>

                            <h1>Product Card</h1>
                            <span>{ count }</span>
                            <button onClick={ () => increaseBy( +1 ) } >+ 1</button>

                        </>
                    )
                }
            </ProductCard>

        );

        let tree = wrapper.toJSON();

        act( () => {

            ( tree as any ).children[ 2 ].props.onClick();

        });

        tree = wrapper.toJSON();

        expect( ( tree as any ).children[ 1 ].children[ 0 ] ).toBe( '1' );

    });

});