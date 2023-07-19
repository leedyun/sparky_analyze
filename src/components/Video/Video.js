import { useEffect, useState, useMemo } from "react";
import { useTable } from "react-table-6";
import {
  Title,
  VideoStyle,
  DataIndex,
  Youtube,
  Describe,
  Participate,
  Date,
  More,
  VideoStyleContainer,
} from "./VideoStyle";
import VideoData from "./VideoData";

const Video = () => {
  const [showAllRows, setShowAllRows] = useState(false);
  const Data = useMemo(
    () => (showAllRows ? VideoData : VideoData.slice(0, 3)),
    [showAllRows]
  );
  const handleShowAllRows = () => {
    setShowAllRows(true);
  };
  const handleHideAllRows = () => {
    setShowAllRows(false);
  };
  return (
    <div>
      <VideoStyleContainer responsive borderless>
        <thead>
          <Title>
            <th>동영상</th>
            <th></th>
            <th></th>
            <th>참여</th>
            <th>공개된 날짜</th>
          </Title>
        </thead>
        <tbody>
          {Data.map((tdata, index) => (
            <VideoStyle key={index}>
              <DataIndex>{index + 1}</DataIndex>
              <Youtube></Youtube>
              <Describe>{tdata.describe}</Describe>
              <Participate>{tdata.participate}</Participate>
              <Date>{tdata.date}</Date>
            </VideoStyle>
          ))}
        </tbody>
      </VideoStyleContainer>
      {showAllRows ? (
        <More onClick={handleHideAllRows}>
          간략히 보기
          <img src={"/upArrow.png"} alt="img" className="img" />
        </More>
      ) : (
        <More onClick={handleShowAllRows}>
          더보기
          <img src={"/arrow.jpg"} alt="img" className="img" />
        </More>
      )}
    </div>
  );
};

export default Video;
