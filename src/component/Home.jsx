import React from "react";
import './Home.css'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation} from 'swiper/modules';


const Home=()=>{
    return(
        <>
        <Swiper spaceBetween={50} slidesPerView={1} navigation={true} modules={[Navigation]}>
      <SwiperSlide>
      <div  className="boot">
      <Card className="card">
      <Card.Img  src="dar.jpg" className="img" />
      <Card className="body">
        <Card className="title">Darjeeling Hotels</Card><br />
        <Card className="all">
          All Inclusive<br/>
          ₹ 499/night
        </Card><br/>
        <Button className="button">More Detail</Button>
      </Card>
    </Card>
    <Card className="card" >
      <Card.Img  src="kol.jpg" className="img" />
      <Card className="body">
        <Card className="title">Kolkata Hotels</Card><br />
        <Card className="all">
        All Inclusive<br/>
          ₹ 499/night
        </Card><br/>
        <Button className="button">More Detail</Button>
      </Card>
    </Card>
    <Card className="card">
      <Card.Img  src="manali.jpg" className="img" />
      <Card className="body">
        <Card className="title">Manali Hotels</Card><br/>
        <Card className="all">
        All Inclusive<br/>
          ₹ 499/night
        </Card><br/>
        <Button className="button">More Detail</Button>
      </Card>
    </Card>
      </div>
      </SwiperSlide>
      <SwiperSlide>
      <div  className="boot1">
      <Card className="card">
      <Card.Img  src="dar.jpg" className="img" />
      <Card className="body">
        <Card className="title">Darjeeling Hotels</Card><br />
        <Card className="all">
          All Inclusive<br/>
          ₹ 499/night
        </Card><br/>
        <Button className="button">More Detail</Button>
      </Card>
    </Card>
    <Card className="card" >
      <Card.Img  src="kol.jpg" className="img" />
      <Card className="body">
        <Card className="title">Kolkata Hotels</Card><br />
        <Card className="all">
        All Inclusive<br/>
          ₹ 499/night
        </Card><br/>
        <Button className="button">More Detail</Button>
      </Card>
    </Card>
    <Card className="card">
      <Card.Img  src="manali.jpg" className="img" />
      <Card className="body">
        <Card className="title">Manali Hotels</Card><br/>
        <Card className="all">
        All Inclusive<br/>
          ₹ 499/night
        </Card><br/>
        <Button className="button">More Detail</Button>
      </Card>
    </Card>
    </div>
      </SwiperSlide>
    </Swiper>
        </> 
        
    )
}

export default Home;