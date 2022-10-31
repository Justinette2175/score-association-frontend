import { CreateSubscriberParameters } from "../Types";
import { AxiosInstance } from "./ApiService";

const SUBSCRIBERS_ROUTE = "/subscribers";

export async function createSubscriber({
  email,
  name,
  title
}: CreateSubscriberParameters) {
  return AxiosInstance.post(SUBSCRIBERS_ROUTE, {
    email,
    name,
    title
  });
}
