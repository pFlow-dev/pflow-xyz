type Version = "v0" | "v1";
export interface RoleDef {
    label: string;
}
export interface Position {
    x: number;
    y: number;
    z?: number;
}
export type Dsl = {
    fn: Fn;
    cell: Cell;
    role: Role;
};
export type Fn = (label: string, role: RoleDef, position: Position) => TxNode;
export type Cell = (label: string, initial: number, capacity: number, position: Position) => PlaceNode;
export type Role = (label: string) => RoleDef;
export type DeclarationFunction = ({ fn, cell, role }: Dsl) => void;
export type Vector = number[];
export type MetaType = "place" | "transition" | "arc";
interface TypeAnnotation {
    metaType: MetaType;
}
export type MetaObject = Place | Transition | Arc;
export interface Place extends TypeAnnotation {
    metaType: "place";
    label: string;
    offset: number;
    initial: number;
    capacity: number;
    position: Position;
}
export interface Guard {
    label: string;
    delta: Vector;
    inverted?: boolean;
}
export interface Transition extends TypeAnnotation {
    metaType: "transition";
    label: string;
    role: RoleDef;
    delta: Vector;
    guards: Map<string, Guard>;
    allowReentry: boolean;
    position: Position;
    subnet?: {
        m: Model;
        type: "entry" | "exit";
    };
}
export interface Arc extends TypeAnnotation {
    metaType: "arc";
    offset: number;
    source: {
        place?: Place;
        transition?: Transition;
    };
    target: {
        place?: Place;
        transition?: Transition;
    };
    weight: number;
    inhibit?: boolean;
    reentry?: boolean;
    inverted?: boolean;
}
export interface NodeType {
    nodeType: "place" | "transition";
}
export interface PlaceNode extends NodeType {
    nodeType: "place";
    place: Place;
    tx: (weight: number, target: TxNode) => void;
    guard: (weight: number, target: TxNode) => void;
}
export interface TxNode extends NodeType {
    nodeType: "transition";
    transition: Transition;
    tx: (weight: number, target: PlaceNode) => void;
    guard: (weight: number, target: PlaceNode) => void;
    reentry: (target: PlaceNode) => void;
}
export declare enum ModelType {
    elementary = "elementary",
    workflow = "workflow",
    petriNet = "petriNet"
}
export interface PetriNet {
    roles: Map<string, RoleDef>;
    places: Map<string, Place>;
    transitions: Map<string, Transition>;
    arcs: Array<Arc>;
    type: ModelType;
}
export interface Result {
    out: Vector;
    ok: boolean;
    role: string;
    inhibited?: boolean;
    overflow?: boolean;
    underflow?: boolean;
}
export interface Model {
    addPlace: (coords: {
        x: number;
        y: number;
    }) => boolean;
    addTransition: (coords: {
        x: number;
        y: number;
    }) => boolean;
    capacityVector: () => Vector;
    def: PetriNet;
    swapArc: (id: number) => void;
    deleteArc: (id: number) => void;
    deletePlace: (id: string) => void;
    deleteTransition: (id: string) => void;
    emptyVector: () => Vector;
    fire: (state: Vector, action: string, multiple: number, resolve?: (res: Result) => void, reject?: (res: Result) => void) => Result;
    getObject: (id: string) => Place | Transition;
    getPlace: (label: string | number) => Place;
    getSize: () => {
        width: number;
        height: number;
    };
    guardFails: (state: Vector, action: string, multiple: number) => boolean;
    initialVector: () => Vector;
    newLabel: (label: string, suffix?: number) => string;
    objectExists: (id: string) => boolean;
    pushState: (state: Vector, action: string, multiple: number) => Result;
    renamePlace: (oldLabel: string, newLabel: string) => void;
    renameTransition: (oldLabel: string, newLabel: string) => void;
    setArcWeight: (offset: number, weight: number) => boolean;
    toObject: (mode?: "sparse" | "full") => any;
    toggleInhibitor: (id: number) => boolean;
    transitionSeq: () => string;
}
export type ModelDeclaration = {
    modelType: ModelType;
    version: Version;
    places: {
        [key: string]: {
            offset: number;
            initial?: number;
            capacity?: number;
            x: number;
            y: number;
        };
    };
    transitions: {
        [key: string]: {
            role?: string;
            x: number;
            y: number;
        };
    };
    arcs: {
        source: string;
        target: string;
        weight: number;
        inhibit?: boolean;
        reentry?: boolean;
    }[];
};
export interface ModelOptions {
    declaration?: DeclarationFunction | ModelDeclaration;
    type?: ModelType;
}
export declare function newModel({ declaration, type }: ModelOptions): Model;
export {};
