import {
  Children,
  cloneElement,
  ForwardedRef,
  forwardRef,
  HTMLAttributes,
  isValidElement,
} from 'react';
import * as React from 'react';
import {
  FormControl,
  FormControlProps,
  FormHelperText,
  FormHelperTextProps,
  FormLabel,
  FormLabelProps,
  RadioGroup,
  RadioGroupProps,
  RadioProps,
} from '@mui/material';

/**
 * TextField 레벨의 컴포넌트
 * 지속적으로 기능 고도화 방향
 */
interface IRadioGroupFieldProps extends FormControlProps {
  FormHelperTextProps?: Partial<FormHelperTextProps>;
  fullWidth?: boolean;
  helperText?: React.ReactNode;
  id?: string;
  FormLabelProps?: Partial<FormLabelProps>;
  radioGroupProps?: RadioGroupProps;
  radioGroupRef?: React.Ref<HTMLAttributes<HTMLDivElement>>;
  label?: React.ReactNode;
  value?: unknown;
  row?: RadioGroupProps['row'];
}

const Component = (
  {
    color,
    defaultValue,
    disabled,
    error,
    FormHelperTextProps,
    helperText,
    id,
    FormLabelProps,
    label,
    radioGroupProps,
    radioGroupRef,
    children,
    row,
    ...rest
  }: IRadioGroupFieldProps,
  ref: ForwardedRef<HTMLDivElement>,
) => {
  return (
    <FormControl
      ref={ref}
      color={color}
      defaultValue={defaultValue}
      disabled={disabled}
      error={error}
      {...rest}
    >
      {label && (
        <FormLabel
          color={color}
          disabled={disabled}
          error={error}
          htmlFor={id}
          {...FormLabelProps}
        >
          {label}
        </FormLabel>
      )}

      <RadioGroup
        ref={radioGroupRef}
        id={id}
        defaultValue={defaultValue}
        row={row}
        {...radioGroupProps}
      >
        {Children.map(children, (child) => {
          if (isValidElement<RadioProps>(child)) {
            return cloneElement(child, { disabled });
          }

          return child;
        })}
      </RadioGroup>

      {helperText && (
        <FormHelperText
          disabled={disabled}
          error={error}
          {...FormHelperTextProps}
        >
          {helperText}
        </FormHelperText>
      )}
    </FormControl>
  );
};

export default forwardRef(Component);
