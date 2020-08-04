import React from 'react';
import 'antd/dist/antd.css';
import './style.scss';
import { Carousel } from 'antd';

class NewSideLeft extends React.Component{
    render() {
        return (
            <Carousel style={{marginTop:'25px'}} autoplay autoplaySpeed="35" >
                <div>
                    <a target="_blank" href="https://vinfast.vn/">
                        <img className="car-advertisement" src= { require('./images/vin.jpg') } alt={''}/>
                    </a>
                </div>
                <div>
                    <a target="_blank" href="https://www.hyundaiusa.com/us/en">
                        <img className="car-advertisement" src= { require('./images/huyndai.jpg') } alt={''}/>
                    </a>
                </div>
                <div>
                    <a target="_blank" href="https://www.toyota.com.vn/">
                        <img className="car-advertisement" src= { require('./images/toyotaposter.jpg') } alt={''}/>
                    </a>
                </div>
                <div>
                    <a target="_blank" href="https://www.mercedes-benz.com.vn/vi/passengercars.html?csref=mc-sem_cn-brand_ci-brand_pure&gclid=EAIaIQobChMIioyrp7X06gIVEayWCh1uXQwjEAAYASAAEgJFuPD_BwE&group=all&subgroup=see-all&view=BODYTYPE">
                        <img className="car-advertisement" src= { require('./images/mec.jpg') } alt={''}/>
                    </a>
                </div>
            </Carousel>
        );
    }
}

export default NewSideLeft;