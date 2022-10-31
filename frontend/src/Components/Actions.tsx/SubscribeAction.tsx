import { FormEventHandler, useCallback, useState } from "react";
import { useCreateSubscriberMutation } from "../../ReactQuery/subscribers.mutations";
import { SubscribeActionData } from "../../Types";
import { Button } from "../Button";
import { Input } from "../Input";

export function SubscribeAction({
  confirmationMessage,
  buttonText,
  emailPlaceholder,
  namePlaceholder
}: Omit<SubscribeActionData, "id">) {
  const [email, setEmail] = useState<string>("");
  const [name, setName] = useState<string>("");

  const createSubscriberMutation = useCreateSubscriberMutation();

  const handleSubmit: FormEventHandler<HTMLFormElement> = useCallback(
    (e) => {
      e.preventDefault();
      createSubscriberMutation.mutate({ email, name });
    },
    [createSubscriberMutation, email, name]
  );

  return createSubscriberMutation.isSuccess ? (
    <p>{confirmationMessage}</p>
  ) : (
    <form onSubmit={handleSubmit} className="w-full flex justify-center">
      <div className="max-w-sm grid grid-flow-row gap-2 w-full">
        <div>
          <Input
            className="w-full"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder={namePlaceholder}
          />
        </div>

        <div>
          <Input
            className="w-full"
            value={email}
            type="email"
            placeholder={emailPlaceholder}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="flex justify-end">
          <Button type="submit" label={buttonText} disabled={!email || !name} />
        </div>
      </div>
    </form>
  );
}
