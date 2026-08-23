// MERN Thinkboard @jdomingu19
// Web Development Bootcamp @burakorkmez
// rateLimiter.js

// Import configured ratelimit instance from Upstash config
import ratelimit from "../config/upstash.js";

// Middleware to enforce request rate limiting using Upstash Redis
const rateLimiter = async (req, res, next) => {
  try {
    const { success } = await ratelimit.limit("my-limit-key");

    if (!success) {
      return res.status(429).json({
        message: "Too many requests, please try again later...",
      });
    }

    next();
  } catch (error) {
    console.log("Rate limit error:", error);
    next(error);
  }
};

// Export middleware for integration in Express server
export default rateLimiter;
