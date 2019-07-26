import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";

@Entity()
export class Point {

    constructor(lat: number, lon: number) {
        this.lat = lat;
        this.lon = lon;   
    }
    
    @PrimaryGeneratedColumn()
    id: number | undefined;

    @Column()
    lat: number | undefined;

    @Column()
    lon: number | undefined;

}
