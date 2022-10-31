/**
 * subscriber service
 */

import { factories } from "@strapi/strapi";
import { GenericService } from "@strapi/strapi/lib/core-api/service";
import axios from "axios";

const URL = `${process.env.MAILER_LITE_URL}/api/subscribers`;

export default factories.createCoreService(
  "api::subscriber.subscriber",
  () =>
    ({
      async create(params) {
        const result = await super.create(params);

        const config = {
          headers: {
            Authorization: `Bearer ${process.env.MAILER_LITE_API_KEY}`,
            accept: "application/json",
            "content-type": "application/json",
          },
        };
        await new Promise((resolve, reject) => {
          axios
            .post(
              URL,
              {
                email: result.email,
              },
              config
            )
            .then(() => {
              resolve(result);
            })
            .catch((err) => {
              reject(err);
            });
        });
        return result;
      },
    } as GenericService)
);
