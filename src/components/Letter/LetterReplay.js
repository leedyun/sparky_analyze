import React, { useEffect, useState } from "react";
import { differenceInDays } from "date-fns";
import LetterStyle, { Box } from "./LetterStyle";
import Data from "./Data";

const Letter = ({ startDate, endDate }) => {
  const [selectedDays, setSelectedDays] = useState(0);

  useEffect(() => {
    const days = getSelectedDays(startDate, endDate);
    setSelectedDays(days);
  }, [startDate, endDate]);

  const getSelectedDays = (start, end) => {
    if (end) {
      const days = differenceInDays(end, start) + 1;
      return days > 0 ? days : 0;
    }
    return 1;
  };

  return (
    <div>
      <LetterStyle>
        <Box>
          지난 {selectedDays}일 동안 <span>{Data.people}명</span>이
          리플레이했어요
          <p className="p">
            리플레이는 같은 동영상을 2회 이상 플레이한 수예요.
          </p>
        </Box>
      </LetterStyle>
      <LetterStyle style={{ marginTop: 20 }}>
        <Box>
          최대 <span>{Data.count}회</span> 리플레이한 사람이 있어요
          <p className="p">Brooklyn Simmons</p>
        </Box>
      </LetterStyle>
    </div>
  );
};

export default Letter;
