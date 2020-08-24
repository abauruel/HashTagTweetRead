import { Router } from 'express';
import TweetRulesController from '../controllers/TweetRulesControler';
const tweetRulesRoute = Router();
const tweetRulesController = new TweetRulesController();

tweetRulesRoute.get('/', tweetRulesController.index);
tweetRulesRoute.post('/', tweetRulesController.create);
tweetRulesRoute.delete('/:id', tweetRulesController.delete);

export default tweetRulesRoute;
