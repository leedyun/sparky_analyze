import { useEffect, useState, useMemo } from "react";
import {
  Title,
  VideoStyle,
  DataIndex,
  Youtube,
  Describe,
  Participate,
  Date,
  More,
  Sub,
  Index,
  VideoStyleContainer,
} from "./VideoStyle";
import VideoData from "./VideoData";

const Video = () => {
  const [showAllRows, setShowAllRows] = useState(false);
  const [page, setPage] = useState(0);
  const pageSize = showAllRows ? 10 : 3;
  const totalPages = Math.ceil(VideoData.length / pageSize);
  const visiblePages = 5; // Number of page numbers to display

  const Data = useMemo(() => {
    const startIndex = page * pageSize;
    const endIndex = startIndex + pageSize;
    return VideoData.slice(startIndex, endIndex);
  }, [page, pageSize]);

  const handleShowAllRows = () => {
    setShowAllRows(true);
    setPage(0);
  };

  const handleHideAllRows = () => {
    setShowAllRows(false);
    setPage(0);
  };

  const handleNextPage = () => {
    setPage((prevPage) => Math.min(prevPage + visiblePages, totalPages - 1));
  };

  const handlePrevPage = () => {
    setPage((prevPage) => Math.max(prevPage - visiblePages, 0));
  };

  const handlePageChange = (newPage) => {
    setPage(newPage);
  };

  const generatePageNumbers = () => {
    const pageNumbers = [];
    const startPage = Math.floor(page / visiblePages) * visiblePages;
    const endPage = Math.min(startPage + visiblePages - 1, totalPages - 1);

    for (let i = startPage; i <= endPage; i++) {
      pageNumbers.push(
        <Index
          key={i}
          onClick={() => handlePageChange(i)}
          className={i === page ? "active" : ""}
        >
          {i + 1}
        </Index>
      );
    }

    return pageNumbers;
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
              <DataIndex>{index + 1 + page * pageSize}</DataIndex>
              <Youtube></Youtube>
              <Describe>{tdata.describe}</Describe>
              <Participate>{tdata.participate}</Participate>
              <Date>{tdata.date}</Date>
            </VideoStyle>
          ))}
        </tbody>
      </VideoStyleContainer>
      <Sub>
        {!showAllRows ? (
          <More onClick={handleShowAllRows}>
            더보기
            <img src={"/arrow.jpg"} alt="img" className="img" />
          </More>
        ) : (
          <>
            <More onClick={handleHideAllRows}>
              간략히 보기
              <img src={"/upArrow.png"} alt="img" className="img" />
            </More>
            <div>
              {page > 0 && <Index onClick={handlePrevPage}>&lt;</Index>}
              {generatePageNumbers()}
              {page < totalPages - 1 && (
                <Index className="button" onClick={handleNextPage}>
                  &gt;
                </Index>
              )}
            </div>
          </>
        )}
      </Sub>
    </div>
  );
};

export default Video;
