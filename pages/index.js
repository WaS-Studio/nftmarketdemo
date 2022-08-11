import Image from 'next/image';
import { Banner } from '../components';

import images from '../assets';

const Home = () => (
  <div className="flex justify-center sm:px-4 p-12">
    <div className="w-full minmd:4/5">
      <Banner
        name="Discover, collect, and sell extraordinary NFTs"
        childStyles="md:text-4xl sm:text-2xl xs=text-xl text-left"
        parentStyles="justify-start mb-6 h-72 sm:h-60 p-12 xs:p-4 xs:h-44 rounded-3xl"
      />
    </div>

    <div>
      <h1 className="font-poppins dark:text-white test-nft-black-1 text-2xl minlg:text-4xl font-semibold ml-4 xs:ml-0"> Best Creators

      </h1>
    </div>

    <div className="minmd:4/5 flex ml-20 p-1 justify-evenly bg-nft-red-violet ">
      <Image
        src={images.snailMan}
        obejectfit="contain"
        width={500}
        height={300}
        alt="Snail Man"
      />
    </div>
    <div className="minmd:4/5 flex ml-20 p-1 justify-evenly bg-nft-red-violet">
      <Image
        src={images.snailMan}
        obejectfit="contain"
        width={500}
        height={300}
        alt="Snail Man"
      />
    </div>
    <div className="minmd:4/5 flex ml-20 p-1 justify-evenly bg-nft-red-violet ">
      <Image
        src={images.snailMan}
        obejectfit="contain"
        width={500}
        height={300}
        alt="Snail Man"
      />
    </div>
  </div>
);

export default Home;
