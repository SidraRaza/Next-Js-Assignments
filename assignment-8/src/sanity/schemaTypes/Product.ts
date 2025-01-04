import { defineField, defineType } from "sanity";

export default  defineType({
  name: "product",
  type: "document",
  title: "Products",
  fields: [
    defineField({
      name: "name",
      type: "string",
      title: "Title",
    }),
   
    defineField({
      name: "mindescription",
      type: "string",
      title: "describe",
    }),
    defineField({
      name: "mandescription",
      type: "string",
      title: "Description",
    }),
    defineField({
      name: "image",
      type: "image",
      title: "Image",
      options: { hotspot: true },
    }),
    defineField({
      name: "img",
      type: "image",
      title: "Img",
      options: { hotspot: true },
    }),
    defineField({
      name: "id",
      type: "string",
      title: "ID",
    }),
    defineField({
      name: "sergy",
      type: "string",
      title: "Sergy",
    }),
    defineField({
      name: "ceo",
      type: "string",
      title: "Ceo",
    }),
  ],
});
