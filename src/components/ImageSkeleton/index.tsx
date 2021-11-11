import LoadingSkeleton from './styles';

interface LoadingSkeletonProps {
  width: number;
  height: number;
}

const ImageSkeleton = ({ width, height }: LoadingSkeletonProps) => (
  <LoadingSkeleton width={width} height={height} />
);

export default ImageSkeleton;
