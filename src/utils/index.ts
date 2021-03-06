export const getRandomNumber = (num = 100) => {
  return (Math.random() * num) | 0;
};

export const availableLocales = [
  'en-US',
  'es-MX',
  'pt-BR',
  'fr-FR',
  'de-DE',
];

export const translations = {
  'en-US': 'Hello, {name}! ',
  'es-MX': 'Hola, {name}! ',
  'pt-BR': 'Olรก, {name}! ',
  'fr-FR': 'Salut, {name}! ',
  'de-DE': 'Hallo, {name}! ',
};

export const themes = {
  light: {
    foreground: '#000000',
    background: '#eeeeee',
  },
  dark: {
    foreground: '#ffffff',
    background: '#222222',
  },
};

export const emojis = [
  '๐',
  '๐',
  '๐',
  '๐ด',
  '๐ฅ',
  '๐',
  '๐ถ',
  '๐ ',
  '๐ฌ',
  '๐พ',
  'โบ๏ธ',
  '๐',
  '๐',
  '๐',
  '๐จ',
  '๐',
  '๐',
  '๐',
  '๐',
  '๐ฐ',
  'โ',
  '๐',
  '๐',
  '๐ถ',
  '๐',
  '๐ก',
  '๐',
  '๐',
  '๐ฃ',
  '๐',
  '๐',
  '๐ ',
  '๐',
  '๐',
  '๐',
  '๐ฎ',
  '๐',
  '๐บ',
  '๐',
  '๐ฐ',
  '๐ฌ',
  '๐ธ',
  '๐',
  '๐',
  '๐ณ',
  '๐คก',
  '๐ง',
  '๐งน',
  '๐๐ผ',
  '๐',
  '๐ถ',
  '๐',
  '๐๐ฝโโ๏ธ',
  '๐ฃ',
  '๐',
];
