import sanity from './sanityClient';
import { sendTelegram } from './telegram';

export const createContact = async ({ telephone, name, message }) => {
  const contact = {
    _type: 'contact',
    telephone,
    name: name,
    message: message,
  };
  const result = await sanity.create(contact);
  try {
    const url = `https://thebarbershop.sanity.studio/desk/contact;${result._id}`;
    await sendTelegram(`
*New contact from website*
*Name:* ${name}
*Mobile No:* ${telephone}
*Message:* ${message}
*Link:* ${url}
`);
  } catch (error) {
    console.log(`Telegram failed: ${error}`);
  }
};

export const createReservation = async ({
  telephone,
  name,
  message,
  service,
  date,
}) => {
  const reservation = {
    _type: 'reservation',
    telephone: telephone,
    name: name,
    message: message,
    service: service,
    date: date,
  };
  const result = await sanity.create(reservation);
  try {
    const url = `https://thebarbershop.sanity.studio/desk/reservation;${result._id}`;
    await sendTelegram(`
*New reservation from website*
*Name:* ${name}
*Mobile No:* ${telephone}
*Service:* ${service}
*Appointment date:* ${date}
*Message:* ${message}
*Link:* ${url}
`);
  } catch (error) {
    console.log(`Telegram failed: ${error}`);
  }
};
