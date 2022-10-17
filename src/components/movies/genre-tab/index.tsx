import c from "classnames";
import { NavLink } from "react-router-dom";
import "./index.scss";

const GenreTab = ({
  id,
  children,
  onDelete,
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
        <div data-testid={`genre-delete-${id}`} className="genre-delete">
          <i className="fas fa-times-circle"></i>
        </div>
        <span data-testid={`genre-tab-${id}`}>{children}</span>
      </div>
    );

  return (
    <NavLink to={`/?genre=${id}`} className={classNames}>
      <span data-testid={`genre-tab-${id}`}>{children}</span>
    </NavLink>
  );
};

export default GenreTab;
