import { withAuth } from "../../../src/components/commons/hocs/withAuth";
import MyProduct from "../../../src/components/units/users/mypage/myproduct/MyProduct.container";
import Profile from "../../../src/components/units/users/mypage/profile/Profile.container";

function ProfilePage() {
  return (
    <>
      <Profile />
      <MyProduct />
    </>
  );
}
export default withAuth(ProfilePage);
