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
      name: 'telephone',
      type: 'string',
      title: 'Phone Number',
    },
    {
      name: 'service',
      type: 'string',
      title: 'Service',
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
