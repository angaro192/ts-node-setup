import * as express from 'express';
import { Request, Response } from 'express';

const app = express();
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.get('', (req: Request, res: Response) => {
  res.send('Hello Word');
});

export default app;
