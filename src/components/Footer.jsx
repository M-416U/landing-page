import Card from "./Card";
import { CardItems } from "./utilis/cards";

export default function Footer() {
  return (
    <div className="flex flex-wrap justify-center lg:justify-end gap-10 pt-12 lg:pt-0">
      {CardItems.map((item, index) => (
        <Card key={index} title={item.title} text={item.text} delay={index} />
      ))}
    </div>
  );
}
