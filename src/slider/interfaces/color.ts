const allColors = {
  '#f0f8ff': 'aliceblue',
  '#faebd7': 'antiquewhite',
  '#00ffff': 'aqua',
  '#7fffd4': 'aquamarine',
  '#f0ffff': 'azure',
  '#f5f5dc': 'beige',
  '#ffe4c4': 'bisque',
  '#000000': 'black',
  '#ffebcd': 'blanchedalmond',
  '#0000ff': 'blue',
  '#8a2be2': 'blueviolet',
  '#a52a2a': 'brown',
  '#deb887': 'burlywood',
  '#5f9ea0': 'cadetblue',
  '#7fff00': 'chartreuse',
  '#d2691e': 'chocolate',
  '#ff7f50': 'coral',
  '#6495ed': 'cornflowerblue',
  '#fff8dc': 'cornsilk',
  '#dc143c': 'crimson',
  '#00008b': 'darkblue',
  '#008b8b': 'darkcyan',
  '#b8860b': 'darkgoldenrod',
  '#a9a9a9': 'darkgray',
  '#006400': 'darkgreen',
  '#bdb76b': 'darkkhaki',
  '#8b008b': 'darkmagenta',
  '#556b2f': 'darkolivegreen',
  '#ff8c00': 'darkorange',
  '#9932cc': 'darkorchid',
  '#8b0000': 'darkred',
  '#e9967a': 'darksalmon',
  '#8fbc8f': 'darkseagreen',
  '#483d8b': 'darkslateblue',
  '#5ddfbe': 'aquamarine',
  '#198000': 'Зеленый',
  '#2f4f4f': 'darkslategray',
  '#00ced1': 'darkturquoise',
  '#9400d3': 'darkviolet',
  '#ff1493': 'deeppink',
  '#00bfff': 'deepskyblue',
  '#696969': 'dimgray',
  '#1e90ff': 'dodgerblue',
  '#b22222': 'firebrick',
  '#fffaf0': 'floralwhite',
  '#228b22': 'forestgreen',
  '#ff00ff': 'fuchsia',
  '#dcdcdc': 'gainsboro',
  '#f8f8ff': 'ghostwhite',
  '#daa520': 'goldenrod',
  '#ffd700': 'gold',
  '#808080': 'gray',
  '#008000': 'Зеленый',
  '#adff2f': 'greenyellow',
  '#f0fff0': 'honeydew',
  '#ff69b4': 'hotpink',
  '#cd5c5c': 'indianred',
  '#4b0082': 'indigo',
  '#fffff0': 'ivory',
  '#f0e68c': 'khaki',
  '#fff0f5': 'lavenderblush',
  '#e6e6fa': 'lavender',
  '#7cfc00': 'lawngreen',
  '#fffacd': 'lemonchiffon',
  '#add8e6': 'lightblue',
  '#f08080': 'lightcoral',
  '#e0ffff': 'lightcyan',
  '#fafad2': 'lightgoldenrodyellow',
  '#d3d3d3': 'lightgray',
  '#90ee90': 'lightgreen',
  '#ffb6c1': 'lightpink',
  '#ffa07a': 'lightsalmon',
  '#20b2aa': 'lightseagreen',
  '#87cefa': 'lightskyblue',
  '#778899': 'lightslategray',
  '#b0c4de': 'lightsteelblue',
  '#ffffe0': 'lightyellow',
  '#00ff00': 'lime',
  '#32cd32': 'limegreen',
  '#faf0e6': 'linen',
  '#800000': 'maroon',
  '#66cdaa': 'mediumaquamarine',
  '#0000cd': 'mediumblue',
  '#ba55d3': 'mediumorchid',
  '#9370db': 'mediumpurple',
  '#3cb371': 'mediumseagreen',
  '#7b68ee': 'mediumslateblue',
  '#00fa9a': 'mediumspringgreen',
  '#48d1cc': 'mediumturquoise',
  '#c71585': 'mediumvioletred',
  '#191970': 'midnightblue',
  '#f5fffa': 'mintcream',
  '#ffe4e1': 'mistyrose',
  '#ffe4b5': 'moccasin',
  '#ffdead': 'navajowhite',
  '#000080': 'navy',
  '#fdf5e6': 'oldlace',
  '#808000': 'olive',
  '#6b8e23': 'olivedrab',
  '#ffa500': 'orange',
  '#ff4500': 'orangered',
  '#da70d6': 'orchid',
  '#eee8aa': 'palegoldenrod',
  '#98fb98': 'palegreen',
  '#afeeee': 'paleturquoise',
  '#db7093': 'palevioletred',
  '#ffefd5': 'papayawhip',
  '#ffdab9': 'peachpuff',
  '#cd853f': 'peru',
  '#ffc0cb': 'pink',
  '#dda0dd': 'plum',
  '#b0e0e6': 'powderblue',
  '#800080': 'purple',
  '#663399': 'rebeccapurple',
  '#ff0000': 'Красный',
  '#bc8f8f': 'rosybrown',
  '#4169e1': 'royalblue',
  '#8b4513': 'saddlebrown',
  '#fa8072': 'salmon',
  '#f4a460': 'sandybrown',
  '#2e8b57': 'seagreen',
  '#fff5ee': 'seashell',
  '#a0522d': 'sienna',
  '#c0c0c0': 'silver',
  '#87ceeb': 'skyblue',
  '#6a5acd': 'slateblue',
  '#708090': 'slategray',
  '#fffafa': 'snow',
  '#00ff7f': 'springgreen',
  '#4682b4': 'steelblue',
  '#d2b48c': 'tan',
  '#008080': 'teal',
  '#d8bfd8': 'thistle',
  '#ff6347': 'tomato',
  '#40e0d0': 'turquoise',
  '#ee82ee': 'violet',
  '#f5deb3': 'wheat',
  '#ffffff': 'Белый',
  '#f5f5f5': 'whitesmoke',
  '#ffff00': 'Желтый',
  '#9acd32': 'Яблочно-зеленый',
  '#e58000': 'Морковный',
  '#cc0000': 'Бостонский-красный',
  '#330000': 'Коричневый',
  '#7f8000': 'Оливковый',
  '#990000': 'Сангрия',
  '#b28000': 'Темно-золотой',
  '#4c8000': 'Нежно-оливковый',
  '#660000': 'Коричнево-малиновый',
  '#6c6000': 'Оливковый',
  '#6a55c3': 'Пурпурно-синий',
  '#67c8f6': 'Ярко-голубой',
  '#492f5c': 'Глубокий-фиолетовый',
  '#5cd1ec': 'Голубой',
  '#13ff42': 'Ярко-зеленый',
  '#1da426': 'Пастельно-зеленый',
  '#2fdbc0': 'Бирюзовый',
  '#386748': 'Темно-зеленый',
  '#59a9c1': 'Темно-голубой',
  '#146666': 'Темно-бирюзовый',
  '#c80993': 'Фиолетово-красный',
  '#fa0bf8': 'Фуксия',
  '#190132': 'Темно-фиолетовый',
  '#320262': 'Темно-фиолетовый',
  '#4b0397': 'Индиго',
  '#af0861': 'Розовато-лиловый',
  '#e10ac6': 'Малиновый',
  '#96072e': 'Бургундский',
  '#6404ca': 'Пурпурно-синий',
  '#7d05fc': 'Фиолетовый',
  '#320265': 'Темный индиго',
  '#0': '#000',
  orange: 'Оранжевый',
  purple: 'Фиолетовый',
  '#4be74d': 'Малахитовый',
  '#653466': 'Пурпурный',
  '#329a33': 'Зеленый',
  '#194d1a': 'Темно-зеленый',
  '#fd02ff': 'Розовый',
  '#b11bb3': 'Фиолетово-баклажанный',
  '#e3b5e6': 'Светло-розовый',

};

export { allColors };
