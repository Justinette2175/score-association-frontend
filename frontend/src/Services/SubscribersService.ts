import axios from "axios";
import { CreateSubscriberParameters } from "../Types";

export async function createSubscriber({
  email,
  name
}: CreateSubscriberParameters) {
  try {
    const mailerLiteApiKey = process.env.REACT_APP_MAILERLITE_API_KEY;
    const mailerLiteListId = process.env.REACT_APP_MAILERLITE_LIST_ID;
    const mailerLiteEndpoint = `https://api.mailerlite.com/api/v2/groups/${mailerLiteListId}/subscribers`;
    if (!mailerLiteApiKey) {
      console.log("Missing API key for mailing service");
      return;
    }
    const response = await axios.post(
      mailerLiteEndpoint,
      {
        email,
        name
        // Add other subscriber data as needed
      },
      {
        headers: {
          "Content-Type": "application/json",
          "X-MailerLite-ApiKey": mailerLiteApiKey
        }
      }
    );

    // Handle the response from MailerLite as needed
    console.log("Subscriber created:", response.data);
  } catch (error) {
    console.error("Error creating subscriber:", error);
  }
}
