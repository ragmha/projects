import bodyParser from 'body-parser';
import cors from 'cors'
import express from 'express';
import { check, validationResult } from 'express-validator';

import BarsAPI from './api/BarsApi';

const app = express();
const barsAPI = new BarsAPI();


app.use(cors());
app.use(bodyParser.json());

app.post(
  '/',
  [
    check('numberOfBars').isNumeric(),
    check('pricesOfBarPacketBox').isArray({ min: 3 }),
    check('quantitiesOfBarPacketBox').isArray({ min: 3 }),
  ],
  (req: express.Request, res: express.Response) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(422).json({ errors: errors.array() });
    }

    const {
      numberOfBars,
      pricesOfBarPacketBox,
      quantitiesOfBarPacketBox,
    } = req.body;

    return res
      .status(200)
      .json(
        barsAPI.saveMyMoney(
          numberOfBars,
          pricesOfBarPacketBox,
          quantitiesOfBarPacketBox
        )
      );
  }
);


app.get('/', (_, res: express.Response) => {
  return res.status(200).json(barsAPI.findMany());
});

export default app;
