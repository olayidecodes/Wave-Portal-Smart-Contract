const main = async () => {
    // This will actually compile our contract and generate the necessary files we need to work with our contract under the artifacts directory.
    const waveContractFactory = await hre.ethers.getContractFactory("WavePortal");
    // Hardhat will create a local Ethereum network for us, but just for this contract. Then, after the script completes it'll destroy that local network.
    const waveContract = await waveContractFactory.deploy();
    // We'll wait until our contract is officially deployed to our local blockchain! Our constructor runs when we actually deploy.
    await waveContract.deployed();
    // Finally, once it's deployed waveContract.address  will basically give us the address of the deployed contract.
    console.log("Contract deployed to:", waveContract.address);
};

const runMain = async () => {
    try {
        await main();
        process.exit(0);
    }
    catch (error) {
        console.log(error);
        process.exit(1);
    }
}

runMain();