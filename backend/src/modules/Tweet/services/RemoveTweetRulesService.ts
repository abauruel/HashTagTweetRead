import axios from 'axios';
class RemoveTweetRulesService {
  public async execute(id: string) {
    const ids = [id];
    const rules = await axios.post(
      'https://api.twitter.com/2/tweets/search/stream/rules',
      {
        delete: {
          ids,
        },
      },
      {
        headers: {
          Authorization: `Bearer ${process.env.TWITTER_TOKEN}`,
        },
      },
    );
  }
}
export default RemoveTweetRulesService;
