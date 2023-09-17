import * as B from './ButtonStyle';

export default function Button(props) {
  return (
    <>
      <B.ButtonWrapper>{props.text}</B.ButtonWrapper>
    </>
  );
}
