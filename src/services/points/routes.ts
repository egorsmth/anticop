import { Request, Response } from "express";
import db from "../../db/index";

export default [
  {
    path: "/",
    method: "get",
    handler: async (req: Request, res: Response) => {
      res.send("путешествие в тысячу миль начинается с единственного шага, а ты пидор (с) Жак Ив Сталоне");
    }
  },
  {
    path: '/alert',
    method: 'post',
    schema: {
        lon: {type: 'number'},
        lat: {type: 'number'}
    },
    handler: async (req: Request, res: Response) => {
        const lon: number = req.body.lon;
        const lat: number = req.body.lat;

        // const p = new Point(lat, lon);
        // const connection = await db;
        // await connection.manager.save(p);
        // console.log("Saved a new point with id: " + p.id);

        // console.log("Loading users from the database...");
        // const users = await connection.manager.find(Point);
        // console.log("Loaded users: ", users);

        // console.log("Here you can setup and run express/koa/any other framework.");

        res.send(`alert saved (lon:${lon}; lat:${lat})`)
    }    
  }
];
