import { Command } from "commander";
import Coindex from "../libs/coindex.js";

const Coins = new Command("coins")
  .description("look the list of coin names")
  .action(() => {
    Coindex.CoinNames();
  });

export default Coins;
