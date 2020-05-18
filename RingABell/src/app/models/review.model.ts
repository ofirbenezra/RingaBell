export enum EyeColor {
    blue,
    brown,
    green,
    black,
    not_sure
}

export enum HairColor {
    blond,
    brown,
    redHead,
    black,
    not_sure
}

export enum Height {
    high,
    short,
    average,
    not_sure
}

export enum Physique {
    full,
    average,
    Athlete,
    not_sure
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
    behaviorChar: BehaviorCharacteristics;
    physicalChar: PhysicalCharacteristics;
}