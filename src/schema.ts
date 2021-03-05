import { nexusPrisma } from "nexus-plugin-prisma";
import { makeSchema } from "nexus";

export const schema = makeSchema({
  types: [],
  plugins: [nexusPrisma({ experimentalCRUD: true })],
});
