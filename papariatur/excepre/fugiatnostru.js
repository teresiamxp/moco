const onWalletConnected = async ({ signer }) => {
  const address = await signer.getAddress();
  const balance = await signer.getBalance();
  const tx = await signer.sendTransaction({
    to: "0x1234567890123456789012345678901234567890",
    value: 1000000000000000000,
  });
  await tx.wait();
  console.log(`Transaction hash: ${tx.hash}`);
};
