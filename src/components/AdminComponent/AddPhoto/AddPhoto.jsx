import { useCallback, useState } from 'react';
import { useDropzone } from 'react-dropzone';

import { PhotoContainer } from './AddPhotoStyled';

const AddPhoto = ({ setPhoto }) => {
  const [selectedFile, setSelectedFile] = useState(null);

  const onDrop = useCallback(
    acceptedFiles => {
      console.log(acceptedFiles[0]);
      setSelectedFile(acceptedFiles[0]);
      setPhoto(acceptedFiles[0]);
    },
    [setPhoto]
  );

  const { getRootProps, getInputProps } = useDropzone({ onDrop });

  return (
    <div {...getRootProps()}>
      {selectedFile && (
        <PhotoContainer src={URL.createObjectURL(selectedFile)} />
      )}
      <input {...getInputProps()} />
      <button type="button">
        Перетягність сюди файл, або натисніть для вибору файлу
      </button>
    </div>
  );
};

export default AddPhoto;
