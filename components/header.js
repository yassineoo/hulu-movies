import Image from 'next/image';
import HeaderItem from './headerItem';
import {
  HomeIcon,
  BadgeCheckIcon,
  CollectionIcon,
  LightningBoltIcon,
  SearchIcon,
  UserIcon,
} from '@heroicons/react/outline' ;
export default function Header() {
  return (
    <header className="flex flex-col sm:flex-row m-5 justify-between items-center h-auto">
    <div className='flex flex-grow justify-evenly max-w-2xl '>
       <HeaderItem title='Home' Icon={HomeIcon}></HeaderItem>
       <HeaderItem title='Trending' Icon={LightningBoltIcon}></HeaderItem>
       <HeaderItem title='Verfied' Icon={BadgeCheckIcon}></HeaderItem>
       <HeaderItem title='Collections' Icon={CollectionIcon}></HeaderItem>
       <HeaderItem title='Search' Icon={SearchIcon}></HeaderItem>
       <HeaderItem title='User' Icon={UserIcon}></HeaderItem>

    
    
    </div>
    <Image
         className='object-contain'
         src='https://links.papareact.com/ua6'
        width={200}
        height={100}
        alt='hulu logo'
    />
    
    </header>
  )
}
