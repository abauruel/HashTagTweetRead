import { Router } from 'express';
import TweetRulesRouter from '../../../../modules/Tweet/infra/http/routes/tweetRules.route';

const routes = Router();

routes.use('/tweetrules', TweetRulesRouter);

export default routes;
