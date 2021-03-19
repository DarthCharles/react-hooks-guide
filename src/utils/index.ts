export const getRandomNumber = (num = 100) => {
  return (Math.random() * num) | 0;
};

export const availableLocales = [
  "en-US",
  "es-MX",
  "pt-BR",
  "fr-FR",
  "de-DE",
];

export const translations = {
  "en-US": "Hello, {name}! ",
  "es-MX": "Hola, {name}! ",
  "pt-BR": "Olá, {name}! ",
  "fr-FR": "Salut, {name}! ",
  "de-DE": "Hallo, {name}! ",
};

export const themes = {
  light: {
    foreground: "#000000",
    background: "#eeeeee",
  },
  dark: {
    foreground: "#ffffff",
    background: "#222222",
  },
};

export const emojis = [
  "📙",
  "🆓",
  "🚀",
  "🌴",
  "💥",
  "🏓",
  "🚶",
  "👠",
  "👬",
  "😾",
  "⛺️",
  "🐈",
  "🎟",
  "🐀",
  "🖨",
  "🏕",
  "🍋",
  "💉",
  "🔅",
  "🛰",
  "⛈",
  "📘",
  "🏄",
  "🎶",
  "🌃",
  "🌡",
  "🙅",
  "💚",
  "🕣",
  "😖",
  "🛃",
  "🐠",
  "🗓",
  "🏂",
  "🆒",
  "👮",
  "😄",
  "🔺",
  "🏅",
  "🐰",
  "🛬",
  "🔸",
  "📖",
  "🔖",
  "📳",
  "🤡",
  "🔧",
  "🧹",
  "🖐🏼",
  "🚀",
  "🐶",
  "👀",
  "💆🏽‍♂️",
  "🎣",
  "🕔",
];
