import type {NextApiRequest, NextApiResponse} from 'next';

import {ContactFormTemplate} from '../../components/EmailTemplates/ContactForm';
import {emailService} from '../../data/data';
import {resend} from '../../lib/resend';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const body = JSON.parse(req.body);
  const {name, email, message} = body;

  const {data, error} = await resend.emails.send({
    from: `${emailService.fromName} <${emailService.fromEmail}>`,
    to: [`${emailService.toEmail}`],
    subject: `${emailService.subject}`,
    text: '',
    react: ContactFormTemplate({name: name, email: email, message: message}),
  });

  if (error) {
    return res.status(400).json(error);
  }

  res.status(200).json(data);
};
