import { NextFunction, Request, Response, Router } from 'express';

export class HttpController {
  router = Router();

  wrapMethod(fn: (req: Request) => object | Promise<object>) {
    fn = fn.bind(this);
    return async (req: Request, res: Response, next: NextFunction) => {
      try {
        let json = await fn(req);
        res.json(json);
      } catch (error) {
        next(error);
      }
    };
  }

  // demo() {
  //   this.router.post('/upload', (req, res, next) => {
  //     let form = {};
  //     form.parse(req, (err, fields, files) => {
  //       let json = { id: 1 };
  //       res.json(json);
  //     });

  //     return {}
  //   });
  // }
}
