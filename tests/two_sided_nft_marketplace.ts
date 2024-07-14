import * as anchor from "@project-serum/anchor";
import { Program } from "@project-serum/anchor";
import { TwoSidedNftMarketplace } from "../target/types/two_sided_nft_marketplace";

describe("two_sided_nft_marketplace", () => {
  // Configure the client to use the local cluster.
  anchor.setProvider(anchor.AnchorProvider.env());

  const program = anchor.workspace.TwoSidedNftMarketplace as Program<TwoSidedNftMarketplace>;

  it("Is initialized!", async () => {
    // Add your test here.
    const tx = await program.methods.initialize().rpc();
    console.log("Your transaction signature", tx);
  });
});
