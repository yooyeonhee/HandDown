import * as S from "./QuestionWrite.styles";
export default function QuestionWriteUI() {
  return (
    <S.Body>
      <S.QuestionInputWrapper>
        <S.QuestionInput>
          <S.QuestionWrite>
            <S.QuestionWriteText
              placeholder="개인정보를 공유 및 요청하거나, 명예 회손, 무단 광고, 
                              불법 정보 유포시 모니터링 후 삭제될 수 있으며, 이에 대한 민형사상 책임은 게시자에게 있습니다."
            ></S.QuestionWriteText>
            <S.QuestionWriteSubmit>
              <S.QuestionWriteTextCount>/100</S.QuestionWriteTextCount>
              <S.QuestionWriteSubmitButton>
                문의하기
              </S.QuestionWriteSubmitButton>
            </S.QuestionWriteSubmit>
          </S.QuestionWrite>
        </S.QuestionInput>
      </S.QuestionInputWrapper>
    </S.Body>
  );
}
