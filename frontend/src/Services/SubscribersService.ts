import axios from "axios";
import { CreateSubscriberParameters } from "../Types";

export async function createSubscriber({
  email,
  name
}: CreateSubscriberParameters) {
  try {
    const mailerLiteApiToken = process.env.REACT_APP_MAILERLITE_API_TOKEN;
    const mailerLiteSubscribersGroupId =
      process.env.REACT_APP_MAILERLITE_SUBSCRIBERS_GROUP_ID;
    const mailerLiteEndpoint = `https://connect.mailerlite.com/api/subscribers`;
    if (!mailerLiteApiToken) {
      console.log("Missing API key for mailing service");
      return;
    }
    const response = await axios.post(
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

    // Handle the response from MailerLite as needed
    console.log("Subscriber created:", response.data);
  } catch (error) {
    console.error("Error creating subscriber:", error);
  }
}
