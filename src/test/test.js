import extractSpecialAttacks from '../extractSpecialAttacks.js';

describe('extractSpecialAttacks', () => {
  test('correctly extracts special attacks with all fields provided', () => {
    const input = {
      special: [
        {
          id: 8,
          name: 'Двойной выстрел',
          icon: 'http://...',
          description: 'Двойной выстрел наносит двойной урон',
        },
      ],
    };
    const expected = [
      {
        id: 8,
        name: 'Двойной выстрел',
        icon: 'http://...',
        description: 'Двойной выстрел наносит двойной урон',
      },
    ];

    expect(extractSpecialAttacks(input)).toEqual(expected);
  });

  test('sets default description if it is missing', () => {
    const input = {
      special: [
        {
          id: 9,
          name: 'Нокаутирующий удар',
          icon: 'http://...',
          // Описание отсутствует
        },
      ],
    };
    const expected = [
      {
        id: 9,
        name: 'Нокаутирующий удар',
        icon: 'http://...',
        description: 'Описание недоступно',
      },
    ];

    expect(extractSpecialAttacks(input)).toEqual(expected);
  });
});