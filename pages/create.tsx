import { useCallback, useEffect, useState } from "react";
import Layout from "~/components/Layout";
import Input from "~/components/shared/Input";
import Label from "~/components/shared/Label";
import Textarea from "~/components/shared/Textarea";
import { useDropzone } from "react-dropzone";

export default function Create() {
  const [images, setImages] = useState(null);

  const onDrop = useCallback((acceptedFiles) => {
    setImages(
      acceptedFiles.map((file) =>
        Object.assign(file, {
          preview: URL.createObjectURL(file),
        })
      )
    );
  }, []);

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: "image/*",
    multiple: true,
    maxFiles: 3,
    noDrag: true,
    disabled: false,
  });

  useEffect(
    () => () => {
      // Make sure to revoke the data uris to avoid memory leaks
      images && images.forEach((file) => URL.revokeObjectURL(file.preview));
    },
    [images]
  );

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
          <fieldset className="flex flex-col gap-3">
            <div
              role="label"
              {...getRootProps({
                className:
                  "max-w-md col-span-2 px-5 py-4 text-white duration-150 rounded-md cursor-pointer bg-primary-500 hover:bg-primary-400 w-max",
              })}
            >
              {images && images.length > 0
                ? `${images.length} image(s) selected`
                : "Upload Images"}
            </div>
            <input
              name="images"
              id="images"
              {...getInputProps()}
              className="absolute mt-5 overflow-hidden opacity-0"
              style={{ zIndex: -1, width: 0.1, height: 0.1 }}
            />
            <small className="opacity-50">
              A maximum of 3 images may be uploaded
            </small>
          </fieldset>
          <div className="flex flex-col col-span-2 gap-3 lg:flex-row">
            {images &&
              images.map(({ preview, lastModified }) => (
                <img
                  src={preview}
                  className="w-64 rounded-md"
                  key={lastModified}
                />
              ))}
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
              <small className="opacity-50">
                Prices may not exceed $1,000,000
              </small>
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
