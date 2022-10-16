import c from "classnames";
import "./index.scss";
import { NavLink } from "react-router-dom";

const GenreTab = ({
  children,
  onDelete,
  id,
}: GenreTabComponentProps): JSX.Element => {
  const classNames = c(
    "genre-tab",
    "border",
    "border-info",
    "text-light",
    onDelete && "form-genre"
  );

  if (onDelete)
    return (
      <div className={classNames} onClick={() => onDelete(id)}>
        <div className="genre-delete">
          <i className="fas fa-times-circle"></i>
        </div>
        <span>{children}</span>
      </div>
    );

  return (
    <NavLink to={`/?genre=${id}`} className={classNames}>
      <span>{children}</span>
    </NavLink>
  );
};

export default GenreTab;
