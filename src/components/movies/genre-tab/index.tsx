import c from "classnames";
import React from "react";
import "./index.scss";

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

  return (
    <div className={classNames} onClick={() => onDelete && onDelete(id)}>
      {onDelete && (
        <div className="genre-delete">
          <i className="fas fa-times-circle"></i>
        </div>
      )}
      <span>{children}</span>
    </div>
  );
};

export default GenreTab;
