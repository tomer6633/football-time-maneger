// צריך להכניס לפה getplayer
// renderplayer- לרנדר את השחקנים
// get game- לקחת את השם של המשחק
//render game - לרנדר את השם של המשחק 
function handleGetUsers() {
    console.log("test");
    try {
        fetch("/api/player/get-players")
            .then(function (res) { return res.json(); })
            .then(function (_a) {
            var players = _a.players;
            try {
                if (!players)
                    throw new Error("didnt find players");
                console.log(players);
                renderplayers(players);
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
function renderplayers(players) {
    try {
        if (!players)
            throw new Error("No users");
        var html = players
            .map(function (players) {
            return renderUser(players);
        })
            .join(" ");
        var usersElement = document.querySelector("#users");
        if (!usersElement)
            throw new Error("coundnt find users element on DOM");
        usersElement.innerHTML = html;
    }
    catch (error) {
        console.error(error);
    }
}
function renderUser(player) {
    try {
        console.log(player);
        return "<div class=\"userCard\">\n                <p>u play in " + player.position + "</p>  \n              </div>";
    }
    catch (error) {
        console.error(error);
        return null;
    }
}
