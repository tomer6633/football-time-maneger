;
function handleAddPlayer(ev) {
    try {
        ev.preventDefault();
        console.log(ev.target.elements);
        var userName = ev.target.elements.userName.value;
        var position = ev.target.elements.position.value;
        if (!userName)
            throw new Error("No name");
        if (!position)
            throw new Error("No position");
        var newPlayer = { userName: userName, position: position };
        //send to server:
        fetch("/api/player/add-player", {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newPlayer)
        })
            .then(function (res) { return res.json(); })
            .then(function (data) {
            console.log(data);
        })["catch"](function (error) {
            console.error(error);
        });
    }
    catch (error) {
        console.error(error);
    }
}
function handleUpdatePlayerType(ev, playerId) {
    try {
        var PositionType = ev.target.value;
        console.log(PositionType);
        fetch('/api/player/update-player-type', {
            method: 'PATCH',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ playerId: playerId, PositionType: PositionType })
        })
            .then(function (res) { return res.json(); })
            .then(function (_a) {
            var playerDB = _a.playerDB;
            console.log(playerDB);
        })["catch"](function (error) {
            console.error(error);
        });
    }
    catch (error) {
        console.error(error);
    }
}
