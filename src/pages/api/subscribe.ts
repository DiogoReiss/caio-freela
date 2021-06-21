import axios from 'axios';

export default async function handler(req, res) {
  if(req.method === 'POST') {
    const { email, emailStatus } = req.body;


    const { data, status } = await axios
      .post('https://us1.api.mailchimp.com/3.0/lists/c66e9fce82/members?skip_merge_validation=TRUE',
      {
        email_address: email, 
        status: emailStatus
      },
      {
        headers: {
          authorization: 'Bearer e48accde0c8479a3ea4ce3baefd37c78'
        },
      },
    )
    if(status === 200) {
      res.status(200).json('E-MAIL registrado!');
    } else {
      res.status(403).json('unauthorized');
    }
  }
}