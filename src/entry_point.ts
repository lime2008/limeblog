import { navigate } from './config/route.ts';
import { info } from './config/info.ts';
import { posts } from './config/post.ts';
import { links , links_style , brokens } from './config/link.ts';
import { Item as postType } from './config/post.ts';
export type { postType }; 
export{
   brokens,
   links,
   links_style,
   navigate,
   posts,
   info,
}
