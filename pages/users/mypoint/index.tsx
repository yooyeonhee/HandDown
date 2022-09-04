import { withAuth } from "../../../src/components/commons/hocs/withAuth";
import MyPoint from "../../../src/components/units/users/mypage/mypoint/MyPoint.container";
import Profile from "../../../src/components/units/users/mypage/profile/Profile.container";

function MyPointPage() {
  return (
    <>
      <Profile />
      <MyPoint />
    </>
  );
}
export default withAuth(MyPointPage);
