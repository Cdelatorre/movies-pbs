type InputComponentProps = {
  extraClassNames: string;
  readOnly?: boolean;
  checked?: boolean;
  type: string;
  label: string;
  placeholder?: string;
  value?: string | number;
  id?: string;
  name: string;
  error?: boolean;
  onChange: () => void;
  onBlur?: () => void;
  onFocus?: () => void;
  onClick?: () => void;
};

type FiltersComponentProps = {
  filters: string[];
  activeFilters: string;
};

type GenreTabComponentProps = {
  children: string | JSX.Element;
  onDelete?: (id: string) => void;
  id: string;
};

type ButtonComponentProps = {
  action: () => void;
  extraClassNames: string;
  btnType?: string;
  children: string | JSX.Element;
  disabled?: boolean;
};

type FormValues = {
  title: string;
  currentGenre: string;
  genres: string[];
};

type FormErrors = {
  title: string | boolean;
  genres: string | boolean;
};

type Movie = {
  id: string;
  createdAt: string | Date;
  img: string;
  title: string;
  genres: string[];
  viewed: boolean;
};
