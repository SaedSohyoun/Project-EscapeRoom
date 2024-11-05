const rooms = [
    {
      id: 1,
      title: 'Kamer 1: De Vergeten Bibliotheek',
      timer: 100,
      image: '/img/Room1.jpeg',
      puzzles: [
        {
          id: 1,
          description: 'Wat is de hoofdstad van Frankrijk?',
          correctAnswer: 'Parijs',
        },
        {
          id: 2,
          description: 'Hoeveel maanden hebben 28 dagen?',
          correctAnswer: '12',
        },
      ],
    },
    {
      id: 2,
      title: 'Kamer 2: Het Spookhuis',
      timer: 100,
      puzzles: [
        {
          id: 3,
          description: 'Ik ben geen levend wezen, maar ik kan wel groeien. Wat ben ik?',
          correctAnswer: 'vuur',
        },
        {
          id: 4,
          description: 'Wat is 5 x 8 - 6 ?',
          correctAnswer: '34',
        },
      ],
    },
    {
      id: 3,
      title: 'Kamer 3: De Ondergrondse Gang',
      timer: 100,
      puzzles: [
        {
          id: 5,
          description: 'Wat is 5 x 5 ?',
          correctAnswer: '25',
        },
        {
          id: 6,
          description: 'Wat is 8 x 7 ?',
          correctAnswer: '56',
        },
      ],
    },
  ];
  
  export default rooms;  