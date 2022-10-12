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
};

type ButtonComponentProps = {
  onClick: () => void;
  btnType?: string;
  size?: string;
  children: string | JSX.Element;
  outline?: boolean;
  disabled?: boolean;
};
