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
} from "./VideoStyle";
import VideoData from "./VideoData";

const Video = () => {
  return (
    <div>
      <useTable className="table" responsive borderless>
        <thead>
          <Title>
            <tr>동영상</tr>
            <tr></tr>
            <tr></tr>
            <tr>참여</tr>
            <tr>공개된 날짜</tr>
          </Title>
        </thead>
        <tbody>
          {VideoData.map((tdata, index) => (
            <VideoStyle key={index}>
              <DataIndex>{index}</DataIndex>
              <Youtube></Youtube>
              <Describe>{tdata.describe}</Describe>
              <Participate>{tdata.participate}</Participate>
              <Date>{tdata.date}</Date>
            </VideoStyle>
          ))}
        </tbody>
      </useTable>
    </div>
  );
};

export default Video;
