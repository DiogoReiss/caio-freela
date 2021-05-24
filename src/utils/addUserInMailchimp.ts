import mailchimp from '@mailchimp/mailchimp_marketing';
import md5 from "md5";


export default async function addUser(email: string) {
  const subscriberHash = md5(email)

  mailchimp.setConfig({
    apiKey: "e48accde0c8479a3ea4ce3baefd37c78",
    server: "us1"
  });

  const response = await mailchimp.lists.setListMember(`c66e9fce82`, subscriberHash, {
    email_address: email,
    status_if_new: 'subscribed'
  })
  return console.log(response)
}
