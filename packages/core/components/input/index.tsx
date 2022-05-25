import * as React from 'react';
import InternalInput, { InputProps, InputRef } from './Input';
import Group from './Group';
import Search from './Search';
import TextArea from './TextArea';
import Password from './Password';

export type { InputProps, InputRef } from './Input';
export type { GroupProps } from './Group';
export type { SearchProps } from './Search';
export type { TextAreaProps } from './TextArea';
export type { PasswordProps } from './Password';

interface CompoundedComponent
  extends React.ForwardRefExoticComponent<InputProps & React.RefAttributes<InputRef>> {
  Group: typeof Group;
  Search: typeof Search;
  TextArea: typeof TextArea;
  Password: typeof Password;
}

const Input = InternalInput as CompoundedComponent;

Input.Group = Group;
Input.Search = Search;
Input.TextArea = TextArea;
Input.Password = Password;
export default Input;
