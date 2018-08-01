var portalLoc = [];
var portalName = [];
class CollectorPlugin {
    constructor() {
        PluginManager.afterInit(() => {
            this.playerTracker = PluginManager.getInstanceOf(PlayerTracker);
            this.playerTracker.trackAllPlayers();
            this.playerTracker.on('leave', (player) => {
                for (const obj of portalLoc) {
                    if (player.location.distance(obj) < 2)
                        console.log(`the big gay ${player.name} went into the portal ${portalName[portalLoc.indexOf(obj)]}`);
                }
            });
            onHookUpdate(client, Client, updatePacket, UpdatePacket);
            {
                for (const obj of updatePacket.newObjects) {
                    if (obj.id === realmPortalObjectID) {
                        portalLoc.push(obj.location);
                        portalName.push(obj.name); // name of realm portal ex. cyc, med, djinn, beh, etc.
                    }
                }
            }
        });
    }
}
