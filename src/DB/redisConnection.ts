import * as session from 'express-session';
import * as connectRedis from 'connect-redis';
let RedisStore = connectRedis(session);

app.use(session({
    store: new RedisStore({client: redis.createClient(6379, "localhost")}),...
}));