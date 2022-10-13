type InputComponentProps = {
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

type ButtonComponentProps = {
  action: () => void;
  btnType?: string;
  size?: string;
  children: string | JSX.Element;
  outline?: boolean;
  disabled?: boolean;
};
