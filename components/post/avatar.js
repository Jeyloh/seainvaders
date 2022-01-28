import Image from 'next/image';
import { FlexContainer } from '../../styles/containers.styled';

export default function Avatar({ name, picture, children }) {
  return (
    <FlexContainer alignItems={'flex-end'} fullWidth gap={10}>
      {picture && (
        <Image
          height={50}
          width={50}
          src={picture}
          className='rounded'
          alt={name}
        />
      )}
      <FlexContainer column gap={10}>
        <div>{name}</div>
        {children && <div>{children}</div>}
      </FlexContainer>
    </FlexContainer>
  );
}
