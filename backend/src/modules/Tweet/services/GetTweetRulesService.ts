import axios from 'axios';
import ITweetRulesDTOS from '../dtos/ITweetRulesDTO';
class GetTweetRulesService {
  public async execute(): Promise<ITweetRulesDTOS[]> {
    const rules = await axios.get(
      'https://api.twitter.com/2/tweets/search/stream/rules',
    );
    return rules.data;
  }
}

export default GetTweetRulesService;
