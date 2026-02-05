import "./Card.css";

type CardProps = {
  img: string;
  title: string;
  date: string;
  rating: number;
};

export default function Card({ img, title, date, rating }: CardProps) {
  return (
    <>
      <div className="card">
        <div className="card__poster">
          <img className="card__image" src={img} alt={title} />
        </div>

        <div className="card__rating">
          <span className="card__rating-value">{rating}%</span>
        </div>

        <h3 className="card__title">{title.toUpperCase()}</h3>
        <div className="card__date">{date}</div>
      </div>
    </>
  );
}
