import { useQuery } from "@apollo/client";
import { useState } from "react";
import ProfileUI from "./Profile.presenter";
import {
  FETCH_USED_ITEM_COUNT_I_PICKED,
  FETCH_USED_ITEM_COUNT_I_SOLD,
  FETCH_USER_LOGGED_IN,
} from "./Profile.queries";

export default function Profile() {
  const { data: loginData } = useQuery(FETCH_USER_LOGGED_IN);
  const { data: productCount } = useQuery(FETCH_USED_ITEM_COUNT_I_SOLD);
  const { data: pickCount } = useQuery(FETCH_USED_ITEM_COUNT_I_PICKED);
  return (
    <ProfileUI
      loginData={loginData}
      productCount={productCount}
      pickCount={pickCount}
    />
  );
}
