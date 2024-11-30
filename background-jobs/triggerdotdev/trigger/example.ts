import { logger, task, wait } from "@trigger.dev/sdk/v3";
import dotenv from "@dotenvx/dotenvx";

// Load environment variables
dotenv.config({path: ".env.production"});

export const helloWorldTask = task({
  id: "hello-world",
  // Set an optional maxDuration to prevent tasks from running indefinitely
  maxDuration: 300, // Stop executing after 300 secs (5 mins) of compute
  run: async (payload: any, { ctx }) => {
    // Use process.env
    logger.log(`Hello, ${process.env.HELLO}!`, { payload, ctx });

    await wait.for({ seconds: 5 });

    return {
      message: `Hello, ${process.env.HELLO}!`, // Use process.env
    }
  },
});
