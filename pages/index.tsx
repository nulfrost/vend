import { Text } from "~/components/shared/Typography";
import { Button } from "~/components/shared/Button";

const IndexPage = () => (
  <div className="flex flex-col items-center">
    <Text as="small" size="base">
      This is a test
    </Text>
    <Text as="h2" size="heading-3" weight="medium">
      This is a heading
    </Text>
    <Button size="lg">This is a cool button</Button>
  </div>
);

export default IndexPage;
