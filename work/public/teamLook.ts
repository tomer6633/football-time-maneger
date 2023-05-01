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
  function renderPlayers(players: Array<Player>) {
    try {
      if (!players) throw new Error("No players");
  
      // Group players by position
      const positions: { [position: string]: Array<Player> } = {};
      players.forEach((player) => {
        if (!positions[player.position]) {
          positions[player.position] = [];
        }
        positions[player.position].push(player);
      });
  
      const positionsHtml = Object.keys(positions)
        .map((position) => {
          const playersHtml = positions[position]
            .map((player) => renderPlayer(player))
            .join("");
          return `<div class="positionCard">
                    <h2>${position}s</h2>
                    ${playersHtml}
                  </div>`;
        })
        .join("");
  
      const positionsElement = document.querySelector("#positions");
  
      if (!positionsElement) {
        throw new Error("Couldn't find positions element on DOM");
      }
  
      positionsElement.innerHTML = positionsHtml;
    } catch (error) {
      console.error(error);
    }
  }
  
  function renderPlayer(player: Player) {
    try {
      console.log(player);
      const positionClass = player.position.toLowerCase();
      return `<div class="userCard ${positionClass}">
                <p>${player.userName} plays in ${player.position}</p>
              </div>`;
    } catch (error) {
      console.error(error);
      return null;
    }
  }