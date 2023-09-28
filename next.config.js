// This uses phases as outlined here: https://nextjs.org/docs/#custom-configuration
module.exports = () => {
    const env = {
        API_URL: process.env.API_URL,
    };
  
    // next.config.js object
    return {
      env,
      output: 'standalone',
    };
  };
  