interface Characteristics {
    destroysProperty: boolean;
    criticizem: boolean;
    forcesToHaveSex: boolean;
    threatens: boolean;
    accusesOfBeingUnfaithful: boolean;
    shouts: boolean;
}

export interface Review {
    firstName: string;
    lastName: string;
    age: number;
    hebFirstName: string;
    hebLastName: string;
    characteristics: Characteristics;
}