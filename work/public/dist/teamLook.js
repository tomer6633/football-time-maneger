// צריך להכניס לפה getplayer
// renderplayer- לרנדר את השחקנים
// get game- לקחת את השם של המשחק
//render game - לרנדר את השם של המשחק 
function handleGetPlayers() {
    console.log("test");
    try {
        fetch("/api/player/get-players")
            .then(function (res) { return res.json(); })
            .then(function (_a) {
            var Players = _a.Players;
            try {
                if (!Players)
                    throw new Error("didnt find Players");
                console.log(Players);
                renderPlayers(Players);
            }
            catch (error) {
                console.error(error);
            }
        });
    }
    catch (error) {
        console.error(error);
    }
}
function renderPlayers(players) {
    try {
        if (!players)
            throw new Error("No players");
        // Group players by position
        var positions_1 = {};
        players.forEach(function (player) {
            if (!positions_1[player.position]) {
                positions_1[player.position] = [];
            }
            positions_1[player.position].push(player);
        });
        var positionsHtml = Object.keys(positions_1)
            .map(function (position) {
            var playersHtml = positions_1[position]
                .map(function (player) { return renderPlayer(player); })
                .join("");
            return "<div class=\"positionCard\">\n                    <h2>" + position + "s</h2>\n                    " + playersHtml + "\n                  </div>";
        })
            .join("");
        var positionsElement = document.querySelector("#positions");
        if (!positionsElement) {
            throw new Error("Couldn't find positions element on DOM");
        }
        positionsElement.innerHTML = positionsHtml;
    }
    catch (error) {
        console.error(error);
    }
}
function renderPlayer(player) {
    try {
        console.log(player);
        var positionClass = player.position.toLowerCase();
        return "<div class=\"userCard " + positionClass + "\">\n                <p>" + player.userName + " plays in " + player.position + "</p>\n              </div>";
    }
    catch (error) {
        console.error(error);
        return null;
    }
}
