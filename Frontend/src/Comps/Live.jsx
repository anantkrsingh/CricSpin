import React, { useEffect, useState } from "react";
import DOMPurify from "dompurify";
import { ExpandableBanner } from "./ExpandableBanner";
import { BottomBanner } from "./BottomBanner";

export const Live = React.memo(({ matchID }) => {
  const [match, setMatch] = useState(null);
  const [loading, setLoading] = useState(true);
  const givenDateTime = new Date();

  const currentDateTime = new Date();


  useEffect(() => {
    fetchData();

    const interval = setInterval(() => {
      fetchData();
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch(
        "http://api.cricspin.live/Live/?MatchId=" + matchID,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const data = await response.json();
      setMatch(data[0]);
      const givenDateTime = new Date(match.Matchtime);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching data:", error);
      setLoading(false);
    }
  };

  if (loading || !match) {
    return <p>Loading...</p>;
  }

  const sanitizedJsonRuns = match.jsonruns.replace(/[\x00-\x1F\x7F-\x9F]/g, "");
  const sanitizedJsonData = match.jsondata.replace(/[\x00-\x1F\x7F-\x9F]/g, "");

  let jsonData = null;
  let jsonRuns = null;

  try {
    jsonData = JSON.parse(sanitizedJsonData).jsondata;
  } catch (error) {
    console.error("Error parsing JSON data:", error);
    return null;
  }

  try {
    jsonRuns = JSON.parse(sanitizedJsonRuns).jsonruns;
  } catch (error) {
    console.error("Error parsing JSON data:", error);
    return null;
  }

  const data = jsonData;

  console.log(data);

  const title = data.title;
  const CRRRegex = /C\.RR:\s*(\d+(\.\d+)?)/i;
  const RRRRegex = /R\.RR:\s*(\d+(\.\d+)?)/i;

  const CRRMatch = title.match(CRRRegex);
  const RRRMatch = title.match(RRRRegex);

  const CRR = CRRMatch ? CRRMatch[1] : "N/A";
  const RRR = RRRMatch ? RRRMatch[1] : "N/A";

  if (!data) {
    return null;
  }

  const last6Balls = data.Last6Balls.split("-");
  let substring = jsonData.oversB.substring(0, jsonData.oversB.indexOf("|"));
  let substring2 = jsonData.oversB.substring(jsonData.oversB.indexOf("|") + 1);

  let nonstrikerruns;
  let strikerruns;
  let nonstrikerballs;
  let strikerballs;

  if (substring != null && substring.length > 0) {
    let split2 = substring.split(",");
    if (split2.length > 0) {
      nonstrikerruns = split2[0];
      strikerruns = split2[1];
    }
  }

  if (substring2 != null && substring2.length > 0) {
    let split2 = substring2.split(",");
    if (split2.length > 0) {
      nonstrikerballs = split2[0];
      strikerballs = split2[1];
    }
  }

  let sr = parseInt((strikerruns / strikerballs) * 100);

  let nsr = parseInt((nonstrikerruns / nonstrikerballs) * 100);

  const startIndex = jsonData.title.indexOf("PLZ RATE US 5 STARS");
  const content = jsonData.title.substring(startIndex);

  return (
    <div className="flex w-full ">
      <div className='fixed w-full  bottom-0 max-w-[320px] md:max-w-full md:left-0 self-center'>
        <BottomBanner />
      </div>
      <div className="w-full flex mb-2 flex-col">
        <div className="w-full p-2 items-center euclid flex justify-between bg-white rounded-md">
          <div className="">Favourite</div>
          <div className="flex items-center font-bold  ">
            <p> {jsonRuns.fav}</p>
            <p className="px-2 py-1 mx-2 bg-red-100 text-red-800 rounded-lg">
              {jsonRuns.rateA}
            </p>
            <p className="px-2 py-1 bg-green-100  text-green-800 rounded-lg">
              {jsonRuns.rateB}
            </p>
          </div>
        </div>
        <div className="w-full mb-2 flex-row euclid font-bold bg-white rounded-md mt-4 flex p-2">
          <div className="flex flex-col items-center">
            <p>Session </p>
            <div className="flex">
              <p className="px-2 py-1 mx-2 bg-red-100 text-red-800 rounded-lg">
                {jsonRuns.sessionA}
              </p>
              <p className="px-2 py-1 mx-2 bg-green-100  text-green-800 rounded-lg">
                {jsonRuns.sessionB}
              </p>
            </div>
          </div>
          <div className="w-full mb-2 flex items-center flex-col">
            Over
            <p className="px-2 py-1 mx-2 bg-green-100  text-green-800 rounded-lg">
              {jsonRuns.sessionOver}
            </p>{" "}
          </div>
          <div className="flex flex-col mb-2 bg-white rounded-md">
            <p className="text-center">Run x Ball</p>
            <div className="flex">
              <p className="px-2 py-1 mx-2 bg-red-100 text-red-800 rounded-lg">
                {jsonRuns.runxa}
              </p>
              <p className="px-2 py-1 mx-2 bg-green-100  text-green-800 rounded-lg">
                {jsonRuns.runxb}
              </p>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-xl  shadow-lg mt-2 w-full">
          <table className="w-full ">
            <thead className="border-b-2 border-gray-700  border-collapse">
              <tr className="p-2">
                <th className="text-start  p-2">Batsmen</th>
                <th className="text-right  p-2">R</th>
                <th className="text-right  p-2">B</th>
                <th className="text-right  p-2">4s</th>
                <th className="text-right  p-2">6s</th>
                <th className="text-right  p-2">SR</th>
              </tr>
            </thead>

            <tbody className="border-b-2 border-gray-700">
              <tr>
                <td className="p-2 text-start font-bold text-blue-950">
                  {data.batsman.split("|")[0].trim()}{" "}
                </td>
                <td className="text-right text-blue-800 font-bold  p-2">
                  {data.oversB.split("|")[0].trim().split(",")[1].trim()}
                </td>
                <td className="text-right text-blue-800 font-bold  p-2">
                  {data.oversB.split("|")[1].trim().split(",")[1].trim()}
                </td>
                <td className="text-right p-2">{data.s4}</td>
                <td className="text-right p-2">{data.s6}</td>
                <td className="text-right p-2">{sr}</td>
              </tr>
              <tr>
                <td className="p-2 text-start font-bold text-blue-950">
                  {data.batsman.split("|")[1].trim()}
                </td>
                <td className="text-right text-blue-800 font-bold p-2">
                  {data.oversB.split("|")[0].trim().split(",")[0].trim()}
                </td>
                <td className="text-right text-blue-800 font-bold p-2">
                  {data.oversB.split("|")[1].trim().split(",")[0].trim()}
                </td>
                <td className="text-right p-2">{data.ns4}</td>
                <td className="text-right p-2">{data.ns6}</td>
                <td className="text-right p-2">{nsr}</td>
              </tr>
            </tbody>
          </table>
          <div className="flex p-2 items-center w-[inherit]">
            {" "}
            <h6>Bowler:</h6>
            <p className="flex font-bold w-[inherit] justify-center items-center  text-center">
              {" "}
              {data.bowler}
            </p>
          </div>
        </div>
        <ExpandableBanner />
        <div className="flex euclid flex-row mt-4 bg-white rounded-md p-1 items-center">
          Last 6 Balls
          {last6Balls.map((item) => {
            return (
              <div className="bg-gray-200 w-fit rounded-full px-3 py-2 m-1">
                {item}
              </div>
            );
          })}
        </div>

        <div className="w-full mb-16  euclid mt-4 bg-white rounded-md">
          <p className="border-b-2 p-2 border-gray-700">Summary</p>
          <pre className="p-2 whitespace-pre-wrap	text-center">{content}</pre>
        </div>
      </div>
    </div>
  );

});
