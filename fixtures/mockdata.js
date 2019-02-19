const mockData = [
  {
    id: 0,
    user_name: 'Nick Anchutin',
    tasks: [
      {
        id: 0,
        name: 'BB-10: Front-end',
        start_time: 'Tue Feb 19 2019 11:31:00 GMT+0300 (MSK)',
        end_time: 'Tue Feb 19 2019 12:31:00 GMT+0300 (MSK)',
        duration: '3600000',
        link: 'https://lurkmore.to/JS',
      },
      {
        id: 1,
        name: 'BB-11: Testing',
        start_time: 'Tue Feb 19 2019 12:32:00 GMT+0300 (MSK)',
        end_time: 'Tue Feb 19 2019 18:02:00 GMT+0300 (MSK)',
        duration: '19800000',
        link: 'https://lurkmore.to/JS',
      },
      {
        id: 2,
        name: 'BB-11: Testing',
        start_time: 'Tue Feb 19 2019 18:04:00 GMT+0300 (MSK)',
        end_time: 'Tue Feb 19 2019 20:04:00 GMT+0300 (MSK)',
        duration: '7200000',
        link: 'https://lurkmore.to/JS',
      },
      {
        id: 3,
        name: 'BB-11: Testing',
        start_time: 'Tue Feb 19 2019 20:05:00 GMT+0300 (MSK)',
        end_time: 'Tue Feb 19 2019 21:35:00 GMT+0300 (MSK)',
        duration: '5400000',
        link: 'https://lurkmore.to/JS',
      }
    ]
  },
  {
    id: 1,
    user_name: 'Elon Musk',
    tasks: [
      {
        id: 0,
        name: 'SX: make space greate again!',
        start_time: 'Tue Feb 19 2019 8:00:00 GMT+0300 (MSK)',
        end_time: 'Tue Feb 19 2019 11:30:00 GMT+0300 (MSK)',
        duration: '12600000',
        link: 'https://lurkmore.to/JS',
      },
      {
        id: 1,
        name: 'SX: make space greate again!',
        start_time: 'Tue Feb 19 2019 11:30:00 GMT+0300 (MSK)',
        end_time: 'Tue Feb 19 2019 15:00:00 GMT+0300 (MSK)',
        duration: '12600000',
        link: 'https://lurkmore.to/JS',
      },
      {
        id: 2,
        name: 'SX: make space greate again!',
        start_time: 'Tue Feb 19 2019 15:30:00 GMT+0300 (MSK)',
        end_time: 'Tue Feb 19 2019 19:00:00 GMT+0300 (MSK)',
        duration: '12600000',
        link: 'https://lurkmore.to/JS',
      }
    ]
  },
  {
    id: 2,
    user_name: 'Elon Musk',
    tasks: [
      {
        id: 0,
        name: 'SX: make space greate again!',
        start_time: 'Tue Feb 19 2019 8:00:00 GMT+0300 (MSK)',
        end_time: 'Tue Feb 19 2019 11:30:00 GMT+0300 (MSK)',
        duration: '12600000',
        link: 'https://lurkmore.to/JS',
      },
      {
        id: 1,
        name: 'SX: make space greate again!',
        start_time: 'Tue Feb 19 2019 11:30:00 GMT+0300 (MSK)',
        end_time: 'Tue Feb 19 2019 15:00:00 GMT+0300 (MSK)',
        duration: '12600000',
        link: 'https://lurkmore.to/JS',
      },
      {
        id: 2,
        name: 'SX: make space greate again!',
        start_time: 'Tue Feb 19 2019 15:30:00 GMT+0300 (MSK)',
        end_time: 'Tue Feb 19 2019 19:00:00 GMT+0300 (MSK)',
        duration: '12600000',
        link: 'https://lurkmore.to/JS',
      }
    ]
  },
  {
    id: 3,
    user_name: 'Elon Musk',
    tasks: [
      {
        id: 0,
        name: 'SX: make space greate again!',
        start_time: 'Tue Feb 19 2019 8:00:00 GMT+0300 (MSK)',
        end_time: 'Tue Feb 19 2019 11:30:00 GMT+0300 (MSK)',
        duration: '12600000',
        link: 'https://lurkmore.to/JS',
      },
      {
        id: 1,
        name: 'SX: make space greate again!',
        start_time: 'Tue Feb 19 2019 11:30:00 GMT+0300 (MSK)',
        end_time: 'Tue Feb 19 2019 15:00:00 GMT+0300 (MSK)',
        duration: '12600000',
        link: 'https://lurkmore.to/JS',
      },
      {
        id: 2,
        name: 'SX: make space greate again!',
        start_time: 'Tue Feb 19 2019 15:30:00 GMT+0300 (MSK)',
        end_time: 'Tue Feb 19 2019 19:00:00 GMT+0300 (MSK)',
        duration: '12600000',
        link: 'https://lurkmore.to/JS',
      }
    ]
  },
  {
    id: 4,
    user_name: 'Elon Musk',
    tasks: [
      {
        id: 0,
        name: 'SX: make space greate again!',
        start_time: 'Tue Feb 19 2019 8:00:00 GMT+0300 (MSK)',
        end_time: 'Tue Feb 19 2019 11:30:00 GMT+0300 (MSK)',
        duration: '12600000',
        link: 'https://lurkmore.to/JS',
      },
      {
        id: 1,
        name: 'SX: make space greate again!',
        start_time: 'Tue Feb 19 2019 11:30:00 GMT+0300 (MSK)',
        end_time: 'Tue Feb 19 2019 15:00:00 GMT+0300 (MSK)',
        duration: '12600000',
        link: 'https://lurkmore.to/JS',
      },
      {
        id: 2,
        name: 'SX: make space greate again!',
        start_time: 'Tue Feb 19 2019 15:30:00 GMT+0300 (MSK)',
        end_time: 'Tue Feb 19 2019 19:00:00 GMT+0300 (MSK)',
        duration: '12600000',
        link: 'https://lurkmore.to/JS',
      }
    ]
  },
  {
    id: 5,
    user_name: 'Elon Musk',
    tasks: [
      {
        id: 0,
        name: 'SX: make space greate again!',
        start_time: 'Tue Feb 19 2019 8:00:00 GMT+0300 (MSK)',
        end_time: 'Tue Feb 19 2019 11:30:00 GMT+0300 (MSK)',
        duration: '12600000',
        link: 'https://lurkmore.to/JS',
      },
      {
        id: 1,
        name: 'SX: make space greate again!',
        start_time: 'Tue Feb 19 2019 11:30:00 GMT+0300 (MSK)',
        end_time: 'Tue Feb 19 2019 15:00:00 GMT+0300 (MSK)',
        duration: '12600000',
        link: 'https://lurkmore.to/JS',
      },
      {
        id: 2,
        name: 'SX: make space greate again!',
        start_time: 'Tue Feb 19 2019 15:30:00 GMT+0300 (MSK)',
        end_time: 'Tue Feb 19 2019 19:00:00 GMT+0300 (MSK)',
        duration: '12600000',
        link: 'https://lurkmore.to/JS',
      }
    ]
  },
  {
    id: 6,
    user_name: 'Elon Musk',
    tasks: [
      {
        id: 0,
        name: 'SX: make space greate again!',
        start_time: 'Tue Feb 19 2019 8:00:00 GMT+0300 (MSK)',
        end_time: 'Tue Feb 19 2019 11:30:00 GMT+0300 (MSK)',
        duration: '12600000',
        link: 'https://lurkmore.to/JS',
      },
      {
        id: 1,
        name: 'SX: make space greate again!',
        start_time: 'Tue Feb 19 2019 11:30:00 GMT+0300 (MSK)',
        end_time: 'Tue Feb 19 2019 15:00:00 GMT+0300 (MSK)',
        duration: '12600000',
        link: 'https://lurkmore.to/JS',
      },
      {
        id: 2,
        name: 'SX: make space greate again!',
        start_time: 'Tue Feb 19 2019 15:30:00 GMT+0300 (MSK)',
        end_time: 'Tue Feb 19 2019 19:00:00 GMT+0300 (MSK)',
        duration: '12600000',
        link: 'https://lurkmore.to/JS',
      }
    ]
  },
  {
    id: 7,
    user_name: 'Elon Musk',
    tasks: [
      {
        id: 0,
        name: 'SX: make space greate again!',
        start_time: 'Tue Feb 19 2019 8:00:00 GMT+0300 (MSK)',
        end_time: 'Tue Feb 19 2019 11:30:00 GMT+0300 (MSK)',
        duration: '12600000',
        link: 'https://lurkmore.to/JS',
      },
      {
        id: 1,
        name: 'SX: make space greate again!',
        start_time: 'Tue Feb 19 2019 11:30:00 GMT+0300 (MSK)',
        end_time: 'Tue Feb 19 2019 15:00:00 GMT+0300 (MSK)',
        duration: '12600000',
        link: 'https://lurkmore.to/JS',
      },
      {
        id: 2,
        name: 'SX: make space greate again!',
        start_time: 'Tue Feb 19 2019 15:30:00 GMT+0300 (MSK)',
        end_time: 'Tue Feb 19 2019 19:00:00 GMT+0300 (MSK)',
        duration: '12600000',
        link: 'https://lurkmore.to/JS',
      }
    ]
  },
  {
    id: 8,
    user_name: 'Elon Musk',
    tasks: [
      {
        id: 0,
        name: 'SX: make space greate again!',
        start_time: 'Tue Feb 19 2019 8:00:00 GMT+0300 (MSK)',
        end_time: 'Tue Feb 19 2019 11:30:00 GMT+0300 (MSK)',
        duration: '12600000',
        link: 'https://lurkmore.to/JS',
      },
      {
        id: 1,
        name: 'SX: make space greate again!',
        start_time: 'Tue Feb 19 2019 11:30:00 GMT+0300 (MSK)',
        end_time: 'Tue Feb 19 2019 15:00:00 GMT+0300 (MSK)',
        duration: '12600000',
        link: 'https://lurkmore.to/JS',
      },
      {
        id: 2,
        name: 'SX: make space greate again!',
        start_time: 'Tue Feb 19 2019 15:30:00 GMT+0300 (MSK)',
        end_time: 'Tue Feb 19 2019 19:00:00 GMT+0300 (MSK)',
        duration: '12600000',
        link: 'https://lurkmore.to/JS',
      }
    ]
  },
  {
    id: 9,
    user_name: 'Elon Musk',
    tasks: [
      {
        id: 0,
        name: 'SX: make space greate again!',
        start_time: 'Tue Feb 19 2019 8:00:00 GMT+0300 (MSK)',
        end_time: 'Tue Feb 19 2019 11:30:00 GMT+0300 (MSK)',
        duration: '12600000',
        link: 'https://lurkmore.to/JS',
      },
      {
        id: 1,
        name: 'SX: make space greate again!',
        start_time: 'Tue Feb 19 2019 11:30:00 GMT+0300 (MSK)',
        end_time: 'Tue Feb 19 2019 15:00:00 GMT+0300 (MSK)',
        duration: '12600000',
        link: 'https://lurkmore.to/JS',
      },
      {
        id: 2,
        name: 'SX: make space greate again!',
        start_time: 'Tue Feb 19 2019 15:30:00 GMT+0300 (MSK)',
        end_time: 'Tue Feb 19 2019 19:00:00 GMT+0300 (MSK)',
        duration: '12600000',
        link: 'https://lurkmore.to/JS',
      }
    ]
  },
  {
    id: 10,
    user_name: 'Elon Musk',
    tasks: [
      {
        id: 0,
        name: 'SX: make space greate again!',
        start_time: 'Tue Feb 19 2019 8:00:00 GMT+0300 (MSK)',
        end_time: 'Tue Feb 19 2019 11:30:00 GMT+0300 (MSK)',
        duration: '12600000',
        link: 'https://lurkmore.to/JS',
      },
      {
        id: 1,
        name: 'SX: make space greate again!',
        start_time: 'Tue Feb 19 2019 11:30:00 GMT+0300 (MSK)',
        end_time: 'Tue Feb 19 2019 15:00:00 GMT+0300 (MSK)',
        duration: '12600000',
        link: 'https://lurkmore.to/JS',
      },
      {
        id: 2,
        name: 'SX: make space greate again!',
        start_time: 'Tue Feb 19 2019 15:30:00 GMT+0300 (MSK)',
        end_time: 'Tue Feb 19 2019 19:00:00 GMT+0300 (MSK)',
        duration: '12600000',
        link: 'https://lurkmore.to/JS',
      }
    ]
  },
  {
    id: 11,
    user_name: 'Elon Musk',
    tasks: [
      {
        id: 0,
        name: 'SX: make space greate again!',
        start_time: 'Tue Feb 19 2019 8:00:00 GMT+0300 (MSK)',
        end_time: 'Tue Feb 19 2019 11:30:00 GMT+0300 (MSK)',
        duration: '12600000',
        link: 'https://lurkmore.to/JS',
      },
      {
        id: 1,
        name: 'SX: make space greate again!',
        start_time: 'Tue Feb 19 2019 11:30:00 GMT+0300 (MSK)',
        end_time: 'Tue Feb 19 2019 15:00:00 GMT+0300 (MSK)',
        duration: '12600000',
        link: 'https://lurkmore.to/JS',
      },
      {
        id: 2,
        name: 'SX: make space greate again!',
        start_time: 'Tue Feb 19 2019 15:30:00 GMT+0300 (MSK)',
        end_time: 'Tue Feb 19 2019 19:00:00 GMT+0300 (MSK)',
        duration: '12600000',
        link: 'https://lurkmore.to/JS',
      }
    ]
  },
  {
    id: 12,
    user_name: 'Elon Musk',
    tasks: [
      {
        id: 0,
        name: 'SX: make space greate again!',
        start_time: 'Tue Feb 19 2019 8:00:00 GMT+0300 (MSK)',
        end_time: 'Tue Feb 19 2019 11:30:00 GMT+0300 (MSK)',
        duration: '12600000',
        link: 'https://lurkmore.to/JS',
      },
      {
        id: 1,
        name: 'SX: make space greate again!',
        start_time: 'Tue Feb 19 2019 11:30:00 GMT+0300 (MSK)',
        end_time: 'Tue Feb 19 2019 15:00:00 GMT+0300 (MSK)',
        duration: '12600000',
        link: 'https://lurkmore.to/JS',
      },
      {
        id: 2,
        name: 'SX: make space greate again!',
        start_time: 'Tue Feb 19 2019 15:30:00 GMT+0300 (MSK)',
        end_time: 'Tue Feb 19 2019 19:00:00 GMT+0300 (MSK)',
        duration: '12600000',
        link: 'https://lurkmore.to/JS',
      }
    ]
  },
  {
    id: 13,
    user_name: 'Elon Musk',
    tasks: [
      {
        id: 0,
        name: 'SX: make space greate again!',
        start_time: 'Tue Feb 19 2019 8:00:00 GMT+0300 (MSK)',
        end_time: 'Tue Feb 19 2019 11:30:00 GMT+0300 (MSK)',
        duration: '12600000',
        link: 'https://lurkmore.to/JS',
      },
      {
        id: 1,
        name: 'SX: make space greate again!',
        start_time: 'Tue Feb 19 2019 11:30:00 GMT+0300 (MSK)',
        end_time: 'Tue Feb 19 2019 15:00:00 GMT+0300 (MSK)',
        duration: '12600000',
        link: 'https://lurkmore.to/JS',
      },
      {
        id: 2,
        name: 'SX: make space greate again!',
        start_time: 'Tue Feb 19 2019 15:30:00 GMT+0300 (MSK)',
        end_time: 'Tue Feb 19 2019 19:00:00 GMT+0300 (MSK)',
        duration: '12600000',
        link: 'https://lurkmore.to/JS',
      }
    ]
  },
  {
    id: 14,
    user_name: 'Elon Musk',
    tasks: [
      {
        id: 0,
        name: 'SX: make space greate again!',
        start_time: 'Tue Feb 19 2019 8:00:00 GMT+0300 (MSK)',
        end_time: 'Tue Feb 19 2019 11:30:00 GMT+0300 (MSK)',
        duration: '12600000',
        link: 'https://lurkmore.to/JS',
      },
      {
        id: 1,
        name: 'SX: make space greate again!',
        start_time: 'Tue Feb 19 2019 11:30:00 GMT+0300 (MSK)',
        end_time: 'Tue Feb 19 2019 15:00:00 GMT+0300 (MSK)',
        duration: '12600000',
        link: 'https://lurkmore.to/JS',
      },
      {
        id: 2,
        name: 'SX: make space greate again!',
        start_time: 'Tue Feb 19 2019 15:30:00 GMT+0300 (MSK)',
        end_time: 'Tue Feb 19 2019 19:00:00 GMT+0300 (MSK)',
        duration: '12600000',
        link: 'https://lurkmore.to/JS',
      }
    ]
  },
  {
    id: 15,
    user_name: 'Elon Musk',
    tasks: [
      {
        id: 0,
        name: 'SX: make space greate again!',
        start_time: 'Tue Feb 19 2019 8:00:00 GMT+0300 (MSK)',
        end_time: 'Tue Feb 19 2019 11:30:00 GMT+0300 (MSK)',
        duration: '12600000',
        link: 'https://lurkmore.to/JS',
      },
      {
        id: 1,
        name: 'SX: make space greate again!',
        start_time: 'Tue Feb 19 2019 11:30:00 GMT+0300 (MSK)',
        end_time: 'Tue Feb 19 2019 15:00:00 GMT+0300 (MSK)',
        duration: '12600000',
        link: 'https://lurkmore.to/JS',
      },
      {
        id: 2,
        name: 'SX: make space greate again!',
        start_time: 'Tue Feb 19 2019 15:30:00 GMT+0300 (MSK)',
        end_time: 'Tue Feb 19 2019 19:00:00 GMT+0300 (MSK)',
        duration: '12600000',
        link: 'https://lurkmore.to/JS',
      }
    ]
  },
  {
    id: 16,
    user_name: 'Elon Musk',
    tasks: [
      {
        id: 0,
        name: 'SX: make space greate again!',
        start_time: 'Tue Feb 19 2019 8:00:00 GMT+0300 (MSK)',
        end_time: 'Tue Feb 19 2019 11:30:00 GMT+0300 (MSK)',
        duration: '12600000',
        link: 'https://lurkmore.to/JS',
      },
      {
        id: 1,
        name: 'SX: make space greate again!',
        start_time: 'Tue Feb 19 2019 11:30:00 GMT+0300 (MSK)',
        end_time: 'Tue Feb 19 2019 15:00:00 GMT+0300 (MSK)',
        duration: '12600000',
        link: 'https://lurkmore.to/JS',
      },
      {
        id: 2,
        name: 'SX: make space greate again!',
        start_time: 'Tue Feb 19 2019 15:30:00 GMT+0300 (MSK)',
        end_time: 'Tue Feb 19 2019 19:00:00 GMT+0300 (MSK)',
        duration: '12600000',
        link: 'https://lurkmore.to/JS',
      }
    ]
  },
  {
    id: 17,
    user_name: 'Elon Musk',
    tasks: [
      {
        id: 0,
        name: 'SX: make space greate again!',
        start_time: 'Tue Feb 19 2019 8:00:00 GMT+0300 (MSK)',
        end_time: 'Tue Feb 19 2019 11:30:00 GMT+0300 (MSK)',
        duration: '12600000',
        link: 'https://lurkmore.to/JS',
      },
      {
        id: 1,
        name: 'SX: make space greate again!',
        start_time: 'Tue Feb 19 2019 11:30:00 GMT+0300 (MSK)',
        end_time: 'Tue Feb 19 2019 15:00:00 GMT+0300 (MSK)',
        duration: '12600000',
        link: 'https://lurkmore.to/JS',
      },
      {
        id: 2,
        name: 'SX: make space greate again!',
        start_time: 'Tue Feb 19 2019 15:30:00 GMT+0300 (MSK)',
        end_time: 'Tue Feb 19 2019 19:00:00 GMT+0300 (MSK)',
        duration: '12600000',
        link: 'https://lurkmore.to/JS',
      }
    ]
  },
  {
    id: 18,
    user_name: 'Elon Musk',
    tasks: [
      {
        id: 0,
        name: 'SX: make space greate again!',
        start_time: 'Tue Feb 19 2019 8:00:00 GMT+0300 (MSK)',
        end_time: 'Tue Feb 19 2019 11:30:00 GMT+0300 (MSK)',
        duration: '12600000',
        link: 'https://lurkmore.to/JS',
      },
      {
        id: 1,
        name: 'SX: make space greate again!',
        start_time: 'Tue Feb 19 2019 11:30:00 GMT+0300 (MSK)',
        end_time: 'Tue Feb 19 2019 15:00:00 GMT+0300 (MSK)',
        duration: '12600000',
        link: 'https://lurkmore.to/JS',
      },
      {
        id: 2,
        name: 'SX: make space greate again!',
        start_time: 'Tue Feb 19 2019 15:30:00 GMT+0300 (MSK)',
        end_time: 'Tue Feb 19 2019 19:00:00 GMT+0300 (MSK)',
        duration: '12600000',
        link: 'https://lurkmore.to/JS',
      }
    ]
  },
  {
    id: 19,
    user_name: 'Elon Musk',
    tasks: [
      {
        id: 0,
        name: 'SX: make space greate again!',
        start_time: 'Tue Feb 19 2019 8:00:00 GMT+0300 (MSK)',
        end_time: 'Tue Feb 19 2019 11:30:00 GMT+0300 (MSK)',
        duration: '12600000',
        link: 'https://lurkmore.to/JS',
      },
      {
        id: 1,
        name: 'SX: make space greate again!',
        start_time: 'Tue Feb 19 2019 11:30:00 GMT+0300 (MSK)',
        end_time: 'Tue Feb 19 2019 15:00:00 GMT+0300 (MSK)',
        duration: '12600000',
        link: 'https://lurkmore.to/JS',
      },
      {
        id: 2,
        name: 'SX: make space greate again!',
        start_time: 'Tue Feb 19 2019 15:30:00 GMT+0300 (MSK)',
        end_time: 'Tue Feb 19 2019 19:00:00 GMT+0300 (MSK)',
        duration: '12600000',
        link: 'https://lurkmore.to/JS',
      }
    ]
  },
];

module.exports = mockData;
