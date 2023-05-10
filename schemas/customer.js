export default {
  name: 'customer',
  title: 'Customer',
  type: 'document',
  fields: [
    {
      name: 'email',
      title: 'Email',
      type: 'string',
      readOnly: true,
    },
    {
      name: 'fullName',
      title: 'Full Name',
      type: 'string',
    },
    {
      name: 'phoneNumber',
      title: 'Phone Number',
      type: 'string',
    },
    {
      name: 'password',
      title: 'Password',
      type: 'string',
      readOnly: true,
      //   hidden: true,
    },
    {
      name: 'resetPasswordToken',
      title: 'Reset Password Token',
      type: 'string',
      readOnly: true,
      //   hidden: true,
    },
    {
      name: 'status',
      title: 'Status',
      type: 'string',
      options: {
        list: ['active', 'notActive', 'banned'],
        layout: 'dropdown',
      },
    },
  ],
}
