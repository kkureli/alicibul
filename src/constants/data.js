import React from 'react';
import EmailIcon from '../../assets/icons/RegisterMethodIcons/EmailIcon';
import GoogleIcon from '../../assets/icons/RegisterMethodIcons/GoogleIcon';
import PhoneIcon from '../../assets/icons/RegisterMethodIcons/PhoneIcon';
import AppleIcon from '../../assets/icons/RegisterMethodIcons/AppleIcon';
import FacebookIcon from '../../assets/icons/RegisterMethodIcons/FacebookIcon';
import AllIcon from '../../assets/icons/CategoriesIcons/AllIcon';
import CarCategoryIcon from '../../assets/icons/CategoriesIcons/CarCategoryIcon';
import SmallCarIcon from '../../assets/icons/CategoriesIcons/SmallCarIcon';
import BicycleIcon from '../../assets/icons/CategoriesIcons/BicycleIcon';
import VanIcon from '../../assets/icons/CategoriesIcons/VanIcon';
import TruckIcon from '../../assets/icons/CategoriesIcons/TruckIcon';
import Truck2Icon from '../../assets/icons/CategoriesIcons/Truck2Icon';
import theme from './theme/theme';

export const registerMethods = [
  {
    title: 'Telefon ile Kayıt Olun',
    icon: <PhoneIcon width={24} height={24} />,
    method: 'phone',
  },
  {
    title: 'Eposta ile Kayıt Olun',
    icon: <EmailIcon width={24} height={24} />,
    method: 'email',
  },
  {
    title: 'Google ile Kayıt Olun',
    icon: <GoogleIcon width={24} height={24} />,
    method: 'google',
  },
  {
    title: 'Apple ile Kayıt Olun',
    icon: <AppleIcon width={24} height={24} />,
    method: 'apple',
  },
  {
    title: 'Facebook ile Kayıt Olun',
    icon: <FacebookIcon width={24} height={24} />,
    method: 'facebook',
  },
];

export const categories = selectedCategoryIndex => [
  {
    title: 'Tümü',
    icon: (
      <AllIcon
        fill={
          selectedCategoryIndex === 0 ? theme.COLORS.categoriesOrange : 'gray'
        }
        width={24}
        height={24}
      />
    ),
  },
  {
    icon: (
      <SmallCarIcon
        fill={
          selectedCategoryIndex === 1 ? theme.COLORS.categoriesOrange : 'gray'
        }
        width={40}
        height={40}
      />
    ),
  },
  {
    icon: (
      <CarCategoryIcon
        color={
          selectedCategoryIndex === 2 ? theme.COLORS.categoriesOrange : 'gray'
        }
        fill={
          selectedCategoryIndex === 2 ? theme.COLORS.categoriesOrange : 'gray'
        }
        stroke={
          selectedCategoryIndex === 2 ? theme.COLORS.categoriesOrange : 'gray'
        }
        width={40}
        height={40}
      />
    ),
  },
  {
    icon: (
      <BicycleIcon
        fill={
          selectedCategoryIndex === 3 ? theme.COLORS.categoriesOrange : 'white'
        }
        width={40}
        height={40}
      />
    ),
  },
  {
    icon: (
      <VanIcon
        fill={
          selectedCategoryIndex === 4 ? theme.COLORS.categoriesOrange : 'gray'
        }
        width={40}
        height={40}
      />
    ),
  },
  {
    icon: (
      <TruckIcon
        fill={
          selectedCategoryIndex === 5 ? theme.COLORS.categoriesOrange : 'white'
        }
        width={40}
        height={40}
      />
    ),
  },
  {
    icon: (
      <Truck2Icon
        fill={
          selectedCategoryIndex === 6 ? theme.COLORS.categoriesOrange : 'white'
        }
        width={40}
        height={40}
      />
    ),
  },
];

export const homeData = [
  {
    image: require('../../assets/images/homeCards/sportBlackCar.png'),
    advertisement: false,
    modal: 'Audi A4',
    price: '271.000 ₺',
    km: '75.000',
    location: 'Maltepe',
    gear: 'Otomatik',
    gas: 'Dizel',
    id: 1,
    logo: require('../../assets/images/audiLogo.png'),
  },
  {
    image: require('../../assets/images/homeCards/key.png'),
    advertisement: true,
    title: 'Krediye Uygun',
    subtitle: 'Araçlar',
    titlePosition: 'left',
    textAlign: 'left',
  },
  {
    image: require('../../assets/images/homeCards/key.png'),
    advertisement: true,
    title: '150.000 TL Altı',
    subtitle: 'Araçlar',
    titlePosition: 'right',
    textAlign: 'right',
  },
  {
    image: require('../../assets/images/homeCards/redCar.png'),
    advertisement: false,
    modal: 'Volvo XC60',
    price: '241.000 ₺',
    km: '75.000',
    location: 'Maltepe',
    gear: 'Otomatik',
    gas: 'Dizel',
    id: 2,
    logo: require('../../assets/images/volvoLogo.png'),
  },
  {
    image: require('../../assets/images/homeCards/blackCar.png'),
    advertisement: false,
    modal: 'Audi A4',
    price: '271.000 ₺',
    km: '75.000',
    location: 'Maltepe',
    gear: 'Otomatik',
    gas: 'Dizel',
    id: 3,
  },
  {
    image: require('../../assets/images/homeCards/grayy.png'),
    advertisement: false,
    modal: 'Volvo XC60',
    price: '271.000 ₺',
    km: '75.000',
    location: 'Maltepe',
    gear: 'Otomatik',
    gas: 'Dizel',
    id: 4,
  },
];

export const degerKategorileri = [
  {
    title: 'Araç Tipi',
    value: 'Otomobil',
  },
  {
    title: 'Yıl',
    value: 2019,
  },
  {
    title: 'Marka',
    value: 'Jeep',
  },
  {
    title: 'Model',
    value: 'Renegade',
  },
  {
    title: 'Yakıt',
    value: 'Dizel',
  },
  {
    title: 'Kasa Tipi',
    value: 'SUV',
  },
  {
    title: 'Motor',
    value: '1.6 Multijet',
  },
  {
    title: 'Paket',
    value: 'Limited',
  },
];
