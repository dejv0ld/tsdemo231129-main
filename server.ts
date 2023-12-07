import express, { Request, Response, json } from 'express';
import { PostBlogRequestBody } from './types';
import { GetBlogs, PostBlog } from './db/client';

const app = express()
const port = 3000

app.use(json());

app.get('/blog', async (req: Request, res: Response) => {
  const blogs = await GetBlogs();
  res.json(blogs);
})

//POST /blog
/*

{
  "url": "https://www.blogg.se"
}

*/
app.post('/blog', async (req: Request, res: Response) => {
  const body = req.body as PostBlogRequestBody;

  //Lägg in i databasen
  const postBlogResult = await PostBlog(body);

  res.json(postBlogResult);
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})