import { useState } from "react";
import Layout from "~/components/Layout";
import Input from "~/components/shared/Input";
import Label from "~/components/shared/Label";
import Textarea from "~/components/shared/Textarea";

export default function Create() {
  const [image, setImage] = useState(null);

  console.log(image);

  return (
    <Layout title="Post New Ad">
      <div className="px-5 mx-auto pb-11 mt-11 md:mt-36 max-w-screen-2xl">
        <form className="grid grid-cols-2 gap-10">
          <Label htmlFor="title" className="col-span-2">
            Post title
            <Input
              type="text"
              name="title"
              maxLength={30}
              id="title"
              required
              placeholder="A clever title to catch the buyers eye"
            />
          </Label>
          <Label
            htmlFor="images"
            className="max-w-md col-span-2 px-5 py-4 text-white duration-150 rounded-md cursor-pointer bg-primary-500 hover:bg-primary-400 w-max"
          >
            Upload Images
            <Input
              type="file"
              name="images"
              id="images"
              className="absolute mt-5 overflow-hidden opacity-0"
              style={{ zIndex: -1, width: 0.1, height: 0.1 }}
              multiple
              required
              onChange={(e) =>
                setImage(
                  Array.from(e.target.files).map((image) =>
                    URL.createObjectURL(image)
                  )
                )
              }
            />
          </Label>
          <div className="flex flex-col col-span-2 gap-3 lg:flex-row">
            {image &&
              image.map((image) => <img src={image} className="w-64 " />)}
          </div>
          <Label htmlFor="description" className="col-span-2">
            Description
            <Textarea
              name="description"
              id="description"
              placeholder="Short description of the item you're selling"
              maxLength={250}
            />
          </Label>
          <fieldset className="grid col-span-2 gap-3 md:grid-cols-3">
            <Label htmlFor="price">
              Price
              <Input
                type="number"
                name="price"
                id="price"
                required
                step={5}
                min={0}
                max={1000000}
                placeholder="$100"
              />
            </Label>
            <Label htmlFor="address">
              Address
              <Input
                type="text"
                name="address"
                id="address"
                required
                placeholder="North York"
              />
            </Label>
            <Label htmlFor="address">
              Contact
              <Input
                type="tel"
                name="phone"
                id="phone"
                required
                pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                placeholder="888-888-8888"
              />
            </Label>
          </fieldset>
        </form>
      </div>
    </Layout>
  );
}
