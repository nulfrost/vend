import { nexusPrisma } from "nexus-plugin-prisma";
import { makeSchema } from "nexus";
import * as types from "../src/schema/index";
import path from "path";

export const schema = makeSchema({
  types,
  outputs: {
    typegen: path.join(process.cwd(), "generated/nexus-typegen.ts"),
    schema: path.join(process.cwd(), "generated/schema.graphql"),
  },
  plugins: [nexusPrisma({ experimentalCRUD: true })],
});
