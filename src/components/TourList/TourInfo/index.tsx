import { MdStarRate } from 'react-icons/md';
import styled from 'styled-components';

const RecomandList = styled.li`
  padding: 20px;
  display: flex;
  gap: 20px;
  border-bottom: 1px solid lightgray;
  cursor: pointer;

  .list-thumbnail {
    width: 100px;
    height: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: gray;
    border-radius: 10px;
  }

  .list-info {
    > * {
      margin-bottom: 10px;
    }

    .list-info-title {
      display: flex;
      gap: 10px;
      svg {
        color: ${({ theme }) => theme.text.point};
      }
    }
  }
`;

interface TourInfoProps {
  title: string;
  starRate: number;
  address: string;
  summary: string;
}

export const TourInfo = (props: TourInfoProps) => {
  const { title, starRate, address, summary } = props;
  return (
    <RecomandList>
      <div className="list-thumbnail">이미지</div>
      <div className="list-info">
        <div className="list-info-title">
          <h3>{title}</h3>
          <span>
            <MdStarRate /> {starRate}
          </span>
        </div>
        <p>{address}</p>
        <p>{summary}</p>
      </div>
    </RecomandList>
  );
};
