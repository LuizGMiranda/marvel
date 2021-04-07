import React from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";

const LoadingCard = () => (
  <SkeletonTheme color="lightGray">
      <Skeleton reactangle={true} height={173} width={173} />
      <Skeleton count={1} width={173} />
  </SkeletonTheme>
);

export default LoadingCard;
