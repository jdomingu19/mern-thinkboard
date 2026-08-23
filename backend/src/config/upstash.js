// MERN Thinkboard @jdomingu19
// Web Development Bootcamp @burakorkmez
// upstash.js

// Import Upstash Ratelimit and Redis clients with dotenv configuration
import { Ratelimit } from "@upstash/ratelimit";
import { Redis } from "@upstash/redis";
import dotenv from "dotenv";

// Load environment variables from .env file
dotenv.config();

// Configure sliding window rate limiter with Redis backend
const ratelimit = new Ratelimit({
  redis: Redis.fromEnv(),
  limiter: Ratelimit.slidingWindow(100, "60 s"),
});

// Export ratelimit instance for middleware usage
export default ratelimit;
