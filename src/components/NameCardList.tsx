import { Container } from "./Container";
import { NameCard, NameCardProps } from "./NameCard";

type NameCardListProps = {
  array: NameCardProps[];
};

export const users: NameCardProps[] = [
  {
    img: "https://randomuser.me/api/portraits/men/22.jpg",
    name: "Nagy Péter",
    children: (
      <>
        <p>Leírás-1</p>
        <p>Készségek</p>
      </>
    ),
  },
  {
    img: "https://randomuser.me/api/portraits/men/60.jpg",
    name: "Kis Zsolt",
    children: (
      <>
        <p>Leírás-1</p>
        <p>Készségek</p>
      </>
    ),
  },
];

export const NameCardList = ({array}: NameCardListProps) => {
  return <Container>
      {array.map(({name, ...rest }) => 
        <NameCard {...rest} name={name} key={name}>
        </NameCard>
      )}
    </Container>
};
