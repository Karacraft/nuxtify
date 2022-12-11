// Generated by Xata Codegen 0.21.0. Please do not edit.
import { buildClient } from "@xata.io/client";
/** @typedef { import('./types').SchemaTables } SchemaTables */
/** @type { SchemaTables } */
const tables = [
  {
    name: "Posts",
    columns: [
      { name: "title", type: "string" },
      { name: "labels", type: "multiple" },
      { name: "slug", type: "string" },
      { name: "text", type: "text" },
      { name: "author", type: "link", link: { table: "Users" } },
      { name: "createdAt", type: "datetime" },
      { name: "views", type: "int" },
    ],
  },
  {
    name: "Users",
    columns: [
      { name: "name", type: "string" },
      { name: "email", type: "email" },
      { name: "bio", type: "text" },
    ],
  },
];
/** @type { import('../../client/src').ClientConstructor<{}> } */
const DatabaseClient = buildClient();
const defaultOptions = {
  databaseURL: "https://Karacraft-s-workspace-6ushdu.us-east-1.xata.sh/db/test",
};
/** @typedef { import('./types').DatabaseSchema } DatabaseSchema */
/** @extends DatabaseClient<DatabaseSchema> */
export class XataClient extends DatabaseClient {
  constructor(options) {
    super({ ...defaultOptions, ...options }, tables);
  }
}
let instance = undefined;
/** @type { () => XataClient } */
export const getXataClient = () => {
  if (instance) return instance;
  instance = new XataClient();
  return instance;
};
