import axios from "axios";
import { CreateSubscriberParameters } from "../Types";

export async function createSubscriber({
  email,
  name
}: CreateSubscriberParameters) {
  return axios.post(
    `${process.env.REACT_APP_SCORE_ASSOCIATION_SUBSCRIBE_AWS_GATEWAY_URL}/subscribe`,
    {
      data: {
        email,
        name
      }
    }
  );
}
