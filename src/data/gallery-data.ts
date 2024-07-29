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
}[] = [
  {
    id:1,
    img:img_1,
    title:'GI tournament'
  },
  {
    id:2,
    img:img_2,
    title:'GI Crypto Bubble Shooter'
  },
  {
    id:3,
    img:img_4,
    title:'Crypto Blast'
  },
  {
    id:4,
    img:img_5,
    title:'Crypto Rush'
  },
  {
    id:5,
    img:img_5,
    title:'GI Crypto'
  },
]

export default gallery_data;