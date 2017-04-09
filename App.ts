import * as express from 'express';
import * as bodyParser from 'body-parser';

// Creation et configuration d'Express pour serveur web
class App {
  // instance d'express
  public express: express.Application;

  // Initialisation serveur express
  constructor() {
    this.express = express();
    this.middleware();
    this.routes();
  }

  // Configuration middleware
  private middleware(): void {
    this.express.use(bodyParser.json());
    this.express.use(bodyParser.urlencoded({ extended: false }));
  }

  // Configuration API et redirection route
  private routes(): void {
    
    let router = express.Router();
    router.get('/', (req, res, next) => {
      res.json({
        message: 'Hello World!'
      });
    });
    this.express.use('/', router);
  }

}

export default new App().express;