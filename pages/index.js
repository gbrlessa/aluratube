import config from "../config.json";
import styled from "styled-components";
import { CSSReset } from "../src/components/CSSReset";
import Menu from "../src/components/Menu";
import { StyledTimeline } from "../src/Timeline";

function HomePage() {



  return (
    <>
      <CSSReset />
      <div>
        <Menu />
        <Header />
        <Timeline playlists={config.playlists} />
      </div>
    </>
  );

};

export default HomePage;

const StyledHeader = styled.div`
  img {
    width: 80px;
    height: 80px;
    border-radius: 50%;
  }
  .user-info {
    display: flex;
    align-items: center;
    width: 100%;
    padding: 16px 32px;
    gap: 16px;
  }
  #banner {
    width: 100%;
    height: 25vh;
    border-radius: 0%;
    object-fit: cover;
  }
`;

function Header() {

  return (
    <StyledHeader>

      <img id="banner" src='/assets/banner.jpg' />

      <section className="user-info">
        <img src={`https://github.com/${config.github}.png`} />
        <div>
          <h2>{config.name}</h2>

          <p>{config.job}</p>
        </div>
      </section>
    </StyledHeader>
  );
}

function Timeline(props) {

  const playlistNames = Object.keys(props.playlists);
  const favoritos = config.favoritos;
  return (
    <StyledTimeline>
      {playlistNames.map((playlistName) => {
        const videos = props.playlists[playlistName];
        console.log(videos);
        return (
          <section>
            <h2>{playlistName}</h2>

            <div>
              {videos.map((video) => {
                return (
                  <a href={video.url}>
                    <img src={video.thumb} />
                    <span>
                      {video.title}
                    </span>
                  </a>
                )
              })}
            </div>
          </section>
        )
      })
      }
      <section className="fav">
        <h2>AluraTube Favoritos</h2>

        <div>
          {favoritos.map((favorito) => {
            return (
              <a className="fav" href={favorito.url}>
                <img src={favorito.img} />
                <span id="span-fav">
                  {favorito.name}
                </span>
              </a>
            )
          })}
        </div>

      </section>
    </StyledTimeline>
  );
}