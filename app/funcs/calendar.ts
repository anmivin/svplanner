//301х198, width=32 height=32
const calc = (width: number, height: number) => {
  const arr = [];

  for (let w = 0; w < 7; w++) {
    for (let h = 0; h < 4; h++) {
      arr.push({ x: 37 + w * 32, y: 49 + h * 32, day: (w + 1) * (h + 1) });
    }
  }

  return arr;
};
[
  {
    path: 'M 37 49 H 69 V 81 H 37 Z',
    x: 37,
    y: 49,
    date: 1,
  },
  {
    path: 'M 69 49 H 101 V 81 H 69 Z',
    x: 69,
    y: 49,
    date: 2,
  },
  {
    path: 'M 101 49 H 133 V 81 H 101 Z',
    x: 101,
    y: 49,
    date: 3,
  },
  {
    path: 'M 133 49 H 165 V 81 H 133 Z',
    x: 133,
    y: 49,
    date: 4,
  },
  {
    path: 'M 165 49 H 197 V 81 H 165  Z',
    x: 165,
    y: 49,
    date: 5,
  },
  {
    path: 'M 197 49 H 229 V 81 H 197 Z',
    x: 197,
    y: 49,
    date: 6,
  },
  {
    path: 'M 229 49 H 261 V 81 H 229 Z',
    x: 229,
    y: 49,
    date: 7,
  },
  {
    path: 'M 37 81 H 69 V 113 H 37 Z',
    x: 37,
    y: 81,
    date: 8,
  },
  {
    path: 'M 69 81 H 101 V 113 H 69 Z',
    x: 69,
    y: 81,
    date: 9,
  },
  {
    path: 'M 101 81 H 133 V 113 H 101 Z',
    x: 10,
    y: 81,
    date: 10,
  },
  {
    path: 'M 133 81 H 165 V 113 H 133 Z',
    x: 133,
    y: 81,
    date: 11,
  },
  {
    path: 'M 165 81 H 197 V 113 H 165  Z',
    x: 165,
    y: 81,
    date: 12,
  },
  {
    path: 'M 197 81 H 229 V 113 H 197 Z',
    x: 197,
    y: 81,
    date: 13,
  },
  {
    path: 'M 229 81 H 261 V 113 H 229 Z',
    x: 229,
    y: 81,
    date: 14,
  },
  {
    path: 'M 37 113 H 69 V 145 H 37 Z',
    x: 37,
    y: 113,
    date: 15,
  },
  {
    path: 'M 69 113 H 101 V 145 H 69 Z',
    x: 69,
    y: 113,
    date: 16,
  },
  {
    path: 'M 101 113 H 133 V 145 H 101 Z',
    x: 101,
    y: 113,
    date: 17,
  },
  {
    path: 'M 133 113 H 165 V 145 H 133 Z',
    x: 133,
    y: 113,
    date: 18,
  },
  {
    path: 'M 165 113 H 197 V 145 H 165  Z',
    x: 165,
    y: 113,
    date: 19,
  },
  {
    path: 'M 197 113 H 229 V 145 H 197 Z',
    x: 197,
    y: 113,
    date: 20,
  },
  {
    path: 'M 229 113 H 261 V 145 H 229 Z',
    x: 229,
    y: 113,
    date: 21,
  },
  {
    path: 'M 37 145 H 69 V 177 H 37 Z',
    x: 37,
    y: 145,
    date: 22,
  },
  {
    path: 'M 69 145 H 101 V 177 H 69 Z',
    x: 69,
    y: 145,
    date: 23,
  },
  {
    path: 'M 101 145 H 133 V 177 H 101 Z',
    x: 101,
    y: 145,
    date: 24,
  },
  {
    path: 'M 133 145 H 165 V 177 H 133 Z',
    x: 133,
    y: 145,
    date: 25,
  },
  {
    path: 'M 165 145 H 197 V 177 H 165  Z',
    x: 165,
    y: 145,
    date: 26,
  },
  {
    path: 'M 197 145 H 229 V 177 H 197 Z',
    x: 197,
    y: 145,
    date: 27,
  },
  {
    path: 'M 229 145 H 261 V 177 H 229 Z',
    x: 229,
    y: 145,
    date: 28,
  },
];
