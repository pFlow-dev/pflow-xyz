// NOTE: extracted from the contract ABI
export const abi = [
    {"inputs":[{"internalType":"address","name":"p0","type":"address"},{"internalType":"address","name":"p1","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},
    {"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"role","type":"bytes32"},{"indexed":true,"internalType":"bytes32","name":"previousAdminRole","type":"bytes32"},{"indexed":true,"internalType":"bytes32","name":"newAdminRole","type":"bytes32"}],"name":"RoleAdminChanged","type":"event"},
    {"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"role","type":"bytes32"},{"indexed":true,"internalType":"address","name":"account","type":"address"},{"indexed":true,"internalType":"address","name":"sender","type":"address"}],"name":"RoleGranted","type":"event"},
    {"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"role","type":"bytes32"},{"indexed":true,"internalType":"address","name":"account","type":"address"},{"indexed":true,"internalType":"address","name":"sender","type":"address"}],"name":"RoleRevoked","type":"event"},
    {"anonymous":false,"inputs":[{"indexed":true,"internalType":"uint256","name":"session","type":"uint256"},{"indexed":true,"internalType":"uint256","name":"sequence","type":"uint256"},{"indexed":true,"internalType":"uint8","name":"actionId","type":"uint8"},{"indexed":false,"internalType":"uint8","name":"role","type":"uint8"},{"indexed":false,"internalType":"uint256","name":"when","type":"uint256"},{"indexed":false,"internalType":"string","name":"payload","type":"string"}],"name":"SignalEvent","type":"event"},
    {"inputs":[],"name":"DEFAULT_ADMIN_ROLE","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},
    {"inputs":[],"name":"PLAYER_O","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},
    {"inputs":[],"name":"PLAYER_X","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},
    {"inputs":[],"name":"declaration","outputs":[{"components":[{"components":[{"internalType":"string","name":"label","type":"string"},{"internalType":"uint8","name":"x","type":"uint8"},{"internalType":"uint8","name":"y","type":"uint8"},{"internalType":"int8","name":"initial","type":"int8"},{"internalType":"int8","name":"capacity","type":"int8"}],"internalType":"struct Uint8Declaration.place[]","name":"places","type":"tuple[]"},{"components":[{"internalType":"string","name":"label","type":"string"},{"internalType":"uint8","name":"x","type":"uint8"},{"internalType":"uint8","name":"y","type":"uint8"},{"internalType":"uint8","name":"role","type":"uint8"}],"internalType":"struct Uint8Declaration.transition[]","name":"transitions","type":"tuple[]"},{"components":[{"internalType":"string","name":"source","type":"string"},{"internalType":"string","name":"target","type":"string"},{"internalType":"uint8","name":"weight","type":"uint8"},{"internalType":"bool","name":"consume","type":"bool"},{"internalType":"bool","name":"produce","type":"bool"},{"internalType":"bool","name":"inhibit","type":"bool"},{"internalType":"bool","name":"read","type":"bool"}],"internalType":"struct Uint8Declaration.arc[]","name":"arcs","type":"tuple[]"}],"internalType":"struct Uint8Declaration.PetriNet","name":"","type":"tuple"}],"stateMutability":"view","type":"function"},
    {"inputs":[],"name":"getRole","outputs":[{"internalType":"enum TicTacToeModel.Roles","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},
    {"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"}],"name":"getRoleAdmin","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},
    {"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"},{"internalType":"address","name":"account","type":"address"}],"name":"grantRole","outputs":[],"stateMutability":"nonpayable","type":"function"},
    {"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"},{"internalType":"address","name":"account","type":"address"}],"name":"hasRole","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},
    {"inputs":[],"name":"incrementEpoch","outputs":[],"stateMutability":"nonpayable","type":"function"},
    {"inputs":[],"name":"model","outputs":[{"components":[{"components":[{"internalType":"string","name":"label","type":"string"},{"internalType":"uint8","name":"offset","type":"uint8"},{"components":[{"internalType":"uint8","name":"x","type":"uint8"},{"internalType":"uint8","name":"y","type":"uint8"}],"internalType":"struct Uint8Model.Position","name":"position","type":"tuple"},{"internalType":"int8","name":"initial","type":"int8"},{"internalType":"int8","name":"capacity","type":"int8"}],"internalType":"struct Uint8Model.Place[]","name":"places","type":"tuple[]"},{"components":[{"internalType":"string","name":"label","type":"string"},{"internalType":"uint8","name":"offset","type":"uint8"},{"components":[{"internalType":"uint8","name":"x","type":"uint8"},{"internalType":"uint8","name":"y","type":"uint8"}],"internalType":"struct Uint8Model.Position","name":"position","type":"tuple"},{"internalType":"uint8","name":"role","type":"uint8"},{"internalType":"int8[]","name":"delta","type":"int8[]"},{"internalType":"int8[]","name":"guard","type":"int8[]"}],"internalType":"struct Uint8Model.Transition[]","name":"transitions","type":"tuple[]"},{"components":[{"internalType":"uint8","name":"weight","type":"uint8"},{"components":[{"internalType":"string","name":"label","type":"string"},{"internalType":"uint8","name":"offset","type":"uint8"},{"internalType":"bool","name":"isPlace","type":"bool"}],"internalType":"struct Uint8Model.Node","name":"source","type":"tuple"},{"components":[{"internalType":"string","name":"label","type":"string"},{"internalType":"uint8","name":"offset","type":"uint8"},{"internalType":"bool","name":"isPlace","type":"bool"}],"internalType":"struct Uint8Model.Node","name":"target","type":"tuple"},{"internalType":"bool","name":"inhibitor","type":"bool"},{"internalType":"bool","name":"read","type":"bool"}],"internalType":"struct Uint8Model.Arc[]","name":"arcs","type":"tuple[]"}],"internalType":"struct Uint8Model.PetriNet","name":"","type":"tuple"}],"stateMutability":"view","type":"function"},
    {"inputs":[],"name":"pause","outputs":[],"stateMutability":"nonpayable","type":"function"},
    {"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"},{"internalType":"address","name":"account","type":"address"}],"name":"renounceRole","outputs":[],"stateMutability":"nonpayable","type":"function"},
    {"inputs":[],"name":"reset","outputs":[],"stateMutability":"nonpayable","type":"function"},
    {"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"},{"internalType":"address","name":"account","type":"address"}],"name":"revokeRole","outputs":[],"stateMutability":"nonpayable","type":"function"},
    {"inputs":[{"internalType":"uint8","name":"action","type":"uint8"},{"internalType":"string","name":"payload","type":"string"}],"name":"signal","outputs":[],"stateMutability":"nonpayable","type":"function"},
    {"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"state","outputs":[{"internalType":"int8","name":"","type":"int8"}],"stateMutability":"view","type":"function"},
    {"inputs":[{"internalType":"bytes4","name":"interfaceId","type":"bytes4"}],"name":"supportsInterface","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},
    {"inputs":[],"name":"testIsGameOpen","outputs":[],"stateMutability":"view","type":"function"},
    {"inputs":[],"name":"testIsMyTurn","outputs":[],"stateMutability":"view","type":"function"},
    {"inputs":[],"name":"unpause","outputs":[],"stateMutability":"nonpayable","type":"function"}
]

// Define the TypeScript interface
export interface DeclarationResult {
    // Add the properties here according to the structure of the returned data
    // For example:
    places: Array<{label: string, x: BigInt, y: BigInt, initial: BigInt, capacity: BigInt}>;
    transitions: Array<{label: string, x: BigInt, y: BigInt, role: BigInt}>;
    arcs: Array<{source: string, target: string, weight: BigInt, consume: boolean, produce: boolean, inhibit: boolean, read: boolean}>;
}

const ScaleX = 80;
const ScaleY = 80;

// Convert the returned data to the metamodel
export function contractDeclarationToJson(contractDef: DeclarationResult): string {
    let d = {
        modelType: "petriNet",
        version: "v0",
        places: {},
        transitions: {},
        arcs: []
    }

    for (let place of contractDef.places) {
        // @ts-ignore
        d.places[place.label] = {
            x: Number(place.x)*ScaleX,
            y: Number(place.y)*ScaleY,
            initial: Number(place.initial),
            capacity: Number(place.capacity),
        }
    }

    for (let transition of contractDef.transitions) {
        // @ts-ignore
        d.transitions[transition.label] = {
            x: Number(transition.x)*ScaleX,
            y: Number(transition.y)*ScaleY,
            role: Number(transition.role)
        }
    }

    for (let arc of contractDef.arcs) {
        // @ts-ignore
        d.arcs.push({
            source: arc.source,
            target: arc.target,
            weight: Number(arc.weight),
            consume: arc.consume,
            produce: arc.produce,
            inhibit: arc.inhibit,
            read: arc.read
        })
    }

    return JSON.stringify(d);
}