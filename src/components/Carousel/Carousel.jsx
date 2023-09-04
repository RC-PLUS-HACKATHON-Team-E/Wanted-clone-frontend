import React, { useState, useEffect } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import * as C from './Styles';
function ImageCarousel() {

  const images = [
    {
      url: 'https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fcompany%2F449%2Fzdukyu3s2ohwvgfh__1080_790.jpg&w=1000&q=75',
      alt: '스파크플러스 (SPARKPLUS) - 플랫폼기획 담당자',
    },
    {
      url: 'https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fcompany%2F449%2Fx3d55nxeeoornmdi__1080_790.jpg&w=1000&q=75',
      alt: '스파크플러스 (SPARKPLUS) - 플랫폼기획 담당자',
    },
    {
      url: 'https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fcompany%2F449%2Fik3vx1d621fcsxw8__1080_790.jpg&w=1000&q=75',
      alt: '스파크플러스 (SPARKPLUS) - 플랫폼기획 담당자',
    },
    {
      url: 'https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fcompany%2F449%2Fh6lonzgbbifyibh8__1080_790.jpg&w=1000&q=75',
      alt: '스파크플러스 (SPARKPLUS) - 플랫폼기획 담당자',
    },
    {
      url: 'https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fcompany%2F449%2Fjk9noq5fitocyczs__1080_790.jpg&w=1000&q=75',
      alt: '스파크플러스 (SPARKPLUS) - 플랫폼기획 담당자',
    },
    {
      url: 'https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fcompany%2F449%2Fl42jgj26bvbsfzyr__1080_790.jpg&w=1000&q=75',
      alt: '스파크플러스 (SPARKPLUS) - 플랫폼기획 담당자',
    },
    {
      url: 'https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fcompany%2F449%2Fszu0kta5ngg1vbov__1080_790.jpg&w=1000&q=75',
      alt: '스파크플러스 (SPARKPLUS) - 플랫폼기획 담당자',
    }
  ];
  // const [images, setImages] = useState([]);
  //
  // useEffect(() => {
  //   fetch('YOUR_API_ENDPOINT')
  //     .then((response) => response.json())
  //     .then((data) => setImages(data))
  //     .catch((error) => console.error('Error fetching data:', error));
  // }, []);

  return (
    <C.CarouselContainer>
      <Carousel>
        {images.map((image, index) => (
          <div key={index}>
            <img src={image.url} alt={`Image ${index}`} />
          </div>
        ))}
      </Carousel>
    </C.CarouselContainer>
  );
}

export default ImageCarousel;
