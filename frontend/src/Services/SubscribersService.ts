import axios from "axios";
import { CreateSubscriberParameters } from "../Types";

export async function createSubscriber({
  email,
  name
}: CreateSubscriberParameters) {
  const mailerLiteApiToken = process.env.REACT_APP_MAILERLITE_API_TOKEN;
  const mailerLiteSubscribersGroupId =
    process.env.REACT_APP_MAILERLITE_SUBSCRIBERS_GROUP_ID;
  const mailerLiteEndpoint = `https://connect.mailerlite.com/api/subscribers`;
  if (!mailerLiteApiToken) {
    throw new Error("Missing API key for mailing service");
  }
  return axios.post(
    mailerLiteEndpoint,
    {
      email,
      fields: {
        name
      },
      groups: [mailerLiteSubscribersGroupId]
    },
    {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `Bearer ${mailerLiteApiToken}`
      }
    }
  );
}
