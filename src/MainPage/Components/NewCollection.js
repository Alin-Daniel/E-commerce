import React from 'react';

import ImgCard from '../../shared/components/UIElements/Card';
import './NewCollection.scss';

import Img1 from '../../public/presentation-images/alexandru-zdrobau-juESZxMhtXk-unsplash.jpg';
import Img2 from '../../public/presentation-images/ian-dooley-TT-ROxWj9nA-unsplash.jpg';
import Img3 from '../../public/presentation-images/tamara-bellis-68csPWTnafo-unsplash.jpg';

const newCollection = props => {
    return <section className='new-collection mb-xl'>
        <h2 className='heading-2'>New Arrivals</h2>
        <ImgCard imageUrl={Img1}/>
        <ImgCard imageUrl={Img2}/>
        <ImgCard imageUrl={Img3}/>
    </section>
};

export default newCollection;