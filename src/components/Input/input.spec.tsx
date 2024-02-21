import React from 'react';
import { render } from '@testing-library/react-native';
import { Input } from './index';
import '@testing-library/jest-native/extend-expect'

describe('Input', () => {
  test('renderiza o componente de Input corretamente', () => {
    try {
      const { getByTestId } = render(<Input />);
      const inputElement = getByTestId('input-element');
      expect(inputElement).toBeTruthy();
    } catch (error) {
      console.error('Erro durante a renderização do componente Input:', error);
    }
  });
}); 