"use strict";
/**
 * subscriber service
 */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const strapi_1 = require("@strapi/strapi");
const axios_1 = __importDefault(require("axios"));
const URL = `${process.env.MAILER_LITE_URL}/api/subscribers`;
exports.default = strapi_1.factories.createCoreService("api::subscriber.subscriber", () => ({
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
            axios_1.default
                .post(URL, {
                email: result.email,
            }, config)
                .then(() => {
                resolve(result);
            })
                .catch((err) => {
                reject(err);
            });
        });
        return result;
    },
}));
