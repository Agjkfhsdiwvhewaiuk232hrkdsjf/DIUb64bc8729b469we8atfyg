"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var PacketType;
(function (PacketType) {
    PacketType[PacketType["FAILURE"] = 0] = "FAILURE";
    PacketType[PacketType["CREATESUCCESS"] = 44] = "CREATESUCCESS";
    PacketType[PacketType["CREATE"] = 52] = "CREATE";
    PacketType[PacketType["PLAYERSHOOT"] = 8] = "PLAYERSHOOT";
    PacketType[PacketType["MOVE"] = 74] = "MOVE";
    PacketType[PacketType["PLAYERTEXT"] = 59] = "PLAYERTEXT";
    PacketType[PacketType["TEXT"] = 20] = "TEXT";
    PacketType[PacketType["SERVERPLAYERSHOOT"] = 5] = "SERVERPLAYERSHOOT";
    PacketType[PacketType["DAMAGE"] = 58] = "DAMAGE";
    PacketType[PacketType["UPDATE"] = 31] = "UPDATE";
    PacketType[PacketType["UPDATEACK"] = 80] = "UPDATEACK";
    PacketType[PacketType["NOTIFICATION"] = 47] = "NOTIFICATION";
    PacketType[PacketType["NEWTICK"] = 36] = "NEWTICK";
    PacketType[PacketType["INVSWAP"] = 27] = "INVSWAP";
    PacketType[PacketType["USEITEM"] = 39] = "USEITEM";
    PacketType[PacketType["SHOWEFFECT"] = 28] = "SHOWEFFECT";
    PacketType[PacketType["HELLO"] = 100] = "HELLO";
    PacketType[PacketType["GOTO"] = 76] = "GOTO";
    PacketType[PacketType["INVDROP"] = 46] = "INVDROP";
    PacketType[PacketType["INVRESULT"] = 82] = "INVRESULT";
    PacketType[PacketType["RECONNECT"] = 12] = "RECONNECT";
    PacketType[PacketType["PING"] = 4] = "PING";
    PacketType[PacketType["PONG"] = 86] = "PONG";
    PacketType[PacketType["MAPINFO"] = 85] = "MAPINFO";
    PacketType[PacketType["LOAD"] = 62] = "LOAD";
    PacketType[PacketType["PIC"] = 50] = "PIC";
    PacketType[PacketType["SETCONDITION"] = 19] = "SETCONDITION";
    PacketType[PacketType["TELEPORT"] = 99] = "TELEPORT";
    PacketType[PacketType["USEPORTAL"] = 91] = "USEPORTAL";
    PacketType[PacketType["DEATH"] = 104] = "DEATH";
    PacketType[PacketType["BUY"] = 68] = "BUY";
    PacketType[PacketType["BUYRESULT"] = 87] = "BUYRESULT";
    PacketType[PacketType["AOE"] = 18] = "AOE";
    PacketType[PacketType["GROUNDDAMAGE"] = 84] = "GROUNDDAMAGE";
    PacketType[PacketType["PLAYERHIT"] = 67] = "PLAYERHIT";
    PacketType[PacketType["ENEMYHIT"] = 96] = "ENEMYHIT";
    PacketType[PacketType["AOEACK"] = 102] = "AOEACK";
    PacketType[PacketType["SHOOTACK"] = 3] = "SHOOTACK";
    PacketType[PacketType["OTHERHIT"] = 25] = "OTHERHIT";
    PacketType[PacketType["SQUAREHIT"] = 95] = "SQUAREHIT";
    PacketType[PacketType["GOTOACK"] = 81] = "GOTOACK";
    PacketType[PacketType["EDITACCOUNTLIST"] = 21] = "EDITACCOUNTLIST";
    PacketType[PacketType["ACCOUNTLIST"] = 1] = "ACCOUNTLIST";
    PacketType[PacketType["QUESTOBJID"] = 7] = "QUESTOBJID";
    PacketType[PacketType["CHOOSENAME"] = 9] = "CHOOSENAME";
    PacketType[PacketType["NAMERESULT"] = 13] = "NAMERESULT";
    PacketType[PacketType["CREATEGUILD"] = 40] = "CREATEGUILD";
    PacketType[PacketType["GUILDRESULT"] = 65] = "GUILDRESULT";
    PacketType[PacketType["GUILDREMOVE"] = 101] = "GUILDREMOVE";
    PacketType[PacketType["GUILDINVITE"] = 75] = "GUILDINVITE";
    PacketType[PacketType["ALLYSHOOT"] = 63] = "ALLYSHOOT";
    PacketType[PacketType["ENEMYSHOOT"] = 92] = "ENEMYSHOOT";
    PacketType[PacketType["REQUESTTRADE"] = 6] = "REQUESTTRADE";
    PacketType[PacketType["TRADEREQUESTED"] = 14] = "TRADEREQUESTED";
    PacketType[PacketType["TRADESTART"] = 15] = "TRADESTART";
    PacketType[PacketType["CHANGETRADE"] = 26] = "CHANGETRADE";
    PacketType[PacketType["TRADECHANGED"] = 93] = "TRADECHANGED";
    PacketType[PacketType["ACCEPTTRADE"] = 17] = "ACCEPTTRADE";
    PacketType[PacketType["CANCELTRADE"] = 55] = "CANCELTRADE";
    PacketType[PacketType["TRADEDONE"] = 77] = "TRADEDONE";
    PacketType[PacketType["TRADEACCEPTED"] = 57] = "TRADEACCEPTED";
    PacketType[PacketType["CLIENTSTAT"] = 66] = "CLIENTSTAT";
    PacketType[PacketType["CHECKCREDITS"] = 35] = "CHECKCREDITS";
    PacketType[PacketType["ESCAPE"] = 41] = "ESCAPE";
    PacketType[PacketType["FILE"] = 42] = "FILE";
    PacketType[PacketType["INVITEDTOGUILD"] = 83] = "INVITEDTOGUILD";
    PacketType[PacketType["JOINGUILD"] = 94] = "JOINGUILD";
    PacketType[PacketType["CHANGEGUILDRANK"] = 51] = "CHANGEGUILDRANK";
    PacketType[PacketType["PLAYSOUND"] = 61] = "PLAYSOUND";
    PacketType[PacketType["GLOBALNOTIFICATION"] = 90] = "GLOBALNOTIFICATION";
    PacketType[PacketType["RESKIN"] = 69] = "RESKIN";
    PacketType[PacketType["PETUPGRADEREQUEST"] = 11] = "PETUPGRADEREQUEST";
    PacketType[PacketType["ACTIVEPET_UPDATE_REQUEST"] = 53] = "ACTIVEPET_UPDATE_REQUEST";
    PacketType[PacketType["ACTIVEPETUPDATE"] = 56] = "ACTIVEPETUPDATE";
    PacketType[PacketType["NEWABILITY"] = 60] = "NEWABILITY";
    PacketType[PacketType["PETYARDUPDATE"] = 38] = "PETYARDUPDATE";
    PacketType[PacketType["EVOLVEPET"] = 97] = "EVOLVEPET";
    PacketType[PacketType["DELETEPET"] = 78] = "DELETEPET";
    PacketType[PacketType["HATCHPET"] = 22] = "HATCHPET";
    PacketType[PacketType["ENTERARENA"] = 89] = "ENTERARENA";
    PacketType[PacketType["IMMINENTARENA_WAVE"] = 23] = "IMMINENTARENA_WAVE";
    PacketType[PacketType["ARENADEATH"] = 34] = "ARENADEATH";
    PacketType[PacketType["ACCEPTARENA_DEATH"] = 10] = "ACCEPTARENA_DEATH";
    PacketType[PacketType["VERIFYEMAIL"] = 49] = "VERIFYEMAIL";
    PacketType[PacketType["RESKINUNLOCK"] = 98] = "RESKINUNLOCK";
    PacketType[PacketType["PASSWORDPROMPT"] = 48] = "PASSWORDPROMPT";
    PacketType[PacketType["QUESTFETCH_ASK"] = 16] = "QUESTFETCH_ASK";
    PacketType[PacketType["QUESTREDEEM"] = 24] = "QUESTREDEEM";
    PacketType[PacketType["QUESTFETCH_RESPONSE"] = 79] = "QUESTFETCH_RESPONSE";
    PacketType[PacketType["QUESTREDEEM_RESPONSE"] = 30] = "QUESTREDEEM_RESPONSE";
    PacketType[PacketType["PETCHANGE_FORM_MSG"] = 64] = "PETCHANGE_FORM_MSG";
    PacketType[PacketType["KEYINFO_REQUEST"] = 45] = "KEYINFO_REQUEST";
    PacketType[PacketType["KEYINFO_RESPONSE"] = 33] = "KEYINFO_RESPONSE";
    PacketType[PacketType["CLAIMLOGIN_REWARD_MSG"] = 103] = "CLAIMLOGIN_REWARD_MSG";
    PacketType[PacketType["LOGINREWARD_MSG"] = 37] = "LOGINREWARD_MSG";
    PacketType[PacketType["QUESTROOM_MSG"] = 88] = "QUESTROOM_MSG";
    PacketType[PacketType["PETCHANGE_SKIN_MSG"] = 105] = "PETCHANGE_SKIN_MSG";
})(PacketType = exports.PacketType || (exports.PacketType = {}));