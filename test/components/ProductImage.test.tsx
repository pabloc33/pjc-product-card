import React from 'react';
import render from 'react-test-renderer';
import ProductCard, { ProductImage } from '../../src/components';
import { product2 } from '../data/products';

describe('ProductImage', () => {
  test('debe mostrar el componente correctamente con la imagen personalizada ', () => {
    const wrapper = render.create(
      <ProductImage img="https://png.pngtree.com/element_our/20200702/ourmid/pngtree-vector-pattern-material-click-url-image_2281151.jpg" />
    );

    expect(wrapper.toJSON()).toMatchSnapshot();
  });

  test('debe mostrar el componente con la imagen del producto ', () => {
    const wrapper = render.create(
      <ProductCard product={product2}>{() => <ProductImage />}</ProductCard>
    );

    expect(wrapper.toJSON()).toMatchSnapshot();
  });
});
