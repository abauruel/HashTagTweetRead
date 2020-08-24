import ITweetRulesDTOS from '../dtos/ITweetRulesDTO';
import axios from 'axios';

class SetTweetRulesService {
  public async execute(
    requestRules: string,
  ): Promise<ITweetRulesDTOS[] | undefined> {
    console.log(requestRules);
    const data = {
      add: [{ value: requestRules }],
    };

    try {
      const rules = await axios.post(
        'https://api.twitter.com/2/tweets/search/stream/rules',
        data,
      );
      return rules.data;
    } catch (error) {
      console.log(error);
    }
  }
}

export default SetTweetRulesService;
