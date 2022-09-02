import * as S from "./AnswerWrite.styles";
import { IAnswerWriteUIProps } from "./AnswerWrite.types";
export default function AnswerWriteUI(props: IAnswerWriteUIProps) {
  return (
    <S.Body>
      <S.AnswerInputWrapper>
        <S.AnswerInput>
          <S.AnswerWrite>
            <S.AnswerWriteText
              maxLength={100}
              onChange={props.onChangeContents}
              placeholder="개인정보를 공유 및 요청하거나, 명예 회손, 무단 광고, 
                              불법 정보 유포시 모니터링 후 삭제될 수 있으며, 이에 대한 민형사상 책임은 게시자에게 있습니다."
              ref={props.inputRef}
            ></S.AnswerWriteText>
            <S.AnswerWriteSubmit>
              <S.AnswerWriteTextCount>{props.count}/100</S.AnswerWriteTextCount>
              <S.AnswerWriteSubmitButton onClick={props.onClickSubmit}>
                답변하기
              </S.AnswerWriteSubmitButton>
            </S.AnswerWriteSubmit>
          </S.AnswerWrite>
        </S.AnswerInput>
      </S.AnswerInputWrapper>
    </S.Body>
  );
}
