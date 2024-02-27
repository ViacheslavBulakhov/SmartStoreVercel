/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react';
import {
  ExtraPhotoItem,
  ExtraPhotosList,
  MainImg,
} from './IMageCarouselStyled';

const ImageCarousel = ({ data }) => {
  const [imgArray, setImgArray] = useState([]);
  const [currentImg, setCurrentImg] = useState(0);

  useEffect(() => {
    if (data && data.extraPhotos && data.extraPhotos.length > 0) {
      const initialImgArray = [
        { url: data.imgUrl, id: data.imgId },
        ...data.extraPhotos,
      ];
      setImgArray(initialImgArray);
    } else {
      setImgArray([{ url: data.imgUrl, id: data.imgId }]);
    }
  }, [data]);

  const handleCurrentImg = id => {
    const currentIndex = imgArray.findIndex(item => item.id === id);
    if (currentIndex !== -1) {
      setCurrentImg(currentIndex);
    }
  };

  return (
    <>
      {imgArray.length > 0 && (
        <div
          style={{
            width: '50%',
            height: 'fit-content',
            boxShadow: 'var(--shadow)',
            border: 'var(--border-base)',
            borderRadius: '20px',
            padding: '10px',
          }}
        >
          <MainImg $url={imgArray[currentImg].url} />
          <ExtraPhotosList>
            {imgArray.map((item, index) => {
              return (
                <ExtraPhotoItem
                  key={item.id}
                  $url={item.url}
                  $isActive={currentImg === index}
                  onClick={() => handleCurrentImg(item.id)}
                />
              );
            })}
          </ExtraPhotosList>
        </div>
      )}
    </>
  );
};
export default ImageCarousel;
