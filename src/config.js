import { config } from "dotenv";
config();

export default {
  port: process.env.PORT || 3000,
    dbUser: process.env.DB_USER || "Ces_dev",
    dbPassword: process.env.DB_PASSWORD || "cesar",
    dbServer: process.env.DB_SERVER || "localhost",
    dbDatabase: process.env.DB_DATABASE || "webstore",
};
