import { Col, Row } from "react-bootstrap";
import MainLinks from "./MainLinks";
import { useEffect } from "react";

const ArtistPage = () => {
  const fetchArtist = async () => {
    let artistId = new URLSearchParams(document.location.search).get("id");
    try {
      let response = await fetch("https://striveschool-api.herokuapp.com/api/deezer/artist/" + artistId, {
        method: "GET",
      });

      if (response.ok) {
        let artist = await response.json();

        // displaying the playButton
        let playButton = document.querySelector("#playButton");
        playButton.classList.remove("d-none");
        playButton.classList.add("d-inline");

        // displaying the followButton
        let followButton = document.querySelector("#followButton");
        followButton.classList.remove("d-none");
        followButton.classList.add("d-inline");

        // setting the artist name
        let titleMain = document.querySelector(".titleMain");
        titleMain.innerHTML = artist.name;

        // setting the followers section
        let followers = document.querySelector("#followers");
        followers.innerText = artist.nb_fan + " followers";

        let tracksResponse = await fetch(
          // await the fetch of the artist songs
          "https://striveschool-api.herokuapp.com/api/deezer/search?q=" + artist.name,
          {
            method: "GET",
          }
        );

        if (tracksResponse.ok) {
          let tracklist = await tracksResponse.json();
          for (let i = 0; i < tracklist.data.length; i++) {
            let apiLoaded = document.querySelector("#apiLoaded");
            apiLoaded.innerHTML += albumCard(tracklist.data[i]);
          }
        }
      } else {
        // something went wrong with the request --> i.e. headers missing, wrong HTTP Method
        document.querySelector("#apiLoaded").innerHTML = "NOT OK" + (await response.text());
      }
    } catch (exception) {
      // ex.: Url is not correct, Internal Server Error
      document.querySelector("#apiLoaded").innerHTML = exception;
    }
  };
  useEffect(() => {
    fetchArtist();
  }, []);
  return (
    <>
      <MainLinks />
      <Row>
        <Col xs={12} md={10} lg={10} className="mt-5">
          {/* eslint-disable-next-line jsx-a11y/heading-has-content */}
          <h2 class="titleMain"></h2>
          <div id="followers"></div>
          <div class="d-flex justify-content-center" id="button-container">
            <button class="btn btn-success mr-2 mainButton d-none" id="playButton">
              PLAY
            </button>
            <button class="btn btn-outline-light mainButton d-none" id="followButton">
              FOLLOW
            </button>
          </div>
        </Col>
      </Row>
      <Row>
        <Col xs={10} md={10} lg={10} className="offset-1 p-0">
          <div class="mt-4 d-flex justify-content-start">
            <h2 class="text-white font-weight-bold">Tracks</h2>
          </div>
          <div class="pt-5 mb-5">
            <div class="row" id="apiLoaded"></div>
          </div>
        </Col>
      </Row>
    </>
  );
};
export default ArtistPage;
