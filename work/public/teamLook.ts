// צריך להכניס לפה getplayer
// renderplayer- לרנדר את השחקנים
// get game- לקחת את השם של המשחק
//render game - לרנדר את השם של המשחק 

interface Player{
    userName: string,
    position:string,
}



function handleGetPlayers() {
    console.log("test");
    try {
      fetch("/api/player/get-players")
        .then((res) => res.json())
        .then(({ Players }) => {
          try {
            if (!Players) throw new Error("didnt find Players");
            console.log(Players);
            renderPlayers(Players);
          } catch (error) {
            console.error(error);
          }
        });
    } catch (error) {
      console.error(error);
    }
  }
  function renderPlayers(players: any[]) {
    try {
      if (!players) throw new Error("No players");
  
      // Group players by team
      const teams = {
        "Team 1": [],
        "Team 2": []
      };
      players.forEach((player, index) => {
        const team = index % 2 === 0 ? "Team 1" : "Team 2";
        teams[team].push(player);
      });
  
      // Render each team
      renderTeam("team1-positions", "Team 1", teams["Team 1"]);
      renderTeam("team2-positions", "Team 2", teams["Team 2"]);
    } catch (error) {
      console.error(error);
    }
  }
  
  function renderTeam(containerId, teamName, players) {
    try {
      const container = document.querySelector(`#${containerId}`);
      if (!container) throw new Error(`Couldn't find container element with id ${containerId}`);
  
      // Group players by position
      const positions = {};
      players.forEach((player) => {
        if (!positions[player.position]) {
          positions[player.position] = [];
        }
        positions[player.position].push(player.userName); // modify to include player name
      });
  
      // Render positions
      const positionsHtml = Object.keys(positions)
        .map((position) => {
          const playersHtml = positions[position]
            .map((playerName) => `<div class="player">${playerName}</div>`) // generate HTML for player name
            .join("");
          return `<div class="position">
                    <h3>${position}s</h3>
                    ${playersHtml}
                  </div>`;
        })
        .join("");
      container.innerHTML = `
        <div class="team-name">${teamName}</div>
        <div class="positions-container">${positionsHtml}</div>
      `;
    } catch (error) {
      console.error(error);
    }
  }
  
  
  