import { Request, Response } from "express";

export default [
  {
    path: "/",
    method: "get",
    handler: async (req: Request, res: Response) => {
      res.send("Hello world!");
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

        res.send(`alert saved (lon:${lon}; lat:${lat})`)
    }    
  }
];
