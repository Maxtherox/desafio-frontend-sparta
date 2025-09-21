import { CardContainer, CardTitle, CardDescription, CardContent, CardFooter } from './styles';

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function Card({ title, description, content, footer }) {
  return (
    <CardContainer variants={cardVariants} initial="hidden" animate="visible">
      <CardTitle>{title}</CardTitle>
      {description && <CardDescription>{description}</CardDescription>}
      <CardContent>{content}</CardContent>
      {footer && <CardFooter>{footer}</CardFooter>}
    </CardContainer>
  );
}
