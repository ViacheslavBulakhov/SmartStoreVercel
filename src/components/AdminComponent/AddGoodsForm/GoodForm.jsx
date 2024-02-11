import { useState } from 'react';
import { useForm } from 'react-hook-form';
import AddPhoto from '../AddPhoto/AddPhoto';

import axios from 'axios';
import {
  Form,
  InputWrap,
  Label,
  Input,
} from '../../Modals/AuthModal/AuthModalStyled';
import { FormWrap } from './GoodsFromStyled';
import { useStore } from '../../../zustand/store';
import { notifyError } from '../../Toasters/Toasters';

const GoodForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [filters, setFilters] = useState([{ name: '', value: '' }]);
  const [photo, setPhoto] = useState(null);

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

  const onSubmit = async data => {
    const newData = { ...data, filters };

    const formData = new FormData();

    {
      photo && formData.append('img', photo);
    }

    Object.entries(newData).forEach(([key, value]) => {
      if (Array.isArray(value)) {
        const jsonValue = JSON.stringify(value);

        formData.append(key, jsonValue);
      } else {
        formData.append(key, value);
      }
    });
    setNewGoods(formData);
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
        </InputWrap>

        <InputWrap>
          <Label>Кількість:</Label>
          <Input type="number" {...register('count')} />
        </InputWrap>

        <AddPhoto setPhoto={setPhoto} />

        <InputWrap>
          <Label>Опис:</Label>
          <textarea
            style={{ width: '100%', minHeight: '120px' }}
            type="text"
            value={
              'Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic porro dignissimos, perferendis blanditiis aperiam rerum ratione nihil, officia quam eaque at excepturi nam quibusdam odio tempore recusandae dolorem laboriosam qui.'
            }
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
