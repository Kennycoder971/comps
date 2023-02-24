import Accordion from "../components/Accordion";

function AccordionPage() {
  const items = [
    {
      id: "fSDFQSD",
      label: "Can I use react on a project",
      content: "You can use react on any project",
    },
    {
      id: "53423F",
      label: "Can I use react on a project",
      content: "You can use react on any project",
    },
    {
      id: "HGLFPPDS",
      label: "Can I use react on a project",
      content: "You can use react on any project",
    },
  ];

  return <Accordion items={items} />;
}

export default AccordionPage;
