import { Film } from "./Film";
import { Planet } from "./Planet";
import { Species } from "./Species";

export class Person{
    name!: string;
    height!: string;
    mass!: string;
    hair_color!: string;
    skin_color!: string;
    gender!: string;
    birth_year!: string;
    home_planet!: Planet;
    species!: Species[];
    films!: Film[];
}