import dayjs from 'dayjs';

export const formatDateTime = (date: string) => {
  return dayjs(date).format('YYYY-MM-DD');
};

export const formatPhoneNumber = (phone: string) => {
  return phone.replace(/(\d{3})(\d{4})(\d{4})/, '$1-$2-$3');
};
