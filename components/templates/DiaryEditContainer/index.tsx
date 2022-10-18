import React from "react";
import DiaryNewWrapper from "components/organisms/DiaryNewWrapper";
import Profile from "components/organisms/Profile";
import InnerBox from "../InnerBox";
import {
  GetEditBoardQueryResult,
  GetEditBoardQueryVariables,
  useGetEditBoardQuery,
  useUpdateBoardMutation,
} from "lib/graphql/queries/schema";
import { DiaryDetailProps } from "types";

const DiaryEditContainer = ({ id }: DiaryDetailProps) => {
  const { data: editBoardData } = useGetEditBoardQuery({
    variables: { number: Number(id) } as GetEditBoardQueryVariables,
  }) as GetEditBoardQueryResult;
  console.log("datadata", editBoardData);

  const editTitle = editBoardData?.fetchBoard?.title;
  const editContents = editBoardData?.fetchBoard?.contents;
  return (
    <InnerBox>
      <Profile />
      <DiaryNewWrapper
        useLazyQuery={useUpdateBoardMutation}
        id={id}
        editTitle={editTitle}
        editContents={editContents}
      />
    </InnerBox>
  );
};

export default DiaryEditContainer;
