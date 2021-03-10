import Layout from "~/components/Layout";
import Input from "~/components/shared/Input";
import Label from "~/components/shared/Label";
import Textarea from "~/components/shared/Textarea";

export default function Create() {
  return (
    <Layout title="Post new Ad">
      <div className="mx-auto mt-11 md:mt-36 max-w-screen-2xl">
        <Label htmlFor="title">Post title</Label>
        <Input
          type="text"
          name="title"
          maxLength={30}
          required
          placeholder="A clever title to catch the buyers eye"
        />
        <Label htmlFor="title">Price</Label>
        <Input
          type="number"
          name="price"
          required
          step={5}
          min={0}
          max={1000000}
          placeholder="$100"
        />
        <Label htmlFor="title">Description</Label>
        <Textarea
          name="description"
          placeholder="Short description of the item you're selling"
          maxLength={250}
        />
      </div>
    </Layout>
  );
}
