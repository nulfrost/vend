import { objectType, extendType } from "nexus";

export const Item = objectType({
  name: "Item",
  definition(t) {
    t.model.id();
    t.model.title();
    t.model.description();
    t.model.price();
    t.model.address();
    t.model.coordinates();
    t.model.updatedAt();
    t.model.user();
  },
});

export const ItemQuery = extendType({
  type: "Query",
  definition(t) {
    t.crud.item();
    t.crud.items({
      ordering: true,
      filtering: true,
      pagination: true,
    });
  },
});
