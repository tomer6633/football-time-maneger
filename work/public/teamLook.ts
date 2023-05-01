// צריך להכניס לפה getplayer
// renderplayer- לרנדר את השחקנים
// get game- לקחת את השם של המשחק
//render game - לרנדר את השם של המשחק 

interface Player{
    userName: String,
    position:String,
}


function handleGetUsers() {
    console.log("test");
    try {
      fetch("/api/player/get-players")
        .then((res) => res.json())
        .then(({ players }) => {
          try {
            if (!players) throw new Error("didnt find players");
            console.log(players);
            renderplayers(players);
          } catch (error) {
            console.error(error);
          }
        });
    } catch (error) {
      console.error(error);
    }
  }
  function renderplayers(players:Player) {
    try {
      if (!players) throw new Error("No users");
  
      const html = players
        .map((players: Player) => {
          return renderUser(players);
        })
        .join(" ");
      const usersElement = document.querySelector("#users");
      if (!usersElement) throw new Error("coundnt find users element on DOM");
  
      usersElement.innerHTML = html;
    } catch (error) {
      console.error(error);
    }
  }
  
  function renderUser(player: Player) {
    try {
      console.log(player);
  
      return `<div class="userCard">
                <p>u play in ${player.position}</p>  
              </div>`;
    } catch (error) {
      console.error(error);
      return null;
    }
  }
  