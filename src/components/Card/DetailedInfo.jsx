import Article from "./Article";

const detailedInfo = [
  {
    id: 1,
    header: "About",
    content:
      "I am a frontend developer with a particular interest in making \
      things simple and automating daily tasks. I try to keep up with \
      security and best practices, and am always looking for new things \
      to learn.",
  },
  {
    id: 2,
    header: "Interests",
    content:
      "Food expert. Music scholar. Reader. Internet fanatic. Bacon buff. \
      Entrepreneur. Travel geek. Pop culture ninja. Coffee fanatic.",
  },
];

export default function DetailedInfo() {
  return (
    <>
      {detailedInfo.map((item) => (
        <Article key={item.id} header={item.header} content={item.content} />
      ))}
    </>
  );
}
