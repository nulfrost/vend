import { objectType, extendType } from "nexus";

export const User = objectType({
  name: "User",
  definition(t) {
    t.model.id();
    t.model.name();
    t.model.image();
    t.model.createdAt();
    t.model.item();
  },
});

export const UserQuery = extendType({
  type: "Query",
  definition(t) {
    t.crud.user();
  },
});
