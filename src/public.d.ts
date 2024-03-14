import { IconType } from 'react-icons';

declare type CardData = {
    title: string,
    image: string,
    background: string,
    text: string
};
  
declare type Project = {
    title: string,
    link: null | string,
    description: string,
    icons: [IconType, string][]
};