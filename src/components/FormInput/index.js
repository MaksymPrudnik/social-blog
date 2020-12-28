import { GroupContainer, Input, Label } from "./styled";

export const FormInput = ({ label, ...otherProps }) => (
  <GroupContainer>
    <Input {...otherProps} />
    {label ? <Label className="shrink-label">{label}</Label> : null}
  </GroupContainer>
);
