const config = () => ({
  PORT: process.env.PORT || 4000,
  DB_URL: process.env.DB_URL || 'mongodb://localhost:27017/nest',
});

export default config;
