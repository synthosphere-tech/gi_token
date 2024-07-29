import { StaticImageData } from 'next/image';
import img_1 from '@/assets/img/gallery/gi-tournament.jpg';
import img_2 from '@/assets/img/gallery/shooter game.png';
import img_3 from '@/assets/img/gallery/gallery03.jpg';
import img_4 from '@/assets/img/gallery/gi-crypto.png';
import img_5 from '@/assets/img/gallery/crypto-rush.jpg';

const gallery_data:{
  id: number;
  img: StaticImageData;
  title: string;
  rate: string;
}[] = [
  {
    id:1,
    img:img_1,
    title:'GI tournament',
    rate:'50%'
  },
  {
    id:2,
    img:img_2,
    title:'GI Crypto Bubble Shooter',
    rate:'65%'
  },
  {
    id:3,
    img:img_3,
    title:'GI Crypto',
    rate:'60%'
  },
  {
    id:4,
    img:img_4,
    title:'Crypto Blast',
    rate:'70%'
  },
  {
    id:5,
    img:img_5,
    title:'Crypto Rush',
    rate:'85%'
  },
]

export default gallery_data;