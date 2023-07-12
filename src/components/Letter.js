import Data from "./Data";
import LetterStyle from "./LetterStyle";

const Letter = () => {
  return (
    <LetterStyle>
      지난 {Data.date}일 동안 <span>{Data.people}명</span>이 참여했어요
    </LetterStyle>
  );
};

export default Letter;
