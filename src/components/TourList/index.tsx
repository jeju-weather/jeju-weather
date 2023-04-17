import styled from 'styled-components';

const RecomandList = styled.li<{ imgUrl: string }>`
  padding: 20px;
  display: flex;
  gap: 20px;
  border-bottom: 1px solid lightgray;
  cursor: pointer;

  .list-thumbnail {
    flex-basis: 200px;
    width: 200px;
    aspect-ratio: 1 / 1;
    background: ${({ imgUrl }) => `url(${imgUrl})no-repeat center / cover`};
    border-radius: 10px;
  }

  .list-info {
    display: flex;
    flex-direction: column;
    gap: 10px;
    flex: 1;
    .list-info-tag {
      span {
        display: inline-block;
        padding: 5px;
        color: gray;
      }
    }
  }
`;

interface TourInfoProps {
  title: string;
  address: string;
  summary: string;
  imgUrl: string;
  tags: string[];
}

export const TourList = (props: TourInfoProps) => {
  const { title, address, summary, imgUrl, tags } = props;
  return (
    <RecomandList imgUrl={imgUrl}>
      <div className="list-thumbnail" />
      <div className="list-info">
        <div className="list-info-title">
          <h3>{title}</h3>
        </div>
        <p>{address}</p>
        <p>{summary}</p>
        <div className="list-info-tag">
          {tags.map((tag, idx) => (
            <span key={idx}>#{tag} </span>
          ))}
        </div>
      </div>
    </RecomandList>
  );
};
