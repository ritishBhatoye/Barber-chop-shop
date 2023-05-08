export default {
  name: 'reservation',
  type: 'document',
  title: 'Reservations',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Name',
    },
    {
      name: 'service',
      type: 'string',
      title: 'Service',
    },
    {
      name: 'telephone',
      type: 'number',
      title: 'Phone Number',
    },
    {
      name: 'date',
      type: 'string',
      title: 'Appointment date',
    },
    {
      name: 'message',
      type: 'text',
      title: 'Message',
    },
  ],
}
