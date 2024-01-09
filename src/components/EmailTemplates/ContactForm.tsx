import {FC} from 'react';

import {EmailTemplateProps} from '../../data/dataDef';

export const EmailTemplate: FC<Readonly<EmailTemplateProps>> = ({
  name,
  email,
  message
}) => (
  <div>
    <p>Hello r3garciaz,</p>
    <p>
      {name} has submitted the contact form on your website. Their
      email is {email}!
    </p>
    <p>
      Their message is:
      <br />
      {message}
    </p>
    <p>
      Regards,
      <br />
      Coffee
    </p>
  </div>
);