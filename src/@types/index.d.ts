type InputComponentProps = {
  extraClassNames?: string;
  readOnly?: boolean;
  checked?: boolean;
  type?: string;
  label?: string;
  placeholder?: string;
  value?: string | number;
  id?: string;
  name: string;
  error?: string | boolean;
  onChange?: (e) => void;
  onBlur?: (e) => void;
  onFocus?: (e) => void;
  onClick?: (e) => void;
};

type ButtonComponentProps = {
  action: (e) => void;
  extraClassNames?: string;
  btnType?: string;
  children: string | JSX.Element;
  disabled?: boolean;
};

type GenreTabComponentProps = {
  children: string | JSX.Element;
  onDelete?: (id: string) => void;
  id: string;
};

type FiltersComponentProps = {
  filters: string[];
  activeFilters: string[];
};

type DetailScreenProps = {
  genre?: string | null;
};

type Movie = {
  id: string;
  createdAt?: string | Date;
  img: string;
  title: string;
  genres: string[];
  viewed: boolean;
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
