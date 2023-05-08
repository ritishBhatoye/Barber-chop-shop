import sanity from '../../utils/sanityClient';
import { sendTelegram } from '../../utils/telegram';

export default async function handler(req, res) {
  const { method, body } = req;
  // console.log('customer', method, body);

  if (method === 'POST') {
    const { name, telephone, message } = body;

    const contact = {
      _type: 'contact',
      telephone,
      name: name,
      message: message,
    };

    const result = await sanity
      .create(contact)
      .then((response) => {
        return response;
      })
      .catch((err) => {
        return res.status(400).send(`Error creating order: ${err}`);
      });

    // await sendTelegramUpdate(result);
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

    return res.status(200).send(result);
  }
  return res.status(405).end(`Method ${method} Not Allowed`);
}
