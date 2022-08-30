import * as S from "./QuestionWrite.styles";
import { IQuestionWriteUIProps } from "./QuestionWrite.types";
export default function QuestionWriteUI(props: IQuestionWriteUIProps) {
  return (
    <S.Body>
      <S.QuestionInputWrapper>
        <S.QuestionInput>
          <S.QuestionWrite>
            <S.QuestionWriteText
              maxLength={100}
              onChange={props.onChangeContents}
              defaultValue={props.el?.contents}
              placeholder="개인정보를 공유 및 요청하거나, 명예 회손, 무단 광고, 
                              불법 정보 유포시 모니터링 후 삭제될 수 있으며, 이에 대한 민형사상 책임은 게시자에게 있습니다."
            ></S.QuestionWriteText>
            <S.QuestionWriteSubmit>
              <S.QuestionWriteTextCount>
                {props.count}/100
              </S.QuestionWriteTextCount>
              <S.QuestionWriteSubmitButton
                onClick={
                  props.isEdit ? props.onClickUpdate : props.onClickSubmit
                }
              >
                {props.isEdit ? "수정" : "문의"}하기
              </S.QuestionWriteSubmitButton>
            </S.QuestionWriteSubmit>
          </S.QuestionWrite>
        </S.QuestionInput>
      </S.QuestionInputWrapper>
    </S.Body>
  );
}
