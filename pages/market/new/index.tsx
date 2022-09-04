import { withAuth } from "../../../src/components/commons/hocs/withAuth";
import New from "../../../src/components/units/market/new/New.container";

function NewPage() {
  return <New />;
}

export default withAuth(NewPage);
