import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { ChangeEvent, MouseEvent, useState } from "react";
import _ from "lodash";
import ListUI from "./List.presenter";
import { FETCH_USED_ITEMS } from "./List.queries";
import { IFetchUseditems } from "./List.types";

export default function List() {
  const router = useRouter();
  const [keyword, setKeyword] = useState("");
  const { data, refetch, fetchMore } = useQuery(FETCH_USED_ITEMS);
  const onChangeSearch = (event: ChangeEvent<HTMLInputElement>) => {
    getDebounce(event.target.value);
  };
  const onClickToDetail = (event: MouseEvent<HTMLDivElement>) => {
    router.push(`/market/${event.currentTarget.id}`);
  };

  const getDebounce = _.debounce((data: string) => {
    setKeyword(data);
    refetch({ search: data, page: 1 });
  }, 700);

  const loadFunc = () => {
    // 데이터가 있을 떄만 fetchMore 해준다.
    if (!data) return;
    fetchMore({
      variables: {
        page: Math.ceil(data.fetchUseditems.length / 10) + 1,
      },
      updateQuery: (prev, { fetchMoreResult }) => {
        if (!prev.fetchUseditems) {
          return;
        }
        if (!fetchMoreResult.fetchUseditems)
          return {
            fetchUseditems: [...prev.fetchUseditems],
          };
        return {
          fetchUseditems: [
            ...prev.fetchUseditems,
            ...fetchMoreResult.fetchUseditems,
          ],
        };
      },
    });
  };

  return (
    <ListUI
      data={data}
      loadFunc={loadFunc}
      onChangeSearch={onChangeSearch}
      onClickToDetail={onClickToDetail}
    />
  );
}
