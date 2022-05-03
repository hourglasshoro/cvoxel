import { CVoxel, CVoxelMetaDraft } from "@/interfaces";

export const extractCVoxel = (tx: CVoxelMetaDraft): CVoxel => {
  const {
    summary,
    detail,
    deliverable,
    jobType,
    from,
    to,
    isPayer,
    value,
    tokenSymbol,
    tokenDecimal,
    fiatValue,
    fiatSymbol,
    networkId,
    issuedTimestamp,
    txHash,
    relatedTxHashes,
    genre,
    tags,
    toSig,
    fromSig,
    toSigner,
    fromSigner,
    relatedAddresses,
    startTimestamp,
    endTimestamp,
    createdAt,
    updatedAt,
  } = tx;
  return {
    summary,
    detail,
    deliverable,
    jobType,
    from,
    to,
    isPayer,
    value,
    tokenSymbol,
    tokenDecimal,
    fiatValue,
    fiatSymbol,
    networkId,
    issuedTimestamp,
    txHash,
    relatedTxHashes,
    genre,
    tags,
    toSig,
    fromSig,
    toSigner,
    fromSigner,
    relatedAddresses,
    startTimestamp,
    endTimestamp,
    createdAt,
    updatedAt,
  };
};
