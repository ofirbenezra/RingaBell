export enum EyeColor {
    blue = "blue",
    brown = "brown",
    green = "green",
    black = "black",
    not_sure = "not_sure"
}

export enum HairColor {
    blond = "blond",
    brown = "brown",
    redHead = "redHead",
    black = "black",
    not_sure = "not_sure"
}

export enum Height {
    high = "high",
    short = "short",
    average = "average",
    not_sure = "not_sure"
}

export enum Physique {
    full = "full",
    average = "average",
    athlete = "athlete",
    not_sure = "not_sure"
}

interface BehaviorCharacteristics {
    destroysProperty: boolean;
    criticizem: boolean;
    forcesToHaveSex: boolean;
    threatens: boolean;
    accusesOfBeingUnfaithful: boolean;
    shouts: boolean;
}

interface PhysicalCharacteristics {
    eyeColor?: EyeColor;
    hairColor?: HairColor;
    height?: Height;
    physique?: Physique;
}

export interface Review {
    firstName: string;
    lastName: string;
    age: number;
    hebFirstName: string;
    hebLastName: string;
    nickName: string;
    behaviorChar: BehaviorCharacteristics;
    physicalChar: PhysicalCharacteristics;
}