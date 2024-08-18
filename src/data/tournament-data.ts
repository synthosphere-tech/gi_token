import { ITournament } from '@/types/tournament-type';
import thumb_1 from '@/assets/img/others/tournament_thumb01.png';
import thumb_2 from '@/assets/img/others/tournament_thumb02.png';
import thumb_3 from '@/assets/img/others/tournament_thumb03.png';
import list_img_1 from '@/assets/img/others/bsc 40x40.png';
import list_img_2 from '@/assets/img/others/matic 40x40.png';
import list_img_3 from '@/assets/img/others/tournament03.jpg';
import matic from '@/assets/img/logo/matic-logo.webp'

const tournament_data:ITournament[] = [
  {
    id: 1,
    box_price: '$0.0011',
    coming_time: '2024-08-20',
    description: '',
    subtitle: 'GI',
    title: 'Private Sale',
    places: '200 Million GI Token',
    live_link: 'https://www.twitch.tv/videos/1726788358',
    team_name: 'FoxTie Max',
    status: 'Online',
    list_items: [
      {
        id:1,
        img:list_img_1,
        name:'BSC Network',
        price:'100000000 GI'
      },
      {
        id:2,
        img:list_img_2,
        name:'Matic Network',
        price:'100000000 GI'
      }
    ]
  },
  // {
  //   id:3,
  //   box_price:'$0.0011',
  //   coming_time:'2024-08-19',
  //   subtitle:'GI Tokenomics',
  //   title:' in sale',
  //   places:'600 Million GI Token',
  //   live_link:'https://www.twitch.tv/videos/1726788358',
  //   team_name:'Hatlax TM.',
  //   status:'Online',
  //   list_items:[
  //     {
  //       id:1,
  //       img:list_img_3,
  //       name:'pre sale',
  //       price:'40%'
  //     },
  //     {
  //       id:2,
  //       img:list_img_2,
  //       name:'Private sale',
  //       price:'20%'
  //     },
  //   ]
  // },
]


export default tournament_data;