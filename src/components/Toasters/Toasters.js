import toast from 'react-hot-toast';

// AUTH TOASTERS
export const notifyErrorLogin = () =>
  toast.error(
    'Введений логін або пароль невірний, будь-ласка перевірте та спробуйте ще!'
  );
export const notifyFulfilledLogin = () => toast.success('Ласкаво Просимо!)');

export const notifyErrorRegistration = () =>
  toast.error(
    'something went wrong, please check your name, email and password are entered correctly'
  );
// FOR WORK WITH CONTACT TOASTERS
export const notifyCreacteNewContact = () =>
  toast.success('Successfully created!');

export const notifyDeleteContact = () => toast.success('Successfully deleted!');

export const notifyUpdateContact = () => toast.success('Successfully update!');
