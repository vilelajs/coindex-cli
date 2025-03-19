import { Command } from "commander";
import Coindex from "../libs/coindex.js";

const Comb = new Command("comb")
  .description("look the full list of combinations")
  .action(() => {
    Coindex.CoinCombinations();
  });

export default Comb;
