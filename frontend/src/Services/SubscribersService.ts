import { CreateSubscriberParameters } from "../Types";
import { AxiosInstance } from "./ApiService";

const SUBSCRIBERS_ROUTE = "/subscribers";

export async function createSubscriber({
  email,
  name
}: CreateSubscriberParameters) {
  return AxiosInstance.post(SUBSCRIBERS_ROUTE, {
    data: {
      email,
      name
    }
  });
}
