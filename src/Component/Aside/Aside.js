import React from 'react';
import { Carousel, dotHeight } from 'antd';
import "./aside.scss";

export default function Aside() {
    const dotHeight = {
        height: 16
    }
    return (
        <aside>
            <Carousel autoplay  dotHeight={{height: 16}}>
                <div>
                    <h3>1</h3>
                </div>
                <div>
                    <h3>2</h3>
                </div>
                <div>
                    <h3>3</h3>
                </div>
                <div>
                    <h3>4</h3>
                </div>
            </Carousel>
        </aside>
    )
}