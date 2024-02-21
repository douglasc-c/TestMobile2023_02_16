/**
 * @type {value: number} Tamanho da fonte.
 * @param {function} RFIphone Se for Iphone 14 Pro, corrige o tamanho da fonte, caso contrario, retorna RFValue padrão.
 *
 **/

import {Dimensions} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';

const height = Dimensions.get('window').height;

export function RFIphone(value: number) {
  const iphoneFourteenHeight = 852;

  if (height === iphoneFourteenHeight) {
    return RFValue(value, 730);
  } else {
    return RFValue(value);
  }
}
