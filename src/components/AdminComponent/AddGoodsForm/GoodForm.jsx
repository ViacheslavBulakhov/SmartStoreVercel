/* eslint-disable react/prop-types */
import { useState, useMemo, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import AddPhoto from '../AddPhoto/AddPhoto';

import {
  Form,
  InputWrap,
  Label,
  Input,
  TextAreaInput,
} from '../../Modals/AuthModal/AuthModalStyled';
import { FormWrap } from './GoodsFromStyled';
import { useStore } from '../../../zustand/store';

import { addGoodsSchema } from '../../../schemas';
import AddExtraPhoto from '../addExtraPhoto/AddExtraPhoto';
import axios from 'axios';

const GoodForm = ({ data }) => {
  const initialValues = data
    ? {
        categories: data.categories,

        type: data.type,

        brand: data.brand,

        title: data.title,

        model: data.model,

        maker: data.maker,

        amount: data.amount,

        discount: data.discount,

        count: data.count,

        description: data.description,
      }
    : {};

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(addGoodsSchema),
    defaultValues: initialValues,
  });

  const [filters, setFilters] = useState([{ name: '', value: '' }]);
  const [photo, setPhoto] = useState(null);
  const [extraPhotos, setExtraPhotos] = useState([]);

  const { setNewGoods } = useStore();

  const addFilter = () => {
    setFilters([...filters, { name: '', value: '' }]);
  };

  const onFilterNameChange = (index, event) => {
    const newFilters = [...filters];
    newFilters[index].name = event.target.value;
    setFilters(newFilters);
  };

  const onFilterValueChange = (index, event) => {
    const newFilters = [...filters];
    newFilters[index].value = event.target.value;
    setFilters(newFilters);
  };

  const onSubmit = async formInputsData => {
    const newData = { ...formInputsData, filters };

    const formData = new FormData();

    {
      photo && formData.append('img', photo);
    }

    {
      extraPhotos.length > 0 &&
        extraPhotos.map(item => {
          item.file
            ? formData.append('extraPhotos', item.file)
            : formData.append('oldExtraPhotos', item.id);
        });
    }

    Object.entries(newData).forEach(([key, value]) => {
      if (Array.isArray(value)) {
        const jsonValue = JSON.stringify(value);

        formData.append(key, jsonValue);
      } else {
        formData.append(key, value);
      }
    });

    const update = async (formData, id) => {
      const result = await axios.put(`/goods/${id}`, formData);
    };

    data ? update(formData, data._id) : setNewGoods(formData);
    // reset();
  };

  return (
    <FormWrap>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <InputWrap>
          <Label>Категорія:</Label>
          <Input type="text" {...register('categories', { required: true })} />
          {errors.categories && <span>{errors.categories.message}</span>}
        </InputWrap>
        <InputWrap>
          <Label>Тип:</Label>
          <Input type="text" {...register('type', { required: true })} />
          {errors.type && <span>{errors.type.message}</span>}
        </InputWrap>
        <InputWrap>
          <Label>Бренд:</Label>
          <Input type="text" {...register('brand', { required: true })} />
          {errors.brand && <span>{errors.brand.message}</span>}
        </InputWrap>
        <InputWrap>
          <Label>Назва\Заголовок:</Label>
          <Input type="text" {...register('title', { required: true })} />
          {errors.title && <span>{errors.title.message}</span>}
        </InputWrap>
        <InputWrap>
          <Label>Модель:</Label>
          <Input type="text" {...register('model')} />
        </InputWrap>
        <InputWrap>
          <Label>Виробник:</Label>
          <Input type="text" {...register('maker')} />
        </InputWrap>
        <InputWrap>
          <Label>Вартість:</Label>
          <Input type="text" {...register('amount', { required: true })} />
          {errors.amount && <span>{errors.amount.message}</span>}
        </InputWrap>
        <InputWrap>
          <Label>Знижка:</Label>
          <Input type="number" {...register('discount')} />
          {errors.discount && <span>{errors.discount.message}</span>}
        </InputWrap>
        <InputWrap>
          <Label>Кількість:</Label>
          <Input type="number" {...register('count')} />
          {errors.count && <span>{errors.count.message}</span>}
        </InputWrap>
        <AddPhoto setPhoto={setPhoto} imgUrl={data && data?.imgUrl} />
        <AddExtraPhoto
          setExtraPhotos={setExtraPhotos}
          extraPhotosfromData={data && data?.extraPhotos}
        />
        <InputWrap>
          <Label>Опис:</Label>
          <TextAreaInput
            style={{ width: '100%', minHeight: '120px' }}
            type="text"
            {...register('description')}
          />
        </InputWrap>
        {filters.map((filter, index) => (
          <InputWrap key={index}>
            <Label>Назва Фільтру:</Label>
            <Input
              type="text"
              value={filter.name}
              onChange={e => onFilterNameChange(index, e)}
            />
            <Label>Значення Фільтру:</Label>
            <Input
              type="text"
              value={filter.value}
              onChange={e => onFilterValueChange(index, e)}
            />
          </InputWrap>
        ))}
        <button type="button" onClick={addFilter}>
          Додати фільтр
        </button>
        <button type="submit">Створити</button>
      </Form>
    </FormWrap>
  );
};

export default GoodForm;
