var ipfsOpt = {
    host: "ipfs.infura.io", 
    port: 5001, 
    protocol: "https"
}

const IPFS = require('ipfs');
const node = IPFS.create(ipfsOpt);

async function AddToIPFS(data, cb){
    node.then((res) => {
        res.add(data).then((dataInfoOnIpfs) => {
            cb(dataInfoOnIpfs);
        });
    });
}



export { AddToIPFS }