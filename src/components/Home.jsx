import { Col, Row } from "react-bootstrap";
import MainLinks from "./MainLinks";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import AlbumCard from "./Album_Card";

const Home = () => {
  const [rockArtists, setRockArtist] = useState([
    "queen",
    "u2",
    "thepolice",
    "eagles",
    "thedoors",
    "oasis",
    "thewho",
    "bonjovi",
  ]);
  const [popArtists, setPopArtist] = useState([
    "maroon5",
    "coldplay",
    "onerepublic",
    "jamesblunt",
    "katyperry",
    "arianagrande",
  ]);
  const [hipHopArtists, setHipHopArtist] = useState(["eminem", "snoopdogg", "lilwayne", "drake", "kanyewest"]);
  const [rockHomeArtists, setRockHomeArtist] = useState([]);
  const [popHomeArtists, setPopHomeArtist] = useState([]);
  const [hipHopHomeArtists, setHipHopHomeArtist] = useState([]);
  const searchResults = useSelector((state) => state.GeneralReducers.searchResults);
  const activeSearch = useSelector((state) => state.GeneralReducers.activeSearch);
  const [appRock, setAppRock] = useState(null);
  const [appPop, setAppPop] = useState(null);
  const [apphiphop, setApphiphopk] = useState(null);
  const handleArtist = async (artistName, fn, category) => {
    try {
      let response = await fetch(`https://deezerdevs-deezer.p.rapidapi.com/search?q=${artistName}`, {
        method: "GET",
        headers: {
          "X-RapidAPI-Key": "be9aa8f80cmshcb87ef0073d5d4ep15813fjsn4ee3c6fb8586",
          "X-RapidAPI-Host": "deezerdevs-deezer.p.rapidapi.com",
        },
      });
      if (response.ok) {
        let result = await response.json(); // transforms the response to json
        let songInfo = result.data;
        fn(songInfo[0]);
      } else {
        console.log("error");
      }
    } catch (err) {
      console.log(err);
    }
  };
  const handleRandom = async (rockRandomArtists, popRandomArtists, hipHopRandomArtists) => {
    for (let j = 0; j < rockRandomArtists.length; j++) {
      await handleArtist(rockRandomArtists[j], setAppRock, appRock);
    }
    for (let j = 0; j < popRandomArtists.length; j++) {
      await handleArtist(popRandomArtists[j], setAppPop, appPop);
    }
    for (let j = 0; j < hipHopRandomArtists.length; j++) {
      await handleArtist(hipHopRandomArtists[j], setApphiphopk, apphiphop);
    }
  };
  useEffect(() => {
    const rockRandomArtists = [];
    const popRandomArtists = [];
    const hipHopRandomArtists = [];

    while (rockRandomArtists.length < 4) {
      // pushes elements inside the array until it has 4 strings
      let artist = rockArtists[Math.floor(Math.random() * rockArtists.length)]; // select an element from the array with an index between 0 and 7
      if (!rockRandomArtists.includes(artist)) {
        // checks if the artist is not already present in the array
        rockRandomArtists.push(artist); // pushes the artist in the array
      }
    }

    while (popRandomArtists.length < 4) {
      let artist = popArtists[Math.floor(Math.random() * popArtists.length)];
      if (!popRandomArtists.includes(artist)) {
        popRandomArtists.push(artist);
      }
    }

    while (hipHopRandomArtists.length < 4) {
      let artist = hipHopArtists[Math.floor(Math.random() * hipHopArtists.length)];
      if (!hipHopRandomArtists.includes(artist)) {
        hipHopRandomArtists.push(artist);
      }
    }
    handleRandom(rockRandomArtists, popRandomArtists, hipHopRandomArtists);
  }, []);
  useEffect(() => {
    if (appRock !== null) setRockHomeArtist([...rockHomeArtists, appRock]);
  }, [appRock]);
  useEffect(() => {
    if (appPop !== null) setPopHomeArtist([...popHomeArtists, appPop]);
  }, [appPop]);
  useEffect(() => {
    if (apphiphop !== null) setHipHopHomeArtist([...hipHopHomeArtists, apphiphop]);
  }, [apphiphop]);
  return (
    <>
      <MainLinks />
      {activeSearch && (
        <Row>
          <Col xs={10}>
            <div id="searchResults">
              <h2>Search Results</h2>
              <div class="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 imgLinks py-3">
                {searchResults.map((elem, i) => (
                  <AlbumCard key={`albumSearch${i}`} elem={elem} />
                ))}
              </div>
            </div>
          </Col>
        </Row>
      )}
      <Row>
        <Col xs={10}>
          <div id="rock">
            <h2>Rock Classics</h2>
            <div class="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 imgLinks py-3" id="rockSection">
              {" "}
              {rockHomeArtists.map((elem, i) => (
                <AlbumCard key={`rock${i}`} elem={elem} />
              ))}
            </div>
          </div>
        </Col>
      </Row>
      <Row>
        <Col xs={10}>
          <div id="pop">
            <h2>Pop Culture</h2>
            <div class="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 imgLinks py-3" id="popSection">
              {" "}
              {popHomeArtists.map((elem, i) => (
                <AlbumCard key={`pop${i}`} elem={elem} />
              ))}
            </div>
          </div>
        </Col>
      </Row>
      <Row>
        <Col xs={10}>
          <div id="hiphop">
            <h2>#HipHop</h2>
            <div class="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 imgLinks py-3" id="hipHopSection">
              {" "}
              {hipHopHomeArtists.map((elem, i) => (
                <AlbumCard key={`hiphop${i}`} elem={elem} />
              ))}
            </div>
          </div>
        </Col>
      </Row>
    </>
  );
};
export default Home;
