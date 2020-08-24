import { Request, Response } from 'express';
import GetTweetRulesService from '../../../services/GetTweetRulesService';
import SetTweetRulesService from '../../../services/SetTweetRulesServices';
import RemoveTweetRulesService from '../../../services/RemoveTweetRulesService';

class TweetRulesController {
  public async index(request: Request, response: Response): Promise<Response> {
    const getTweetRulesService = new GetTweetRulesService();
    const rules = await getTweetRulesService.execute();
    return response.json(rules);
  }
  public async create(request: Request, response: Response): Promise<Response> {
    const { value } = request.body;
    console.log(request.body);
    const setTweetRulesService = new SetTweetRulesService();
    const rule = await setTweetRulesService.execute(value);
    return response.json(rule);
  }

  public async delete(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const removeTweetRulesService = new RemoveTweetRulesService();
    await removeTweetRulesService.execute(id);

    return response.status(201).send();
  }
}

export default TweetRulesController;
