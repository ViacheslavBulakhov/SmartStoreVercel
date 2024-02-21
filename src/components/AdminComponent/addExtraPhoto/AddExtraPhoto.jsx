/* eslint-disable react/prop-types */
import { useCallback, useEffect, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import { PhotoContainer } from '../AddPhoto/AddPhotoStyled';

import { v4 as uuidv4 } from 'uuid';

const photosListStyle = {
  display: 'flex',
  flexWrap: 'wrap',
};

const AddExtraPhoto = ({ setExtraPhotos }) => {
  const [selectedFiles, setSelectedFiles] = useState([]);

  const onDrop = useCallback(acceptedFiles => {
    const filesWithIds = acceptedFiles.map(file => ({
      id: uuidv4(),
      file: file,
    }));
    setSelectedFiles(prev => [...prev, ...filesWithIds]);
  }, []);

  const removePhoto = id => {
    setSelectedFiles(prev => prev.filter(photo => photo.id !== id));
  };

  useEffect(() => {
    setExtraPhotos(selectedFiles);
  }, [selectedFiles, setExtraPhotos]);

  const { getRootProps, getInputProps } = useDropzone({ onDrop });

  return (
    <div>
      <div style={photosListStyle}>
        {selectedFiles.length > 0 &&
          selectedFiles.map(photo => (
            <div key={photo.id}>
              <PhotoContainer src={URL.createObjectURL(photo.file)} />
              <button type="button" onClick={() => removePhoto(photo.id)}>
                Видалити
              </button>
            </div>
          ))}
      </div>
      <input {...getInputProps()} />
      <button type="button" {...getRootProps()}>
        Фото для детального розгляду!{' '}
      </button>
    </div>
  );
};

export default AddExtraPhoto;
