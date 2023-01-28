import axios from "axios";
import { CreateSubscriberParameters } from "../Types";

export const AxiosSubscribeInstance = axios.create({
  baseURL: process.env.SCORE_ASSOCIATION_SUBSCRIBE_AWS_GATEWAY_URL,
  timeout: 1000
});

const SUBSCRIBERS_ROUTE = "/subscribe";

export async function createSubscriber({
  email,
  name
}: CreateSubscriberParameters) {
  return AxiosSubscribeInstance.post(SUBSCRIBERS_ROUTE, {
    data: {
      email,
      name
    }
  });
}
