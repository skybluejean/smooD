import { createContext } from 'react';
//src 안으로 images 폴더 넣었습니다.
import cafeImage from '../images/cafe.png';
import convenienceStoreImage from '../images/convenience-store.png';
import gasStationImage from '../images/gas_station.png';
import restroomImage from '../images/restroom.png';

// 최초 컨텍스트에 더미 데이터 넣음
export interface Button {
  value: string;
  image: string;
  name: string;
}
// ! 기본 버튼 데이터(3개)
// 디폴트 데이터
const DefaultBtnContextData: Button[] = [
  {
    value: '편의점',
    image: convenienceStoreImage,
    name: '편의점',
  },
  {
    value: '화장실',
    image: restroomImage,
    name: '화장실',
  },
  {
    value: '주유소',
    image: gasStationImage,
    name: '주유소',
  },
];
  // 컨텍스트 API 생성
const DefaultBtnData = createContext<Button[]>(DefaultBtnContextData);

// ! 모든 버튼 데이터
// 컨텍스트에 사용 할 데이터
const BtnContextData: Button[] = [
  {
    value: '편의점',
    image: convenienceStoreImage,
    name: '편의점',
  },
  {
    value: '카페',
    image: cafeImage,
    name: '카페',
  },
  {
    value: '주유소',
    image: gasStationImage,
    name: '주유소',
  },
  {
    value: '화장실',
    image: restroomImage,
    name: '화장실',
  },
];
// 컨텍스트 API 생성
const BtnContext = createContext<Button[]>(BtnContextData);

export { DefaultBtnData, BtnContext, BtnContextData, DefaultBtnContextData };

