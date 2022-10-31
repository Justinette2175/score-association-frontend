import { useMutation } from "react-query";
import { createSubscriber } from "../Services/SubscribersService";
import { CreateSubscriberParameters } from "../Types";

export function useCreateSubscriberMutation() {
  return useMutation((params: CreateSubscriberParameters) => {
    return createSubscriber(params);
  });
}
