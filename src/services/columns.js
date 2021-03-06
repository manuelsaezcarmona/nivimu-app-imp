export const columns = [
  {
    title: 'Nombre',
    dataIndex: 'fullname',
    width: 150,
    key: 'fullname',
    defaultSortOrder: 'descend',
    sorter: (a, b) => a.fullname.length - b.fullname.length
  },
  {
    title: 'Email',
    dataIndex: 'email',
    width: 150,
    key: 'email'
  },

  {
    title: 'Ciudad',
    dataIndex: 'city',
    width: 150,
    filters: [
      {
        text: 'Gwenborough',
        value: 'Gwenborough'
      },
      {
        text: 'Wisokyburgh',
        value: '"Wisokyburgh"'
      },
      {
        text: 'McKenziehaven',
        value: 'McKenziehaven'
      },
      {
        text: 'South Elvis',
        value: 'South Elvis'
      },
      {
        text: 'Roscoeview',
        value: 'Roscoeview'
      },
      {
        text: 'South Christy',
        value: 'South Christy'
      },
      {
        text: 'Howemouth',
        value: 'Howemouth'
      },
      {
        text: 'Aliyaview',
        value: 'Aliyaview'
      },
      {
        text: 'Bartholomebury',
        value: 'Bartholomebury'
      },
      {
        text: 'Lebsackbury',
        value: 'Lebsackbury'
      }
    ],
    onFilter: (value, record) => record.city.indexOf(value) === 0
  }
];
